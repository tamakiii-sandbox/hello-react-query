.PHONY: start

install: \
	node_modules

node_modules:
	npm install

start:
	npx --no-install react-scripts start

clean:
	rm -rf node_modules

