# Chen-Node

## Description

* A Node.js platform can support "all" kinds of project.
* Good separation between different projects with easy to add/delete features.

 *Key words:* **Node.js, Express, BeagleBone**

## Hardware

### BeagleBone
* Debian Linux

## Structure

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

## Module

* socket.io
* Express
* ejs

## Supported project

### socket.io test
### profile
Based on **Hexo** blog system,
### test

## Experience
* 7/7/2015
	* start when bootup BeagleBone
	> `linux_config/chennode.sh` which should be put under `/etc/init.d/`<br>
	  ```bash
	  #make executable
	  chmod +x filename
	  #create
	  update-rc.d filename defaults
	  #delete
	  update-rc.d -f filename remove
	  ```

	* merge **BeagleBone** branch to **master**

* 7/3/2015
    * add support for **Hexo** blog
    * deeper understand express.static()

* 6/23/2015
    * socket.io: [*refer*](https://www.youtube.com/watch?v=nN6gFQMr3yU)

      >server: `sio.listen(3000)` use different **port** for communication<br>
      client:
      ```html
        <script src="http://localhost:3000/socket.io/socket.io.js"></script>
        <script>
            var socket = io("http://localhost:3000");
        </script>
      ```

      >Send a function which will be executed in front-end: just get data not page<br>
      namespace: use URL path to specify channels, server:<br>.broadcast.emit<br>chat room

    * this: [*refer*](http://book.mixu.net/node/ch4.html)
	   >Specify at the call time <br>
     `func.call` & `func.apply`
     same: specify **object**<br>
     diff: how to tranfer **additional arg**

* 6/22/2015
    * [Markdown Tool](https://github.com/mixu/markdown-styles)
* 6/21/2015
    * Each module is like a  class, add  `.config` function to perform **constructor** function.
* 6/19/2015
    * plain design: define function separatly, **require & chain** them together at the **index** file
    > separation rule is decided with characteristic of projects

* 6/18/2015
	* a module can `return` a **function** or **object**

* 6/16/2015
* 6/15/2015
