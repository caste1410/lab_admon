FROM ubuntu:latest
RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y apache2 
COPY ./index.html /var/www/html/
COPY ./hour.js /var/www/html/
COPY ./main.css /var/www/html/
COPY ./background.mp4 /var/www/html/
CMD ["apache2ctl", "-D", "FOREGROUND"]