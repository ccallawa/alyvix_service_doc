:author: Charles Callaway
:date: 07-14-2023
:modified: 07-14-2023
:tags: release notes
:lang: en-US
:translation: false
:status: final

.. include:: ../sphinx-roles.txt



.. _release_notes_v2_1:

=============
Version 2.1.0
=============

Alyvix Service is a software tool for scaling up the management of instances of the Alyvix
visual monitoring system.  All you need is a compatible database and monitoring system that
can link the Alyvix Service API with its own GUI and host model.


.. _release_notes_v2_1_0:

.. rubric:: Alyvix Service Version 2.1.0

**Release date:**  July 19th, 2023

This release of Alyvix Service v2.1.0 improves communication and security between
Alyvix Service and monitoring systems it integrates with.

**New Features**

* **NATS-InfluxDB channels:**  Alyvix Service can now send transaction measures through NATS-InfluxDB
  channels, which can be properly defined (IP, port, certificate, public key, NATS subject) and
  associated with sessions (and their tenants).
* **RESTful web API v1:** a first consolidated version of the Alyvix Service RESTful web APIs to
  fully integrate the tool in any monitoring system.

**Bug Fixes**

* **Failed report pagination:** Fixed Alyvix Service paginating just failed reports, which is no longer
  a pagination of all the reports with a failed report filter.

|
