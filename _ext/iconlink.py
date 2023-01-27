# -*- coding: utf-8 -*-
'''
Sphinx/docutils extension to create inline links with FontAwesome icons.

    Example role in an .rst file:

        :iconlink:ref:`type|link text|https://opencv.org/`

    Vertical bars (|) separate the following arguments:

        type -- Selects the Font Awesome icon and HTML/CSS attributes to use, and browser behavior
                "ext" will select the external icon and open a new tab in the browser
                "gloss" will use the (?) icon and not switch tabs
                "video" will use the (>) icon and not switch tabs
                "pivotal" will insert the Pivotal logo and open a new browser tab
        link text -- The string to display on the web page wrapped in <a href="">...</a>
                     If the link is blank, only the icon will appear
        URL -- The URL to use as the link in the href="..." attribute

    More information:  https://docutils.readthedocs.io/en/sphinx-docs/howto/rst-roles.html
    Potentially modified:  ..\site-packages\docutils\writers\_html_base.py
                           ..\site-packages\docutils\nodes.py

'''

from docutils import nodes


def make_param_link(name, rawtext, text, lineno, inliner, options={}, content=[]):
    # name:  The role name, here it will always be 'iconlink'
    # rawtext:  The full parsed role in the document, including the role name and quotes
    # text:  Just the content inside the role's quotes

    # Break the text string apart according to the pipe character (there should always be 2 pips)
    try:
        type, linktext, ref = text.split('|')
    except ValueError:
        print('\033[93mIconLink error when parsing:  ', rawtext, '\033[0m')
        return [], []


    if type != '':
        if type == 'ext':   # or glossary, or video, or ...
            node = nodes.reference(rawtext, linktext + ' ', refuri=ref, **options)
            # node.attributes.__setitem__('icon', 'external')  # should pass through to HTML5.py, but not working
            node.attributes.__setitem__('target', '_blank')  # passes through to output
            node2 = nodes.emphasis('', '')
            node2.attributes.__setitem__('class', 'fas fa-small fa-external-link-alt')
            node.append(node2)
        elif type == 'gloss':
            # Example in test_case_building.rst
            # Would be nice if this could use the shortened section URL instead of doc root included
            node1 = nodes.raw(rawtext, linktext + ' ', format="html")
            node1.attributes.__setitem__('classes', ['glossdef'])
            node2 = nodes.reference('', '', refuri=ref, **options)
            node3 = nodes.emphasis('', '')
            node3.attributes.__setitem__('class', 'fa fa-tiny fa-question-circle')
            node2.append(node3)
            return [node1, node2], []
        elif type == 'video':   # <a href="glossary.html#glossary-test-case"><i class="fa fa-tiny fa-question-circle"></i></a>`
            # Example in test_case_execution.rst
            # Only a link on the icon, would also be nice to use the shortened section URL
            node = nodes.reference(rawtext, linktext + ' ', refuri=ref, internal=True, **options)
            node.attributes.__setitem__('style', 'font-style: italic; font-weight: bold;')
            node2 = nodes.emphasis('', '')
            node2.attributes.__setitem__('class', 'fa fa-tiny fa-play-circle')
            node.append(node2)
        elif type == 'pivotal':
            # example in release_notes_31.rst
            # Not an icon, but a small image to be used inline
            base_uri = 'https://www.pivotaltracker.com/n/projects/1533621/stories/'
            node = nodes.reference(rawtext, ' ', refuri=base_uri+ref, **options)
            node.attributes.__setitem__('target', '_blank2')
            # This should make it relative to the _build/ directory
            node2 = nodes.image(uri='/pictures/pt_logo_small.png', alt=linktext)
            node2.attributes.__setitem__('classes', ['pivotal-icon-width'])    # in custom.css
            node.append(node2)
        else:
            print("\033[93mError:  no type found for :iconlink: {}\033[0m", type)
    else:
        node = nodes.reference(rawtext, linktext, refuri=ref, **options)

    # Returns A list of nodes to insert into the document tree, and a list of system messages
    return [node], []


def setup(app):
    # Associates the :iconlink: role in an .rst file with the function above
    app.add_role('iconlink', make_param_link)
