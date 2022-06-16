install:
	npm ci

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

uninstall:
	npm rm --global @hexlet/code
