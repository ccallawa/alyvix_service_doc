:author: Charles Callaway
:date: 22-09-2020
:modified: 19-07-2023
:tags: index
:lang: en-US
:translation: false
:status: updating

.. include:: sphinx-roles.txt



.. _home:

#######################
Alyvix Service Overview
#######################

Welcome to the user guide for **Alyvix Service 2.3.0**.

Alyvix Service builds on the `open source Alyvix project <https://alyvix.com/>`_ (**Alyvix Core**).
which lets you build end-user bots that visually interact with any Windows application like ERPs,
or any web app in your favorite browser.

**Alyvix Service** lets you scale up visual monitoring by managing all of your Alyvix test cases at
a single point in your own monitoring system.  You can schedule end-user bots continuously and
in parallel, while keeping your Windows RDP sessions up and running.  It helps you report
end-user experiences by retrieving the test case measurements and screenshots, and retaining
summary reports that can be viewed at any time.

Alyvix Service, running as a GUI-less Windows Service, provides the following features:

* **Session Management:**   Keeps multiple Windows Service sessions alive
* **Test Case Scheduling:**  Runs Alyvix test cases continuously, regularly, and in parallel
* **Measurement Web APIs:**  Provides recorded measurements and screenshots on demand
* **Transaction Reporting:**  Helps you find and view the certified results for each test case run

Alyvix Service runs on Windows, opening multiple, independent sessions on a private network.  On
each session it schedules the monitoring of test cases, collects their measurements, and logs the sets of
Alyvix test cases you select.  Everything from configuration to reporting is managed by a set of
RESTful endpoints, so you can access any part of Alyvix Service in your browser, from anywhere in
the world.

In addition to the terminology used with Alyvix Core's Editor and Robot, Alyvix Service adds the
following concepts:

* **Session:**  A two-way connection between Alyvix Service and a target Windows session
  that allows Alyvix Service to run test cases and gather metrics from that target session
* **Scheduling:**  A process that ensures that multiple Alyvix test cases are run at set intervals
  on the proper sessions
* **Alias:**  A unique identifier that combines a specific test case with a specific set of
  arguments, allowing you to distinguish between multiple versions of a single test case across
  sessions
* **Flow:**  The set of Alyvix test cases that are planned for execution on a particular session
* **Runcode:**  A code that uniquely identifies a particular test case run by Alyvix Robot
* **Report:**  A human-readable document that shows concrete proof of how a specific test case run
  performed, supported with screenshots

Together, the Alyvix suite of monitoring applications lets you guarantee to yourself or your
clients that both native applications and web apps are functioning properly, no matter how many
servers you manage.
