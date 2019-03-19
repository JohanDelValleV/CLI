const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const shell = require('shelljs');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Hello world', { font: 'standard', horizontalLayout: 'full' })
  )
);

inquirer.prompt([
    {
        name: 'question',
        type: 'list',
        message: '????',
        choices: [{
            name: 'ping',
            value: '1'
        },
        {
            name: 'who is',
            value: '2'
        },
        {
            name: 'download',
            value: '3'
        }
    ],
        
    }
]).then(answers => {
    switch (answers.question) {
        case '1':
            ping();
            break;
        case '2':
            whoIs();
            break;
        case '3':
            download();
            break;
        default:
            break;
    }
})


function ping(){
    inquirer.prompt([
        {
            name: 'ping',
            type: 'input',
            message: 'Ingrese dirección'
        }
    ]).then(answer => {
        shell.exec('ping '+ answer.ping)
    })
}

function whoIs() {
    inquirer.prompt([
        {
            name: 'whoIs',
            type: 'input',
            message: 'Ingrese dirección'
        }
    ]).then(answer => {
        shell.exec('whois '+answer.whoIs)
    })
}

function download() {
    inquirer.prompt([
        {
            name: 'download',
            type: 'input',
            message: 'Ingrese dirección'
        }
    ]).then(answer => {
        shell.exec('wget '+answer.download)
    })
}