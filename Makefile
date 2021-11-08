lint:
	npx eslint .

install:
	npm ci

publish:
	npm publish --dry-run

test-coverage:
	npm test -- --coverage --coverageProvider=v8

