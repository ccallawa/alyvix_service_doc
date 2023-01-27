:author: Charles Callaway
:date: 09-01-2023
:modified: 09-01-2023
:tags: integration, monitoring
:lang: en-US
:translation: false
:status: updating

.. include:: sphinx-roles.txt



.. _monitoring_integrations_top:

##############################
Monitoring System Integrations
##############################

The procedure linked to below will show you how to configure various monitoring system
installations to request the results of Alyvix runs at regular intervals, thus integrating
Alyvix test cases into your monitoring system.  Over time the data collected can indicate
trends that can help you discover when the user experience is below expectations and
locate hardware bottlenecks.

The monitoring systems below have been tested for compatibility with Alyvix.  To see the
configuration tutorial for a particular system, click on the monitoring system link in the
first column, or in the index at the left.  Integration tutorials for additional monitoring
systems will be added as they become available.

|


.. logos should be around 58x53 and png

.. |ne-logo| image:: monitoring_integrations/images/neteye-logo.png
   :scale: 40%

.. table::
   :class: taller-rows all-white-rows
   :widths: 70 30

   +--------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
   | Monitoring System Integration Instructions                                                                               | Developer                                                                                                                 |
   +--------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
   | |smalltab| |ne-logo| |trade| |smalltab| :ref:`NetEye 4 instructions <monitoring_integrations_neteye>`                    | :iconlink:`ext|Wuerth Phoenix|https://www.wuerth-phoenix.com/en/solutions/it-system-management/unified-monitoring/` |tab| |
   +--------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

|



.. toctree::
   :maxdepth: 2
   :name: toc_monitoring_integrations
   :hidden:

   monitoring_integrations/neteye_integration.rst
