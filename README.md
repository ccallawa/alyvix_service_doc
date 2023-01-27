# Welcome to the Alyvix Service Documentation Project

This repository contains just the documentation for the Alyvix Service project.

[Alyvix](http://alyvix.com) is an open source APM tool for visual monitoring.  Its easy-to-use
interface lets you build graphical representations (a test case) of your streamed or GUI-based
application and script interactions against them, then measure characteristics such as
click-to-appearance responsiveness by running that test case against your application, interacting
with it just as a human would.

[Alyvix Service](http://alyvix.com/service/) is an API-based (GUI-less) application that
can manage, run, and record the results of your Alyvix test cases.  Through the API,
you can integrate the results into the GUI of your favorite monitoring tool.

The Alyvix project maintains a [Twitter account](https://twitter.com/AlyvixInfo) and
[YouTube channel](https://www.youtube.com/channel/UCsfsO764sZ55r556ATj3Owg) with tutorials, and
uses Pivotal to [track progress](https://www.pivotaltracker.com/n/projects/1533621) for both the
code and this documentation.



## Documentation Structure

As Alyvix is written in Python, the documentation is written in
[ReStructuredText](https://docutils.sourceforge.io/rst.html) and uses
[Sphinx](https://pypi.org/project/Sphinx/) to build a set of static web pages.
It employs the *bootstrap theme* which includes support for local search and
mobile/responsive layouts.

This Alyvix documentation is licensed under GNU GPL v3.  If you have any contributions
you wish to make, feel free to send them to us via a
[GitHub issue](https://github.com/ccallawa/alyvix_doc/issues).

The Alyvix documentation, like the Alyvix project itself, follows the
[Semantic Versioning Initiative](https://semver.org/).  The file structure follows the
index structure shown at the left side of the documentation.



## Installation

The Alyvix documentation does not require a particular operating system, but does assume you
are using the same version of Python as Alyvix itself (currently 3.9.7).  You will need to
[download Python](https://www.python.org/downloads/) and then run the installer (the *pip*
package installer should be included).

Next, you need to download and install the [Sphinx package](https://pypi.org/project/Sphinx/)
using *pip* with this command:

```
> pip install -U sphinx
```

The user guide can be built with either Sphinx 2 or Sphinx 3.  The
[bootstrap theme](https://readthedocs.org/projects/sphinx-bootstrap-theme/) is included within
the distribution.

Once Sphinx is installed, you should then install the following extensions:

```
> pip install -U sphinx-copybutton
> pip install -U sphinx-panels
```

Next, clone or download [the source repository](https://github.com/ccallawa/alyvix_service_doc) to your
computer.  Both of the following two methods are available on multiple platforms.

You can use [Git](https://git-scm.com/downloads):
```
> git clone https://github.com/ccallawa/alyvix_service_doc.git <destination-directory>
```

Or [download the ZIP file](https://github.com/ccallawa/alyvix_service_doc/archive/master.zip)

Once the files are in place, either use the included *conf.py* file, or edit it to
include your own information, the names of the installed extensions, and the CSS file:

```
extensions = [
    ...
    'sphinx_copybutton',       # pip install sphinx-copybutton
    'sphinx_panels',           # The panels/tabs/dropdown/link-button theme
    'iconlink'                 # Our custom theme for links with embedded icons at _ext/iconlink.py
]

html_css_files = [
    'css/custom.css'
]
```


## Compilation

We typically build the user guide with the following command.  You will need to change the
executable and source/build directory names according to your environment.

```
> C:\Python37\python.exe -m sphinx.__main__ -E -a -b html C:\projects\alyvix_service_doc C:\projects\alyvix_service_doc\_build
```



## Our Customizations

We have also made some minor customizations to the *sphinx-copybutton* package to improve
the interactive experience with the user guide.  These are described at the bottom of the
[stylesheet](https://alyvix.com/learn/stylesheet.html), which is included with the distribution
but is not directly available from the user guide index.

Our CSS customizations can be found in the file *_static/css/custom.css* and the *_themes*
directory.  Customized RST roles, directives, aliases and specialized styles can be found
in the file *sphinx-roles.txt*

We've added an extension to customize parameterized links with icons based on their type
(internal vs. external, glossary, video).  The extension and its documentation can be found at
*_ext/iconlink.py*.
