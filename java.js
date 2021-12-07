const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where do you live?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Enter your bio:',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'Enter your LinkedIn URL:',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'Enter your GitHub URL:',
        name: 'github',
    },
  ])
  
/////////////////////////name, location, bio, LinkedIn URL, and GitHub URL.


  .then((response) => {
    const filename = `index.html`;
    //`${data.name.toLowerCase().split(' ').join('')}.html`
    var html=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
      <h1>${response.name}</h1>
      <h1>${response.location}</h1>
      <h2>${response.bio}</h2>
      <h2>${response.linkedin}</h2>
      <h2>${response.github}</h2>
      
        
    </body>
    </html> `
    fs.writeFile(filename, html, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
