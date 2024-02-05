# Lmqadem

Lmqadem is a Github repository to crawl and scrape data from the github API and store it in a JSON to use it for further analysis. It's used to generate the the list of Moroccan OSS contributors and their total stars.

## Usage

To use this repository, you need to have a Github token with the following permissions:

- `read:org`
- `read:user`
- `repo`

Then add environment variables to your repository secrets:

- `CUSTOM_TOKEN`: the Github token

Lmqadem is part of [Awesome Morocco project](https://github.com/geeksblabla/awesome-morocco).

## Dependencies

- [soub4i/top-github-users-action](https://github.com/soub4i/top-github-users-action): a custom fork of top-github-users-action
- [stefanzweifel/git-auto-commit-action](https://github.com/stefanzweifel/git-auto-commit-action)
- Github actions cron jobs.

## Workflows

- `./.github/workflows/fetch.yml`: the main workflow file that runs the action (fetch the list of Moroccan OSS contributors) Every Sunday at 00:00 UTC.

- `./.github/workflows/stargazer.yml`: the workflow file that runs the action Every Sunday at 01:00 UTC to fetch the total stars of each contributor.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
