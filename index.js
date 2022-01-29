#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
const log = console.log;


async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep(500);

  if (isCorrect) {
    spinner.success({ text: `Alright...` });
  } else {
    spinner.error({ text: `Thanks for visiting, have a nice day 💀💀💀 ` });
    process.exit(1);
  }
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'Curious about me?\n',
    choices: [
      'Yea',
      'Nope thanks',
    ],
  });

  return handleAnswer(answers.question_1 === 'Yea');
}

async function welcome() {
	log(`
	${chalk.whiteBright(`Hi, you can call me Roby, 
	I'm 20 y.o computer science(kinda) student 
	I have interest towards frontend development(and backend stuff sometimes) 
	currently live in Yogyakarta, Indonesia. 
	My main weapon is React, Next, Node.`)}
	${chalk.magenta('Linkedin:')} ${chalk.magenta.bold('https://www.linkedin.com/in/rabih-utomo-36955a1b9/')}
	${chalk.yellow('Instagram:')} ${chalk.yellow.bold('https://instagram.com/rabih3.1415')}
	${chalk.red('Github')} ${chalk.red.bold('https://github.com/Robycigar')}
	`)
}

async function main() {

	figlet('Robycigar',  function(err, data) {
	    if (err) {
	        console.log('Something went wrong...');
	        console.dir(err);
	        return;
	    }
	    console.log(gradient('cyan', 'pink')(data))
	});

  await sleep(3000);
  await question1();
  welcome();
}

main();