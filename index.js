const question = require('inquirer');
const fs = require('fs');
const frontpage = require('./frontpage.js');

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
    // tempbasicinfor =[];
    for (let i = 1; i < Number(tempmaininfor.numofteam) + 1; i++) {
        const tempbasicinfor = await question.prompt([
            {
                type: 'input',
                message: `Enter The Name Of the ${i} employee`,
                name: `id${i}`,
            },
            {
                type: 'input',
                message: 'Enter Their Github page',
                name: `github${i}`,
            },
            {
                type: 'input',
                message: 'Enter The Email Address',
                name: `email${i}`,
            },
            {
                type: 'input',
                message: 'Enter Their Office Number',
                name: `officenumber${i}`,
            },
            {
                type: 'checkbox',
                message: 'Is Their Position Engineer or an intern',
                name: `position${i}`,
                choices: ['Engineer', 'Intern'],
            },
        ])
        
        const filename = `${tempmaininfor.index.toLowerCase().split(' ').join('')}.html`;
        fs.writeFile(filename, frontpage(tempmaininfor, tempbasicinfor), (err) =>
            err ? console.log(err) : console.log('Success!'));
    }


}
maininfor();


