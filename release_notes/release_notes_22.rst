:author: Charles Callaway
:date: 09-14-203
:modified: 09-14-2023
:tags: release notes
:lang: en-US
:translation: false
:status: final

.. include:: ../sphinx-roles.txt



.. _release_notes_v2_2:

=============
Version 2.2.0
=============

Alyvix Service is a software tool for scaling up the management of instances of the Alyvix
visual monitoring system.  All you need is a compatible database and monitoring system that
can link the Alyvix Service API with its own GUI and host model.


.. _release_notes_v2_2_0:

.. rubric:: Alyvix Service Version 2.2.0

**Release date:**  September 7th, 2023

This release of Alyvix Service v2.2.0 updates the backend to increase reliability and improve
the API server.

**New Features**

* **Web Server:**  Flask (single thread mode) runs as the production web server to support Alyvix Service
* **Automatic Restart:** We've added a Windows scheduled task to constantly monitor Alyvix Service
  and reboot it in case it doesn't respond for a variety of unexpected reasons.

|
