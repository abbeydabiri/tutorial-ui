# tutorial-ui


--------WINDOWS SETUP--------

Setting Up A Version Control Environment Using Git On Windows

To get started.

Sign up for git

Install npm, gitbash + yarn.

Install an IDE(integrated development environment) if u dont have one preferably VSCode

How To-

Sign up for git @ https://github.com/join

Download npm from https://nodejs.org/en/download/

Download gitbash from https://gitforwindows.org/

Download yarn installer from https://yarnpkg.com/lang/en/docs/install/#windows-stable

During installation of gitbash, you'll be asked which SSH Executable you'd like to use.

Unless you already use plink/putty/pageant and are familiar with managing keys on it, 

choose "Use OpenSSH".

It simplifies ssh key generation and use.

After installation open Git Bash and type: git --version

You should see something like this: git version 1.7.6.1

Git is now installed and working

installations done...

After installation of npm and gitbash
 
Configure Git - Setting user.name and user.email are the minimum

configuration options that need to be set so your name

and email will show up in your commit messages. 

    git config --global user.name "username"
    git config --global user.email "e=mail"

Generate ssh key from gitbash 
   ssh -keygen -t rsa -b 4096 -C
afer this a passphrase key is requested of u... type ur prefered key and then press the enter button.

when code is generated we add it to settings/ssh key


When you are added to a project on git 


Run yarn on ur gitbash by typing "install yarn" then punch the enter button.
followed by "yarn webpack"

and u are good to go...


HAPPY CODING...


