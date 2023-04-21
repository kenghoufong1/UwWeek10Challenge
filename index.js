const question = require('inquirer');
const fs = require('fs');
const frontpage = require('./frontpage.js');
const { log } = require('console');

async function maininfor() {
    const tempmaininfor = await question.prompt([
        {
            type: 'input',
            message: 'Please Enter the Name Of the File',
            name: 'index',
        },
        {
            type: 'input',
            message: 'Please Enter the Team Manager Github',
            name: 'managergithub',
        },
        {
            type: 'input',
            message: 'Please Enter the Team Manager Email',
            name: 'manageremail',
        },
        {
            type: 'input',
            message: 'Please Enter the Team Managers Name',
            name: 'managername',
        },
        {
            type: 'input',
            message: 'Enter The number of teammates less than or equal to 4',
            name: 'numofteam',
        },
    ])

    const teamMembers = [];

    for (let i = 1; i <= Number(tempmaininfor.numofteam); i++) {
        const tempbasicinfor = await question.prompt([
            {
                type: 'input',
                message: `Enter The Name Of the ${i} employee`,
                name: 'name',
            },
            {
                type: 'input',
                message: 'Enter Their Github page',
                name: 'github',
            },
            {
                type: 'input',
                message: 'Enter The Email Address',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Enter Their Office Number',
                name: 'officeNumber',
            },
            {
                type: 'checkbox',
                message: 'Is Their Position Engineer or an intern',
                name: 'position',
                choices: ['Engineer', 'Intern'],
            },
        ]);

        teamMembers.push(tempbasicinfor);
    }

    const filename = `${tempmaininfor.index.toLowerCase().split(' ').join('')}.html`;
    fs.writeFile(filename, frontpage(tempmaininfor,teamMembers,teamMembers.length), (err) =>
        err ? console.log(err) : console.log('Success!'));
}

maininfor();


