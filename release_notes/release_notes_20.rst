:author: Charles Callaway
:date: 14-11-2022
:modified: 14-11-2022
:tags: release notes
:lang: en-US
:translation: false
:status: final

.. include:: ../sphinx-roles.txt



.. _release_notes_v2_0:

=============
Version 2.0.0
=============

Alyvix Service is a software tool for scaling up the management of instances of the Alyvix
synthetic monitoring system.  All you need is a compatible monitoring system that can link the
Alyvix Service API with its own GUI and host model.


.. _release_notes_v2_0_0:

.. rubric:: Alyvix Service Version 2.0.0

**Release date:**  December 6th, 2022

This initial release of Alyvix Service v2.0.0 brings all of the basic functionality necessary
to schedule and run test cases, and retrieve data and reports from those runs.

**New Features**

* **Session Management:**  Alyvix Service helps you organize the global parameters like credentials,
  test case paths, and screen resolutions that you need to centrally manage your synthetic monitoring
  setup.  It keeps all of your Windows Server sessions alive and active, ensuring that your test
  cases can continue to run indefinitely.

* **Test Case Scheduling:**  Test cases are run continuously and in parallel

  * Basic scheduler

    * Scheduling period
    * Session workflows
    * Session run, break and stop controls
    * Session manual scheduling control and API

* **Measurement Web APIs:**  Provides recorded measurements and screenshots on demand

  * Test case alias list
  * Test case alias transaction measurements
  * Test case alias transaction screenshots

* **Transaction Reporting:**  Retains certified results and logs for each test case run

  * Retention period for successful runs and for failed ones
  * Test case alias report list
  * Test case alias specific report

* **RESTful Endpoints:** Alyvix Service supplies endpoint URLs for interfaces and data retrieval:

  * **Frontend Control Panels** allow you to configure parameters and initiate actions
  * **Measurement Web APIs (v0)** return either machine-readable (JSON) or human-readable
    data and reports on demand

|
