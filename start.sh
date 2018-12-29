#!/usr/bin/env bash

docker kill html; docker rm html;
docker run --name html \
       -v `pwd`/app:/var/www/html:ro \
       -v `pwd`/nginx/nginx.conf:/etc/nginx/nginx.conf:ro \
       -v `pwd`/nginx/ssl:/etc/nginx/ssl:ro \
       --network host \
       -ti \
       -p 443:443 \
       --rm \
       nginx
