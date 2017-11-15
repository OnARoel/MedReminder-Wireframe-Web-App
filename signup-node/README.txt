this is now a node project. we will be using MongoDB to store things in the database.

to run this project install node.
-> brew install node

go to folder directory and run the following:

-> npm install
that will install all project dependencies

then run the following:
->npm start

some OS's will run the software on different localhosts, you should be able to find the local host in the terminal after running the command.


also, to shudown the server just ctrl + z in terminal. this will not kill the pid associated with the port number on the localhost.
to kill the pid run :
->kill -9 $(lsof -ti tcp:<PORTNUM>)

where <PORTNUM> is your port number.
