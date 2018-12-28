#!/bin/bash

docker kill html; docker rm html;
docker run --name html -v `pwd`:/usr/share/nginx/html:ro -d -p 8080:80 --rm nginx
