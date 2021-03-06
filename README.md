# Chen-Node

## Description

* Carefully Designed Node.js study platform, based on Express.js, support multiple projects with different pathname.
* Provide good separation between projects to achieve easy to add/delete goal.

*Key words:* **Node.js, Express, Socket.io, Passport BeagleBone**

## projects

### Socket.io real-time chatroom

[www.chen-node.com/sio/](http://www.chen-node.com/sio/)

####setup

```
#install bower, which manages front-end public/libs/*
sudo npm install bower -g
#under siochat/
bower install
```

#### experience

* get familiar with Socket.io module

### SQL/MongoDB authenticate

####experience

* design MVC structure based on mysql and Q module with promise theory

* get familiar with Passport module and session manipulation

### Hexo blog system

> project is based on **Hexo** blog system.

[www.chen-node.com/blog](http://www.chen-node.com/blog)

Github: [ChenBlog](https://github.com/neilChenXie/ChenBlog)

####experience

* get familiar with Express static file system

### Test

> JSON Restful API test

[www.chen-node.com/test](http://www.chen-node.com/test)

## Hardware

### BeagleBone with Debian

![BeagleBone](http://www.chen-node.com/blog/photo/ChenNodeBBB.jpg)

#### port transfering

```bash
#in /etc/rc.local
iptables -A PREROUTING -t nat -i eth0 -p tcp -dport 80 -j REDIRECT --t 8000

```

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

create Server object and start server

### server.js

hook project when needed and config basic server parameters

### project_folder/

* proj_name.js

* controller.js

* views/

	> dynamic web page needed. sqlauth, mongoauth

* models/

	> database related. sqlauth, mongoauath

* public/

	> static HTML file. ChenBlog, Socket.io

* config/(optional)

	> database and middleware configuration. sqlauth, mongoauth

## Module

* Express

* Q

* Socket.io

* Passport

* ejs/jade

* mongoose

* mysql

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

* 9/16/2015

	* complete socket.io real-time chatroom draft.

* 9/11/2015

	* completed sqlauth. Find mongoauth cannot be start with sqlauth, because of DOUBLE passport.initial() will forget session.

* 9/10/2015

	* figure out how to struct SQL related MVC by combining Promise theory and mysql module.

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

* Finish **Socket.io** and **FireBase**

## Node.js Experience

### Design

### Reference

* [Node.js是用来做什么的](http://www.zhihu.com/question/33578075/answer/56951771)

* [Node.js is the New Black](http://www.sitepoint.com/node-js-is-the-new-black/)
