# Docker Workshop Task
The repo has 2 projects 
 1. Front end project with react app 
 2. Asp.net core2.2 web api application. 
 
In each of the application folders there is an empty docker file. 
Please complete the docker files and use the docker compose file to run all the containers just like we did in the workshop.

Make sure to create a docker volume by name sqlbackup (docker volume create sqlbackup)

Use nginx server to host react app. NGINX is a web server that is used to host static files.
You can find more info on NGINX at https://www.nginx.com/resources/glossary/nginx/

Docker file in the front-end application has comments for each step.    

If everything works out you should be able to see the following screen at http://localhost:5066

![Image description](https://github.com/dheeraj-blinds/docker-Task/blob/master/gabbar-front-end.PNG)

add a product to cart go to the cart page and place order, you will be redirected to orders page.

![result](https://github.com/dheeraj-blinds/docker-Task/blob/master/orderls-list.PNG)
