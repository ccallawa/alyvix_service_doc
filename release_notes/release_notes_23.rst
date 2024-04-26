:author: Charles Callaway
:date: 09-14-2023
:modified: 09-14-2023
:tags: release notes
:lang: en-US
:translation: false
:status: final

.. include:: ../sphinx-roles.txt



.. _release_notes_v2_3:

=============
Version 2.3.0
=============

Alyvix Service is a software tool for scaling up the management of instances of the Alyvix
synthetic monitoring system.  All you need is a compatible database and monitoring system that
can link the Alyvix Service API with its own GUI and host model.


.. _release_notes_v2_3_0:

.. rubric:: Alyvix Service Version 2.3.0

**Release date:**  September 14th, 2023

This release of Alyvix Service v2.3.0 updates the backend to improve monitoring check responses.

**New Features**

* **Monitoring Check Support:**  Set in config.json the web API response timeout (5s by default) for external
  requests to internal ones; longer timeouts (60s) are coded for internal requests to internal ones.

|
