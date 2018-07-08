
The whole idea of this project is to be able
to read actual markdown files.  The way to do
that is to be able to **parse** a markdown file,
get what you want and then create a json file.

My idea was to be able to read all of the github repos
from a file like this
[React Components and Libraries](https://github.com/stormasm/markdown-it-samples/blob/master/sample3.md)
and then go off to github and get the number of stars of each repo and other data.  This can also be used eventually in the Github explorer project
where I am searching for relevant repositories to gather data from.

This work was mostly done in December of 2017.  For more details see my work log 2017 in December.

To get babel up and running:

```
npm init -y
npm install --save babel-core babel-preset-env
```

```
alias npiy='npm init -y'
alias npibb='npm install --save babel-core babel-preset-env'
```

These markdown files / sites work...

https://github.com/enaqx/awesome-react

These markdown files / sites break...

https://github.com/xgrommx/awesome-redux

Run this file to generate out the token file

```
n md3.js
```

Run this file to create the links

```
n tokenread.js
```
