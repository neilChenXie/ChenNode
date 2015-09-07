# Chen-Node

## Description

* Carefully Designed Node.js server platform, based on Express.js, support multiple projects with different pathname.
* Provide good separation between projects to achieve easy to add/delete goal.

*Key words:* **Node.js, Express, Socket.io, Passport BeagleBone**

## projects

### Hexo blog system

>project is based on **Hexo** blog system.

[www.chen-node.com/blog](http://www.chen-node.com/blog)

Github: [ChenBlog](https://github.com/neilChenXie/ChenBlog)
### Real-time Chatroom with Socket.io

[www.chen-node.com/socketio](http://www.chen-node.com/socketio)

### Test

> JSON Restful API test

[www.chen-node.com/test](http://www.chen-node.com/test)

## Hardware

### BeagleBone with Debian

![BeagleBone](http://www.chen-node.com/blog/photo/ChenNodeBBB.jpg)

#### Start app when booting

```bash
#`linux_config/chennode.sh` which should be put under `/etc/init.d/`

#make executable
chmod +x filename
#create
update-rc.d filename defaults
#delete
update-rc.d -f filename remove
```

## Server Structure

### index.js

 * hook **handler** to **routes**

 * create **server**

 * `node index.js` to start

### server.js

* hook **projects** to major **app**

*  hook **routes** to **projects**

### routes/

* project_based_route.js

### handler/

* folder_with_project_name

    > project_handler.js

## Module

* Express

* Socket.io

* Passport

* ejs/jade

* mongoose

## Experience

### MongoDB

#### Setup
```bash
#Ubuntu
# add GPG key
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
# list file
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
# install
sudo apt-get update
sudo apt-get install mongodb-org

#start service
sudo service mongod start
```

### Socket.io

#### server:
>`sio.listen(3000)` use different **port** for communication

* Send a function which will be executed in front-end: just get data not page

#### client:

```html
<script src="http://localhost:3000/socket.io/socket.io.js"></script>
<script>
    var socket = io("http://localhost:3000");
</script>
```

* namespace: use URL path to specify channels

#### Application

* server:

* .broadcast.emit

* chat room

#### Reference

* [*youtube*](https://www.youtube.com/watch?v=nN6gFQMr3yU)

## Log

* 9/7/2015
	
	* change all project as middleware, make them more separated

	* add auth project with passport

* 7/7/2015

  * start when bootup BeagleBone

  * merge **BeagleBone** branch to **master**

* 7/3/2015

  * add support for **Hexo** blog

  * deeper understand express.static()

* 6/23/2015

    * socket.io:


    * this: [*refer*](http://book.mixu.net/node/ch4.html)

        >Specify at the call time
        `func.call` & `func.apply`
        same: specify **object**<br>
        diff: how to tranfer **additional arg**

* 6/22/2015

    * [Markdown Tool](https://github.com/mixu/markdown-styles)

* 6/21/2015

    * Each module is like a  class, add  `.config` function to perform **constructor** function.

* 6/19/2015

    * plain design: define function separately, **require & chain** them together at the **index** file

        > separation rule is decided with characteristic of projects

* 6/18/2015

    * a module can `return` a **function** or **object**

* 6/16/2015

* 6/15/2015

## ToDo list

* add **function present link** in README

* Finish **Socket.io** and **FireBase**

## Node.js Experience

### Design

### Reference

* [Node.js是用来做什么的](http://www.zhihu.com/question/33578075/answer/56951771)

* [Node.js is the New Black](http://www.sitepoint.com/node-js-is-the-new-black/)
