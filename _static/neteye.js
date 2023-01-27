(function(funcName, baseObj) {
    "use strict";
    // The public function name defaults to window.docReady
    // but you can modify the last line of this function to pass in a different object or method name
    // if you want to put them in a different namespace and those will be used instead of
    // window.docReady(...)
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }

    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        // IE only safe when readyState is "complete", others safe when readyState is "interactive"
        if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);
// modify this previous line to pass in your own method name
// and object for the method to be attached to

/* Neteye JS entry point */
(function(){
    docReady(() => {
        initCookie();
        initCodeHighlights();
        initUserguideTheme();
        addBannerTags();
        AddVersionDirectiveTags();

        $('#content a.headerlink').click(function (e) {
            copyHrefToClipboard(e);
        });
    });

    function copyToClipboard(textToCopy) {
        var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val(textToCopy).select();
        document.execCommand("copy");
        $temp.remove();
    }

    function copyHrefToClipboard(e) {
        let currentUrl = window.location.toString();
        currentUrl = currentUrl.split('#')[0];
        const elementHref = e.target.getAttribute('href');
        const copyText = currentUrl + elementHref;
        copyToClipboard(copyText);
    }

    function initCookie() {
        if(Cookies.get('user-accepts-cookies')  !== 'true') {
            $('#cookie-banner').show();
            $('#cookie-banner .btn-reject-cookie').on('click', function (){
                $('#cookie-banner').hide();
            });
            $('#cookie-banner .btn-accept-cookie').on('click', function (){
                Cookies.set('user-accepts-cookies', true, {expires: 3650, sameSite: 'strict'});
                $('#cookie-banner').hide();
            });
        }
    }

    function initCodeHighlights() {
        var codeHighlightNodes = $('.document .highlight');
        if (codeHighlightNodes.length === 0) {
            return;
        }

        $.each(codeHighlightNodes, function (index, value) {
            if (!$($(value).parent()).parent().hasClass('codeblock')) {
                $(value).prepend('<span class="copy"></span>');
            }
        });

        /* Set first $/# grey */
        $.each(codeHighlightNodes, function (index, value) {
            if (!$($(value).parent()).parent().hasClass('codeblock')) {
                var codeBlock = $(value).children('pre');
                if (!codeBlock.length)
                    return;
                $.each(codeBlock.contents(), function (i, val) {
                    if (i <= 1 && $(val).text().length > 0) {
                        var text = $(val).text().trim();
                        var firstChar = text.slice(0, 1);
                        if (firstChar === '#' || firstChar === '$') {
                            var newText = text.slice(firstChar.length);
                            var spanNewText = $('<span></span>').text(newText);
                            var spanFirstChar = $('<span class="code-prompt">' + firstChar + '</span>');
                            $(val).replaceWith($.merge(spanFirstChar, spanNewText));
                        }
                    } else {
                        return;
                    }
                });
            }
        });

        /* Copy */
        $('.document .highlight .copy').click((e) => {
            var el = $(e.target).parent().find('pre');
            if (el.length === 0) {
                return;
            }
            $(e.target).append('<span class="tooltip"><span class="arrow"></span><span class="text">Copied!</span></span>')
            var tooltip = $(e.target).find('span.tooltip');
            setTimeout(function() {
                $(tooltip).fadeOut(110, function (e){
                    $(tooltip).remove();
                });
            }, 3000);
            var textToCopy = el.text();
            textToCopy = textToCopy.replace(/^(# |\$ )/gm, '');
            copyToClipboard(textToCopy);
        });
    }

    function initUserguideTheme() {
        var userguideTheme = (Cookies.get('neteye-userguide-theme') === 'true');
        if (userguideTheme) {
            $('body').addClass('darkTheme');
        }

        $('#topbar #switch-theme').click(() => {
            var userguideTheme = (Cookies.get('neteye-userguide-theme') === 'true');
            setCookie('neteye-userguide-theme', ! userguideTheme);
            $('body').toggleClass('darkTheme');
        })
    }

    function extractBadgeContentFromMap(jsonMap) {
        var url = window.location.pathname;
        urlParts = url.split('/');

        /* Remove first part ("userguide" for local instance or "4.17" for online) */
        if (urlParts.length > 1) {
            urlParts.splice(1, 1);
            url = urlParts.join('/');
        }

        for (const property in jsonMap) {
            if (jsonMap[property].includes(url)) {
                return property;
            }
        }

        return false;
    }

    function addBannerTags() {
        var url = window.location.pathname;
        urlParts = url.split('/');

        var mapUrl = '/_static/pageBadgesMap.json';
        if (urlParts.length > 1) {
            basePath = urlParts.splice(0, 2);
            mapUrl = basePath.join("/") + mapUrl;
        }

        $.ajax(mapUrl, {
            success: function(data) {
                var badgeContent = extractBadgeContentFromMap(data);
                if (badgeContent !== false) {
                    $('#banner .banner-title').append('<tag>' + badgeContent + '</tag>');
                }
            },
            error: function() {
                console.error('Fail to load ' + mapUrl);
            }
        });
    }

    function AddVersionDirectiveTags() {
        addVersionDirectiveTagsForNew();
        addVersionDirectiveTagsForChanged();
        addVersionDirectiveTagsForDeprecated();
    }

    function addVersionDirectiveTagsForNew() {
        let versionModifiedAddedEle = $('.document .versionmodified.added');
        updateVersionModifiedDomElement(versionModifiedAddedEle);

    }

    function addVersionDirectiveTagsForChanged() {
        let versionModifiedChangedEle = $('.document .versionmodified.changed');
        updateVersionModifiedDomElement(versionModifiedChangedEle);
    }

    function addVersionDirectiveTagsForDeprecated() {
        let versionModifiedDeprecatedEle = $('.document .versionmodified.deprecated');
        updateVersionModifiedDomElement(versionModifiedDeprecatedEle);
    }

    function updateVersionModifiedDomElement(versionModifiedEle) {
        if (versionModifiedEle.length === 0) {
            return;
        }

        const regex = /^(New|Changed|Deprecated)\s.*version\s([\d+.\d+].*):/gm;
        let string = versionModifiedEle.text();
        let match;
        let modifiedDom;

        while ((match = regex.exec(string)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (match.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            modifiedDom = '<span class="versionmodified-type">' + match[1] + '</span>' +
                '<span class="version-' + match[1].toLowerCase() + '">' + match[2] + '</span>';
        }

        if(modifiedDom) {
            versionModifiedEle.html(versionModifiedEle.text().replace(regex, modifiedDom));
        }
    }

    function setCookie(cookieName, cookieValue) {
        if (Cookies.get('user-accepts-cookies')  === 'true') {
            Cookies.set(cookieName, cookieValue, {expires: 3650, sameSite: 'strict'});
        }
    }
})();