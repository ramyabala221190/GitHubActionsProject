Github Actions

Purpose is CI CD. Similar to jenkins
It automates the way you build,test and deploy directly from your github repos.
Create and manage workflows using code
git hub cli provides a vast collection of pre built actions that can be used.

Increased efficiency is an obvious advantage.
1 unique advantage is seamless integration with github repos.

Continuous integration is a software dev practice where code changes are automatically built, tested and integrated
into the main codebase frequently.
So CI can automatically triggered using workflows on occurance of an event.

Continuous deployment(CD) is a software dev practice of automatically deploying code changes to prod/staging
after passing through the CI pipeline.

A workflow is an automated process that consists of 1 or more jobs in yml syntax.
These workflows follow a specific structure and are stored in the .github/workflows directory in the root
of the project.

Components of the workflow yml file:

1. name: any name you want to give to describe the workflow's purpose
2. on : Setting the workflow trigger event. It describes the github events that trigger the execution of the workflow.
3. jobs: By default jobs run independently and in parallel. But you can configure jobs to run in sequence.
4. runs-on: Specifies the runner. A runner describes the execution environment in which the jobs run.
They define the OS, software and hardware dependencies available to your workflow.
There are 2 types of runners available: Github hosted runners and self hosted runners.
Github hosted runners are available for macos, windows and linux environments.
Self hosted runners can be used to customise the execution environment according to specific requirements. Its a system
that you deploy and manage on your own infrastructure to execute github actions.

5. steps: Individual actions that make up the job. They are nothing but the tasks that need to be executed to complete
the job successfully. Tasks could be like checking out code, installing dependencies

run command is used to execute tasks 









In GitHub Actions workflows, run and uses are both keywords used within a job's steps, but they serve distinct purposes:

The run keyword executes shell commands directly on the runner machine.
It is used for custom scripts or single-line commands specific to your workflow.
You can specify the shell to use (e.g., bash, powershell, python).

The uses keyword references and executes a pre-defined action.
Actions are reusable units of code, often published on the GitHub Marketplace or residing in a repository.
They can be JavaScript actions, Docker container actions, or composite actions.
Actions typically perform more complex, encapsulated tasks like checking out code, setting up environments, or deploying applications.


npm install --save-dev jest supertest @types/jest @types/supertest ts-jest

