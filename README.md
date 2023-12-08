# Run the following commands in order<br />
tsc --init<br />
npm init -y<br />
Now open the tsconfig.json in vscode and change:<br />
“target”: “es2016” -> “target”: “ES2022”,<br />
ensure that a comma is present at the end of this statement<br />
“module”: “commonjs”, -> “module”: “NodeNext”,<br />
un-comment the following line<br />
// “moduleResolution”: “node”,<br />                       
/* Specify how TypeScript looks up a file from a given module specifier. */<br />
and change “moduleResolution”: “node”, -> “moduleResolution”: “NodeNext”,<br />
After making above changes now open package.json<br />
below this line “main”: “index.js”,<br />
create a new line and write<br />
“type”: “module”,<br />
Starting a new typescript project<br />
Create a new folder in any location ou want<br />
Open the folder in explorer<br />
index.ts<br />
tsc<br />
tsc -w<br />
npm install inquirer<br />
If we want to install any package as DevDependency <br />
npm install -D <ANY_PACKAGE_NAME><br />
npm install -D @types/node<br />

#details are below 
create folder
Click in the address bar of the explorer
Write cmd and hit enter
cmd terminal will open
Run the following commands in order
tsc --init
This will create a tsconfig.json file in that folder
npm init -y
This will create package.json file
Please remember that you will never create this files manually. These files need to be created with above commands.
code .
This will open vscode
At this point only two windows should be open one is vscode and other is cmd terminal which we will use to run commands and will not use the integrated terminal of vscode
Now open the tsconfig.json in vscode and change:
“target”: “es2016” -> “target”: “ES2022”,
ensure that a comma is present at the end of this statement
“module”: “commonjs”, -> “module”: “NodeNext”,
un-comment the following line
// “moduleResolution”: “node”,                       /* Specify how TypeScript looks up a file from a given module specifier. */
and change “moduleResolution”: “node”, -> “moduleResolution”: “NodeNext”,
Please make use of the auto suggestions by vscode like while changing above cod when you write “no” vscode will suggest you with relevant options so you can select and hit enter
This will minimize the spelling mistakes we do un-intentionally.
After making above changes now open package.json
below this line “main”: “index.js”,
create a new line and write
“type”: “module”,
For installing packages to your project you can run the following commands in cmd terminal
npm install <ANY_PACKAGE_NAME>

//for example 

npm install enquirer
Code block language
bash
If we want to install any package as DevDependency there are two methods
npm install -D <ANY_PACKAGE_NAME>
This is latest method
npm install --save-dev <ANY_PACKAGE_NAME>
This is old method
Please remember that you should not manually add anything to package.json or tsconfig.json. All the dependencies and DevDependencies are installed by above methods.
Install the following package to install node types
npm install -D @types/node

Now create a new file in the root directory using following button and name it is index.ts

Open index.ts file
Now you are ready to write code. You will write all your code in index.ts file
To run your code you will have to follow the following steps in the cmd terminal
tsc
This will transpile all the .ts files in your project into .js files
Now you can run the project by runing
node index
This will give the output of your code in terminal
Please remember that every time you make any change in the code and want to check it you will have run the above step.
Tana logo
Published from Tana. The AI-powered all-in-one workspace. Get access.

#   b a t c h 5 3 - t y p e s c r i p t 
 
 
