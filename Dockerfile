FROM nginx:alpine

#WORKDIR /app
COPY . /usr/share/nginx/html
#ADD https://github.com/ankitjilka/Number_base_Converter.git .

#CMD sleep infinity
