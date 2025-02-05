:author: Charles Callaway
:date: 04-10-2024
:modified: 06-11-2024
:tags: release notes
:lang: en-US
:translation: false
:status: final

.. include:: ../sphinx-roles.txt



.. _release_notes_v2_6:

=====================
Version 2.6.0 - 2.6.3
=====================

Alyvix Service is a software tool for scaling up the management of instances of the Alyvix
synthetic monitoring system.  All you need is a compatible database and monitoring system that
can link the Alyvix Service API with its own GUI and host model.

|


.. _release_notes_v2_6_3:

.. rubric:: Alyvix Service Version 2.6.3

**Release date:**  November 13th, 2024

This release of Alyvix Service v2.6.3 fixes a bug.

**Bug Fixes**

* Configuration and tenant mapping files will no longer be removed after an uninstall procedure

|


.. _release_notes_v2_6_2:

.. rubric:: Alyvix Service Version 2.6.2

**Release date:**  November 6th, 2024

This release of Alyvix Service v2.6.2 fixes a bug.

**Bug Fixes**

* Multiple runs of the same transaction within a test case no longer break the output (in rare corner cases)

|


.. _release_notes_v2_6_1:

.. rubric:: Alyvix Service Version 2.6.1

**Release date:**  October 22th, 2024

This release of Alyvix Service v2.6.1 fixes a bug.

**Bug Fixes**

* Tags are now removed if not in use

|


.. _release_notes_v2_6_0:

.. rubric:: Alyvix Service Version 2.6.0

**Release date:**  October 4th, 2024

This release of Alyvix Service v2.6.0 adds the Tags feature and fixes one bug.

**New Features**

* **Tags:** Each test case can now be associated with one or more *tags* (e.g.
  ``usergroup1``, ``italy``, or ``winserver25``), allowing a tenant to
  easily filter all their own test cases in a specific functional view
  (e.g. filter by user group, by country, or by OS)

**Breaking Changes**

* :file:`config.json` and :file:`mapping.json` must now be located in the folder
  :file:`C:/ProgramData/Alyvix/`

**Bug Fixes**

* Tenants cannot now add a test case with a name that matches a name that
  already exists

|
