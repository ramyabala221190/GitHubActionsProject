Github Actions

Install the Github Actions extension

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
These workflows follow a specific structure and are stored in the .github/workflows directory in the root of the project.

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


In GitHub Actions workflows, run and uses are both keywords used within a job's steps, but they serve distinct purposes:

The run keyword executes shell commands directly on the runner machine.
It is used for custom scripts or single-line commands specific to your workflow.
You can specify the shell to use (e.g., bash, powershell, python).

The uses keyword references and executes a pre-defined action.
Actions are reusable units of code, often published on the GitHub Marketplace or residing in a repository.
They can be JavaScript actions, Docker container actions, or composite actions.
Actions typically perform more complex, encapsulated tasks like checking out code, setting up environments, or deploying applications.

------------------------------------------------------------------------------

We have used the needs field in the .yml file to create a dependency on the other job.

So the test job in build-test.yml depends on the completion of the build job to
begin exection.

```
 test:
    needs: build # this means the test job will run only after the build job has succeeded
    runs-on: ubuntu-latest
    steps:
      - name: checkout repo
        uses: actions/checkout@v4
      - name: use node
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'
      - run : npm cache clean --force
      - run : npm install
      - run : npm test


```

On pushing changes to the branch, the workflow files start executing.
We can view the status in the Actions tab of the repo.

--------------------------------------------------------------------------------
## Configuring Test in Node app

Installed the below dependencies:

```
npm install --save-dev jest supertest @types/jest @types/supertest ts-jest

```

Added below in package.json
```
"jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }

```

Added a test script in package.json
```
"test":jest

```

Added a app.test.ts that tests the app.ts file.

-----------------------------------------------------------------------------------------

## Deploying to github pages

Go to repo settings ---> environment ----> new environment

I have entered "Production" as the environment and click on Configure Environment

Lets keep the default settings for the production environment.

Now click on settings ---> pages

Under "Build and Deployment" section, select gitHub actions from source dropdown

This change will get automatically saved.

https://ramyabala221190.github.io/GitHubActionsProject/ is the target url

----------------------------------------------------------------------------------------

Github permissions

GitHub Actions utilize permissions to control what a workflow can do within a repository or organization. These permissions are primarily managed through the GITHUB_TOKEN and can be configured at various levels: 
1. Repository-level Workflow Permissions: 

• Default Permissions: Workflows inherently receive a GITHUB_TOKEN with default permissions. These can be adjusted in the repository settings under Actions &gt; General &gt; Workflow permissions. Options include "Read repository and organization permissions" (default) or "Read and write permissions." 
• Granular Permissions: You can specify more precise permissions for individual scopes within your workflow file using the permissions key. This allows you to grant read or write access for specific areas like contents, issues, pull-requests, packages, etc. 

    permissions:
      contents: write
      issues: read

• read-all / write-all: Shorthand to grant read or write access to all available scopes. [1]  

    permissions: write-all

• Disable Permissions: You can explicitly disable all permissions for a workflow. 

    permissions: {}

2. Organization-level Actions Permissions: 

• Enabling/Disabling Actions: Organizations can enable or disable GitHub Actions for all repositories, or limit them to actions and reusable workflows from within the organization. 
• Allowed Actions: You can restrict which actions and reusable workflows are allowed to run within an organization, choosing between allowing all actions, allowing actions from your organization and GitHub-authored actions, or allowing only selected actions. 
• SHA Pinning Requirement: Organizations can enforce that all actions must be pinned to a full-length commit SHA for enhanced security. 

3. GitHub Packages Permissions: 

• Package Access Control: Permissions for GitHub Packages can be configured to control who can access, publish, and manage packages. This includes granting access to specific users, teams, or repositories (including those running GitHub Actions workflows). 

4. Environment Protection Rules: 

• Deployment Restrictions: For deployments to specific environments, you can set environment protection rules that require reviewers, restrict deployments to certain branches, and utilize environment-scoped secrets for secure continuous delivery. 

AI responses may include mistakes.

-----------------------------------------------------------

## Github permissions

GitHub Actions workflow permissions control the level of access the GITHUB_TOKEN has to your repository and its resources during a workflow run. These permissions can be configured at the repository, organization, or even job level to enforce the principle of least privilege.


## Events that trigger workflow

https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows


## Scheduling events using cron

https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#onschedule


-----------------------

GitHub Copilot's "chat modes," more recently referred to as "agents," are predefined configurations that allow users to tailor the behavior of Copilot Chat for specific tasks or personas. These modes enable you to specialize the AI's responses and actions to fit different roles or objectives within your development workflow. 
Built-in Modes (or Agents): 

• Ask Mode: Designed for general question-and-answer interactions, such as explaining code, exploring APIs, or brainstorming ideas. 
• Edit Mode: Focused on making targeted changes directly within your code, like refactoring functions or implementing specific modifications. 
• Agent Mode: Facilitates multi-step, automated changes across multiple files, enabling Copilot to handle more complex, autonomous tasks like adding logging to all API endpoints. 

Custom Modes (or Agents): 
Users can also create their own custom chat modes, which offer a higher level of customization. These custom modes can: 

• Define a Persona: Assign a specific role or persona to Copilot, such as a "senior C# developer," "DevOps engineer," or a "critical thinking persona," influencing the AI's tone and approach. 
• Specify Tools: Grant the custom mode access to specific tools, like search capabilities or the ability to interact with the codebase, to enhance its functionality for particular tasks. 
• Include Instructions: Provide detailed instructions or guidelines to the AI, dictating how it should perform tasks, adhere to coding practices, or format its output. 
• Grounding and Context: Reference specific files or parts of the codebase to provide context for conversations, allowing Copilot to generate more relevant and accurate responses. 

These custom modes, typically defined in .agent.md files within a .github/agents folder in your workspace, offer a powerful way to personalize your interaction with GitHub Copilot Chat and optimize it for your individual or team's needs. 

AI responses may include mistakes.






