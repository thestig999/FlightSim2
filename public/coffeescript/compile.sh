#!/bin/sh

rm -rf *.js
coffee --compile *.coffee
mv *.js ../javascripts

