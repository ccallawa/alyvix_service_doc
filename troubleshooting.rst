:author: Charles Callaway
:date: 12-06-2024
:modified: 12-06-2024
:tags: faq
:lang: en-US
:translation: false
:status: draft

.. include:: sphinx-roles.txt


.. _faq_top:

###############
Troubleshooting
###############

The following questions are valid for the current version of Alyvix Service:

.. dropdown:: :fa:`question-circle` Why does my test case run, but not create reports?
    :animate: fade-in-slide-down
    :title: badge-alyvix-primary font-weight-bold
    :container: + shadow width-wide

    If the monitoring system allows you to configure a test case, and you can see that the test case is being
    scheduled and is running correctly, double check in Alyvix Editor that it has at least one step with the
    `"Measure" flag <https://alyvix.com/learn/test_case_building/selector_interface_overview.html>`_
    checked.

    If no measurement boxes checked, then no measures will be sent to the monitoring system,
    and its report generator will thus not have any data to create a report with.

|
