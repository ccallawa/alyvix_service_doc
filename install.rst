:author: Charles Callaway
:date: 05-11-2020
:modified: 14-09-2023
:tags: install, python, pip
:lang: en-US
:translation: false
:status: continuous

.. include:: sphinx-roles.txt


.. _install_top:

************************
Installation and Upgrade
************************

Before installing Alyvix Service, first check that your setup meets the system requirements.

Note that Alyvix Service also requires Alyvix to be installed on the same machine.
Alyvix, which we call *Alyvix Core* here to distinguish it from *Alyvix Service*,
is a free and open source engine for designing and building GUI test cases that show what
a task and its interface should look like and how they behave, and then later running them
autonomously on the local Windows machine.

|


.. _system_requirements_top:

===================
System Requirements
===================

.. note::

   Alyvix Service assumes that you have one virtual or physical machine exclusively dedicated to running
   Alyvix test cases.

You should check that your designated machine and the account on that machine meet the following
requirements before you install Alyvix Service:

+---------------------+--------------------------------+-----------------------------------------+
|                     | Minimum                        | Recommended                             |
+---------------------+--------------------------------+-----------------------------------------+
| :file:`Operating`   | **Windows 10 (64-bit)**        | **Windows Server 2016, 2019 or 2022**   |
| :file:`System`      | **Pro or Enterprise**          | (English language)                      |
|                     +--------------------------------+-----------------------------------------+
|                     | (32-bit versions of Windows are :warn:`not` compatible with Alyvix       |
|                     | Service)                                                                 |
+---------------------+--------------------------------+-----------------------------------------+
| :file:`Processor`   | 2 CPUs                         | 2 CPUs base **+** 2 CPUs per session    |
+---------------------+--------------------------------+-----------------------------------------+
| :file:`Memory`      | 4GB RAM                        | 4GB RAM base **+** 4GB RAM per session  |
+---------------------+--------------------------------+-----------------------------------------+
| :file:`Graphics`    | 24-bit RGB or 32-bit RGBA screen color depth                             |
+---------------------+--------------------------------+-----------------------------------------+
| :file:`Remote`      | Users defined on Alyvix Service must have RDP access (through RDC        |
| :file:`Desktop`     | *mstsc.exe*) to the machine itself (e.g. the user must be a Remote       |
|                     | Desktop User, and the firewall must not be set to block local RDC)       |
|                     +--------------------------------+-----------------------------------------+
|                     | **1 session only:** No Windows | **Multiple sessions in parallel:**      |
|                     | Terminal Server available;     | Windows Terminal Server allows          |
|                     | 1 test case executed at a time | multiple test cases to run at once      |
+---------------------+--------------------------------+-----------------------------------------+
| :file:`Application` | Users defined on Alyvix Service must have the proper permissions         |
| :file:`Permissions` | to run and interact with the application interface being monitored       |
+---------------------+--------------------------------+-----------------------------------------+

|


.. _installation_versions:

========
Versions
========

+-----------------------------------+----------------------------------+---------------------------------+
| Alyvix Service Version            | Required Alyvix Core Version     | PostgreSQL Version              |
+-----------------------------------+----------------------------------+---------------------------------+
| Alyvix Service 2.3.0              | |link-to-alyvix-install350|      | |link-postgresql-install-12.x|  |
+-----------------------------------+----------------------------------+---------------------------------+
| Alyvix Service 2.2.0              | |link-to-alyvix-install350|      | |link-postgresql-install-12.x|  |
+-----------------------------------+----------------------------------+---------------------------------+
| Alyvix Service 2.1.0              | |link-to-alyvix-install340|      | |link-postgresql-install-12.x|  |
+-----------------------------------+----------------------------------+---------------------------------+
| Alyvix Service 2.0.0              | |link-to-alyvix-install332|      | |link-postgresql-install-12.x|  |
+-----------------------------------+----------------------------------+---------------------------------+

|


.. _installation_steps:

==================
Installation Steps
==================

The following steps will install Alyvix Service on your machine:

.. rst-class:: bignums

#. **Download the Alyvix Service installer**

   `Request an Alyvix Service License <https://alyvix.com/team>`_, including the (externally visible)
   IP address you will connect to the server with.

#. **Install Alyvix Core**

   Follow `the installation instructions <https://www.alyvix.com/learn/getting_started/install.html>`_
   for Python and Alyvix.

#. **Install PostgreSQL**

   Download and run the most recent version of
   `the PostgreSQL 12.X installer <https://www.enterprisedb.com/downloads/postgres-postgresql-downloads>`_
   for the **Windows x86-64** architecture.  Be sure to run it :warn:`in administrator mode`. |br|

   Click "Next" to accept all the defaults until it asks you to set the password.  Change the
   default password to ensure the security of your system, and make a note of it so that
   you can configure Alyvix Service to use PostGre in the next step below.

   .. image:: images/postgre-install-05.png
      :width: 70%
      :align: center
      :alt: Use a secure password and remember it.

   Continue clicking "Next" to accept the remaining defaults and complete the installation.

#. **Install Alyvix Service**

   When you receive your download credentials, log in to the `Alyvix Service Repository <https://repo.wuerth-phoenix.com/alyvix-service/>`_
   and download the most recent version of the installer (:file:`alyvix_service_<version>.zip`). |br|
   Run the :file:`setup.exe` installer which can be found in that :file:`.zip` file
   :warn:`in administrator mode`. |br|
   Set the database password from step #3 as follows:

   * Open the file |config-file-location| :warn:`in administrator mode`
   * Paste the password in this line: |br1|
     ``"database":{.. "password": "<your_password>", ..}``

#. **Mandatory security configuration**

   First save your HTTPS certificate files used for browser security as follows:

   * Create the folder :file:`C:\\Program Files\\Alyvix\\Alyvix Service\\cert\\`
   * Save :file:`cert.crt` as an HTTPS certificate recognized by your CA
   * Save :file:`cert.key` as its (unprotected) password

   Note that the private key is all you need, you should not be asked for an additional password.

   Next, copy the JSON Web Token (JWT), which is used for API authentication purposes,
   from your monitoring system to Alyvix Service.

   * Create the folder :file:`C:\\ProgramData\\Alyvix\\certs\\jwt\\`
   * Copy the JWT certificate file from your monitoring system into the folder above,
     renaming it to :file:`public.pem`.

#. **Start Alyvix Service**

   Run **Alyvix Service** within Windows Services **Task Manager > Services Tab > Alyvix Service > Start**

   .. image:: images/service_alyvix_restart.png
      :width: 70%
      :align: center
      :alt: Start the Alyvix Service.

#. **Monitoring system integration**

   At this point Alyvix Service is installed and running, and you can now proceed to integrate it
   :ref:`within a monitoring system <monitoring_integrations_top>`.

|


.. _install_upgrade:

=========
Upgrading
=========

The following steps will upgrade Alyvix Service to the latest version on your machine:

.. rst-class:: bignums

#. Uninstall the current version of Alyvix Service

   * Back up your Alyvix Service configuration file:  |config-file-location|
   * Back up your Alyvix Service HTTPS certificate:  :file:`C:\\Program Files\\Alyvix\\Alyvix Service\\cert\\`
   * Back up your Alyvix Service JSON Web Token (JWT) certificate:  :file:`C:\\ProgramData\\Alyvix\\certs\\jwt\\`
   * Stop Alyvix Service:  **Windows Services > Alyvix Service > Stop**
   * Close all Alyvix client windows (where appropriate)
   * Uninstall Alyvix Service:  **Windows Control Panel > Programs and Features > Alyvix Service > Uninstall**
   * Remove residual Alyvix Service files (where appropriate):  :file:`C:\\Program Files\\Alyvix\\Alyvix Service\\`
   * Remove old Alyvix Client scheduled tasks:  **Windows Task Scheduler > alyvix_client<..> > delete**

#. Upgrade Alyvix Core

   Follow `the instructions here <https://alyvix.com/learn/getting_started/install.html#upgrading-alyvix>`_

#. Install the new version of Alyvix Service

   * Run the Alyvix Service Installer (:file:`setup.exe`) found in the Alyvix Service package
   * Set the database password by editing the file |config-file-location| in administrator mode
     (or by restoring the backup file): |br1|
     ``"database":{.. "password": "<your_password>", ..}``
   * Install your HTTPS certificate (or restore the backup files):  Save the :file:`cert.crt` and
     :file:`cert.key` files in :file:`C:\\Program Files\\Alyvix\\Alyvix Service\\cert\\`
   * Install your JSON Web Token (JWT) certificate (or resture the backup file):  Save the
     :file:`public.pem` file in :file:`C:\\ProgramData\\Alyvix\\certs\\jwt\\`


#. Run Alyvix Service

   * Start Alyvix Service:  **Windows Services > Alyvix Service > start**
   * Sign out of the current session

|


.. _uninstallation_steps:

===========================
Uninstalling Alyvix Service
===========================

The following steps will remove Alyvix Service from your machine.  Basically you will need to reverse
the steps performed during installation.

.. rst-class:: bignums

#. Disable the relevant Alyvix Nodes within your integrated monitoring system.

#. Stop Alyvix Service under the Services tree:
   **Start > Computer Management > Services and Applications > Services > Alyvix Service**

#. Uninstall Alyvix Service:
   **Start > Settings > Apps > Alyvix Service > Uninstall** |br|
   If desired, also uninstall PostgreSQL the same way.

#. Remove these two directories:

   * :file:`C:\\Program Files\\Alyvix\\`
   * :file:`C:\\Program Data\\Alyvix\\`

#. If desired, remove Alyvix Core and/or Python using
   `the Alyvix uninstall instructions <https://alyvix.com/learn/getting_started/install.html#uninstalling-alyvix-and-python>`_.

|
