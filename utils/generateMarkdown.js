// function to generate markdown for README
function generateMarkdown(data) {
  let badge = "";
  if ((data.license = "Creative Commons")) {
    badge =
      "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if ((data.license = "MIT")) {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if ((data.license = "Mozilla")) {
    badge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  return `${badge}
  # ${data.title}
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
