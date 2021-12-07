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
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
/////////////////////////name, location, bio, LinkedIn URL, and GitHub URL.


  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
