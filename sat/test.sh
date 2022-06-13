#!/bin/sh

# only run if server changes
killall node
yarn tsc ./src/backend/main.ts --outDir build
node ./build/main.js &
yarn start
