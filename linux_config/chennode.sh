#!/bin/sh

#chmod 755 /etc/init.d/foobar
#update-rc.d foobar defaults 
# The following part always gets executed.
#echo "This part always gets executed"

# The following part carries out specific functions depending on arguments.
case "$1" in
	start)
		forever start ~/ChenNode/index.js
		;;
	stop)
		#echo "Stopping foobar"
		;;
	*)
		#echo "Usage: /etc/init.d/foobar {start|stop}"
		exit 1
		;;
esac

exit 0
