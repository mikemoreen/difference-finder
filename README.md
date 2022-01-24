### Hexlet tests and linter status:
[![Actions Status](https://github.com/mikemoreen/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/mikemoreen/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/268360c956534bfb2e6b/maintainability)](https://codeclimate.com/github/mikemoreen/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/268360c956534bfb2e6b/test_coverage)](https://codeclimate.com/github/mikemoreen/frontend-project-lvl2/test_coverage)
[![tests and lint](https://github.com/mikemoreen/frontend-project-lvl2/actions/workflows/test-linter.yml/badge.svg)](https://github.com/mikemoreen/frontend-project-lvl2/actions/workflows/test-linter.yml)
# Difference finder
## About
Compares two configuration files and shows a difference.<br>
### Install:
```sh
git clone
make install
npm link
```
### supported extensions:
- json
- yaml(yml)

### output formats:
- stylish(default)
- plain
- json
### How to use
```sh
gendiff [options] <filepath1> <filepath2>
```
Options:
* -V, --version        output the version number
* -f, --format [type]  output format (choices: "stylish", "plain", "json", default: stylish)
* -h, --help           display help for command
### Example for JSON and yml files:
[![asciicast](https://asciinema.org/a/zX7hJjqMjmGYKhj67HVl3AHlJ.svg)](https://asciinema.org/a/snem0KMTSreLyNVZX7O1Nxeco)
