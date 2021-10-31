#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
const program = new Command();
program
.description('Compares two configuration files and shows a difference.')
.arguments('<filepath1> <filepath2>')
.option('-f, --format <type>', 'output format', 'stylish')
.version('1.0.0', '-v, --version', 'output the version number')
.parse(process.argv);
