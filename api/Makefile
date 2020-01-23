.PHONY: install start clean

install: \
	node_modules

node_modules:
	npm install

start: install
	node app.js

clean:
	rm -rf node_modules
