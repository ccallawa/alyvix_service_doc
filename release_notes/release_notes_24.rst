:author: Charles Callaway
:date: 07-18-2024
:modified: 07-18-2024
:tags: release notes
:lang: en-US
:translation: false
:status: final

.. include:: ../sphinx-roles.txt



.. _release_notes_v2_4:

=====================
Version 2.4.0 - 2.4.2
=====================

Alyvix Service is a software tool for scaling up the management of instances of the Alyvix
synthetic monitoring system.  All you need is a compatible database and monitoring system that
can link the Alyvix Service API with its own GUI and host model.

|


.. _release_notes_v2_4_2:

.. rubric:: Alyvix Service Version 2.4.2

**Release date:**  April 30th, 2024

This release of Alyvix Service v2.4.2 speeds up the Session status display.

**Improvements**

* **Session status inconsistency:**  We refactored Alyvix Service to provide session status
  (i.e., *disconnected*, *connected*, *waiting*, *running*) more consistently with reality,
  so that the status is updated and shown accurately within integrated GUIs

|


.. _release_notes_v2_4_1:

.. rubric:: Alyvix Service Version 2.4.1

**Release date:**  April 24th, 2024

This release of Alyvix Service v2.4.1 speeds up the Session status display.

**Improvements**

* **Session status bottlenecks:**  Alyvix Service was optimized to provide
  session status (*i.e.*, disconnected, connected, waiting, running) more quickly, so it can
  update and show the status within integrated GUIs more quickly

|


.. _release_notes_v2_4_0:

.. rubric:: Alyvix Service Version 2.4.0

**Release date:**  April 11th, 2024

This release of Alyvix Service v2.4.0 adds time periods to scheduling and streamlines SQL accesses.

**New Features**

* **Time Periods:**  Set custom time periods for each individual test case, specifying intervals
  during which each test case will be executed and thus also when they won't be; in addition it helps
  you plan ahead for maintenance on Alyvix node machines, because test cases will not be scheduled
  outside those intervals

**Improvements**

* **SQL query bottlenecks:**  Test case endpoints were optimized to provide results more quickly,
  and thus they appear within the monitoring GUI sooner

|
