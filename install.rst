:author: Charles Callaway
:date: 05-11-2020
:modified: 24-11-2020
:tags: install, python, pip
:lang: en-US
:translation: false
:status: final

.. include:: sphinx-roles.txt


.. _install_top:

************************
Installation and Upgrade
************************

Before installing Alyvix, first check that your setup meets the system requirements.

|


.. _system_requirements_top:

===================
System Requirements
===================

.. note::

   Alyvix assumes that you have one virtual or physical machine exclusively dedicated to running
   Alyvix test cases.

You should check that your designated machine and the account on that machine meet the following
requirements before you install Alyvix:

+---------------------+--------------------------------+-----------------------------------------+
|                     | Minimum                        | Recommended                             |
+---------------------+--------------------------------+-----------------------------------------+
| :file:`Operating`   | **Windows 10 (64-bit)**        | **Windows Server 2016, 2019 or 2022**   |
| :file:`System`      | **Pro or Enterprise**          | (English language)                      |
|                     +--------------------------------+-----------------------------------------+
|                     | (32-bit versions of Windows are :warn:`not` compatible with Alyvix)      |
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
| Alyvix Service Version            | Required Alyvix Version          | PostgreSQL Version              |
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

#. Install Python

   Follow `the same instructions <https://www.alyvix.com/learn/getting_started/install.html#installing-python>`_
   as for Alyvix

#. Install Alyvix

   Follow the `Alyvix installation instructions <https://www.alyvix.com/learn/getting_started/install.html#installing-alyvix>`_

#. Install PostgreSQL 12.x

   Download and run
   `the PostgreSQL installer <https://content-www.enterprisedb.com/postgresql-tutorial-resources-training?cid=48>`_

#. Install Alyvix Service

   * `Get the software package <https://www.alyvix.com/service#plans>`_
   * Run the :file:`setup.exe` installer
   * Set the database password as follows:

      * Open the file :file:`C:\\Program Files\\Alyvix\\Alyvix Service\\config.json` in
        administrator mode
      * Set your own password in this line: |br1|
        ``"database":{.. "password": "<your_password>", ..}``

#. Install your HTTPS certificate

   Save your files as follows:

   * Create the folder :file:`C:\\Program Files\\Alyvix\\Alyvix Service\\cert\\`
   * Save :file:`cert.crt` as an HTTPS certificate recognized by your CA
   * Save :file:`cert.key` as its (unprotected) password

   Note that the private key is all you need, you should not be asked for an additional password.

#. Copy the Java Web Token (JWT) from your monitoring system

   * Create the folder :file:`C:\\ProgramData\\Alyvix\\certs\\jwt\\`
   * Then for example in NetEye, copy the file |p|
     :file:`/neteye/shared/icingaweb2/conf/modules/neteye/jwt-keys/multipurpose-jwt.pub`
     |p| to that new folder and rename it as :file:`public.pem`

#. Run **Alyvix Service** within Windows Services at **Windows Services > Alyvix Service > start**

|


.. _install_upgrade:

=========
Upgrading
=========

The following steps will upgrade Alyvix Service to the latest version on your machine:

.. rst-class:: bignums

#. Uninstall Alyvix Service

   * Back up your Alyvix Service configuration file:  :file:`C:\\Program Files\\Alyvix\\Alyvix Service\\config.json`
   * Back up your Alyvix Service HTTPS certificate:  :file:`C:\\Program Files\\Alyvix\\Alyvix Service\\cert\\`
   * Back up your Alyvix Service Java Web Token (JWT) certificate:  :file:`C:\\ProgramData\\Alyvix\\certs\\jwt\\`
   * Stop Alyvix Service:  **Windows Services > Alyvix Service > Stop**
   * Close all Alyvix client windows (where appropriate)
   * Uninstall Alyvix Service:  **Windows Control Panel > Programs and Features > Alyvix Service > Uninstall**
   * Remove residual Alyvix Service files (where appropriate):  :file:`C:\\Program Files\\Alyvix\\Alyvix Service\\`
   * Remove old Alyvix Client scheduled tasks:  **Windows Task Scheduler > alyvix_client<..> > delete**

#. Upgrade Alyvix

   Follow `the instructions here <https://alyvix.com/learn/getting_started/install.html#upgrading-alyvix>`_

#. Install the new Alyvix Service

   * Run the Alyvix Service Installer (:file:`setup.exe`) found in the Alyvix Service package
   * Set the database password by editing the file
     :file:`C:\\Program Files\\Alyvix\\Alyvix Service\\config.json` in administrator mode
     (or by restoring the backup file): |br1|
     ``"database":{.. "password": "<your_password>", ..}``
   * Install your HTTPS certificate (or restore the backup files):  Save the :file:`cert.crt` and
     :file:`cert.key` files in :file:`C:\\Program Files\\Alyvix\\Alyvix Service\\cert\\`
   * Install your Java Web Token (JWT) certificate (or resture the backup file):  Save the
     :file:`public.pem` file in :file:`C:\\ProgramData\\Alyvix\\certs\\jwt\\`


#. Run Alyvix Service

   * Start the Alyvix Service:  **Windows Services > Alyvix Service > start**
   * Sign out of the current session

|
