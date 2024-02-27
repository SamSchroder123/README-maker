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
`;
}

module.exports = generateMarkdown;
