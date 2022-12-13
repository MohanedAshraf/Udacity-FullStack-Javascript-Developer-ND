# Setting-up AWS and EB CLI

### AWS CLI

- Download and Install aws cli using [AWS Installer](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
- Check if it's installed correctly by use this command `aws --version`
- Go to IAM service and create Account with Programmatic access and `AdministratorAccess` police.
- Save the <strong>Access Key ID</strong> and <strong> Secret access key </strong> locally to use later.
- Configure your default profile `aws configure` it will ask for <strong>Access Key ID</strong> and <strong> Secret access key </strong>.
- You can test any service for example IAM by this command `aws iam list-users` it will returns the all users that you have in IAM service.

**NOTE**
if you have multiple profile (you can check by this command `aws configure list-profiles` ),you should specify the profile after each command for example : `aws iam list-users --profile default`.

### EB CLI

- Install it with this [Repo](https://github.com/aws/aws-elastic-beanstalk-cli-setup) help.
  - Make sure you installed git , python and virtualenv respectively.
  - Clone the repo locally.
  - Run this command `python .\aws-elastic-beanstalk-cli-setup\scripts\ebcli_installer.py`
- Check if it's installed correctly by use this command `eb --version`
