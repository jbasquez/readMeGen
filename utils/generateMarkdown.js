// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "none") {
        return "";
    }
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)]`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# Project Title: ${data.title}
## About:
- Repo-name: ${data.repoName}
- Discription: ${data.discription}
- License: ${renderLicenseBadge(data.license)}
- Version of installation needed for deployment: ${data.installation}
*Is this ready for deployment: ${data.ready}
## Contact info:
- Contributors: ${data.contributors}
- Username: ${data.username}
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
