In GitHub Actions workflows, run and uses are both keywords used within a job's steps, but they serve distinct purposes:

The run keyword executes shell commands directly on the runner machine.
It is used for custom scripts or single-line commands specific to your workflow.
You can specify the shell to use (e.g., bash, powershell, python).

The uses keyword references and executes a pre-defined action.
Actions are reusable units of code, often published on the GitHub Marketplace or residing in a repository.
They can be JavaScript actions, Docker container actions, or composite actions.
Actions typically perform more complex, encapsulated tasks like checking out code, setting up environments, or deploying applications.
