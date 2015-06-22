Chen-Node
========
Description
---------------
* A Node.js platform can support "all" kinds of project.
* Good separation between different projects with easy to add/delete features.

Hardware
--------------
###BeagleBone
* Debian Linux

Structure
-------------
* index.js
> * hook **handler** to **routes**
> * create **server**
> * `node index.js` to start

* server.js
> * hook **projects** to major **app**
> *  hook **routes** to **projects**
* routes
    * project_based_route.js
* handler
    * folder_with_project_name
        * project_handler.js 
        
Supported project
------------------------
###test
###profile
Experience
---------------
* 6/21/2015
	* Each module is like a  class, add  `.config` function to perform **constructor** function.
* 6/19/2015
	* plain design: define function separatly, **require & chain** them together at the **index** file
	> separation rule is decided with characteristic of projects
* 6/18/2015
	* a module can `return` a **function** or **object**
* 6/16/2015
* 6/15/2015
