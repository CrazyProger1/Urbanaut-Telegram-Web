#!/bin/bash

set -e

cd /home/urbanaut/frontend/ || exit

git checkout -- deploy.sh

git stash

git pull

npm install

npm run build

sudo pm2 restart frontend