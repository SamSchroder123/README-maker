// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Licence](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Licence
${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
GitHub username: [${data.username}](https://github.com/${data.username})

Contact Email: ${data.email}

Please email me for further questions.
`;
}

module.exports = generateMarkdown;
