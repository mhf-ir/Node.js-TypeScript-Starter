import { Command } from 'commander';

const program = new Command();

program
  .name('app')
  .description('Sample Application interface')
  .version(process.env.APS_VERSION ? process.env.APS_VERSION : 'DEV');

program
  .command('http')
  .description('Start HTTP Server')
  .action(() => {
    console.log('http server');
  });

program
  .command('worker')
  .description('Start Worker Server')
  .action(() => {
    console.log('worker server');
  });

program.parse();
