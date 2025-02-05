:author: Charles Callaway
:date: 07-18-2024
:modified: 07-29-2024
:tags: release notes
:lang: en-US
:translation: false
:status: final

.. include:: ../sphinx-roles.txt



.. _release_notes_v2_5:

=====================
Version 2.5.0 - 2.5.3
=====================

Alyvix Service is a software tool for scaling up the management of instances of the Alyvix
synthetic monitoring system.  All you need is a compatible database and monitoring system that
can link the Alyvix Service API with its own GUI and host model.

|

.. _release_notes_v2_5_3:

.. rubric:: Alyvix Service Version 2.5.3

**Release date:**  August 19th, 2024

This release of Alyvix Service v2.5.3 is a bugfix.

**Bug Fixes**

* Some test cases would no longer run on Alyvix Service web API v2 (just on v3).

|



.. _release_notes_v2_5_2:

.. rubric:: Alyvix Service Version 2.5.2

**Release date:**  July 29th, 2024

This release of Alyvix Service v2.5.2 is a bugfix.

**Bug Fixes**

* The path to run test case files in multi-tenant environments was incorrectly built

|



.. _release_notes_v2_5_1:

.. rubric:: Alyvix Service Version 2.5.1

**Release date:**  July 19th, 2024

This release of Alyvix Service v2.5.1 is a bugfix.

**Bug Fixes**

* The refactored endpoints of Alyvix web APIs v0 and v1 didn't respond properly (e.g., :file:`/v0/testcases` returned a 500 error)

|



.. _release_notes_v2_5_0:

.. rubric:: Alyvix Service Version 2.5.0

**Release date:**  July 18th, 2024

This release of Alyvix Service v2.5.0 adds multitenancy support, a change to security certificate
configuration, and a bug fix for session status.

**New Features**

* **Multitenancy:**  Support role-based separation for multiple tenants within a single instance
  of an Alyvix Service Node, adding:

  * A central configuration file of tenant roles (*e.g.*, admin, editor, viewer)
  * A Management API for tenants
  * Alyvix objects (*e.g.*, sessions, test cases) with an editing and viewing API for each tenant
  * A Migration API to safely switch from Alyvix API v2 to v3


**Improvements**

*  We moved the TLS certificates to :file:`C:\\ProgramData\\Alyvix\\certs\\tls\\`


**Bug Fixes**

* A new session immediately returns the status *Disconnected* instead of *Null*.

|
