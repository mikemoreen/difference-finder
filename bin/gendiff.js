#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import genDiff from '../index.js';

const program = new Command();
program
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-v, --version', 'output the version number')
  .option('-f, --format <type>', 'output format', 'stylish')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    const { format } = program.opts();
    const diff = genDiff(filepath1, filepath2, format);
    console.log(diff);
  })
  .parse(process.argv);
