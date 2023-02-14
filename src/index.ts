import figlet from 'figlet';
import { Command } from 'commander';

const program = new Command();

program
  .version('0.0.1')
  .description('A CLI for retrieving best convertion rate for dollar payments')
  .option('-v, --value  [value]', 'Reais value to be converted');

console.log(figlet.textSync('Hello World!'));
