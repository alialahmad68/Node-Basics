
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  textCommand=text.trim().split(" ");
  if (text === 'quit\n'  || text==='exit\n') {
    quit();
  }
  else if(text.includes("hello")){
    hello(text);
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'list\n'){
    list();
  }
  else if(textCommand[0]+'\n' === 'add\n'){
add(text);
 }
 else if(textCommand[0]+'\n' === 'remove\n'){
  remove(text);
   }
 else if(textCommand[0]+'\n' === 'edit\n'){
    edit(text);
  }
 else if(textCommand[0]+'\n' === 'check\n'){
    check(text);
  }
 else if(textCommand[0]+'\n' === 'uncheck\n'){
    uncheck(text);
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text_recieved){
  let text= text_recieved.replace('\n',"").trim();

   if(text==="hello")
      {console.log("hello!")}
  else{
     text=text.slice(5,text.length).trim();
     console.log('hello '+text+'!');
      }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * list all the commands and what every command do
 *
 * @returns {void}
 */
function help(){

  console.log(`type "hello" to say Hello!
type "hello" and your name to display hello "your name"
type "exit" or "quit" to exit the application
type "help" to list all the commands
type "list" to list all the tasks
type "add" and the task you want to add the task
type "remove" only to remove the last task
type "remove" and the number of the task to remove the task`)
}

let tasks=[
  {task:"buy bread",done:false},
  {task:"do the exercises",done:false},
]


/**
 * list the tasks
 *
 * @returns {void}
 */
function list(){
 for (let i=0;i<tasks.length;i++) {
  console.log(`${i+1} - [${tasks[i].done? "✓":" "}] ${tasks[i].task}`)
 }
}

/**
 * add a task
 *
 * @returns {void}
 */
function add(text){
  if(text.trim().length==3){
    console.log("error, please add a task after using add command")
  }
  else{
    tasks.push({task:text.slice(4,text.length).trim(),done:false});
    console.log("Task aded succesfully")

  }
}

/**
 * remove a task
 *
 * @returns {void}
 */
function remove(text){
  let index=text.slice(6,text.length).trim()-1;

    if(text.trim().length==6){
    tasks.pop();
    console.log("Last element Removed succesfully")
  }
  else if(index>=tasks.length || index<0){
    console.log("Error, number of task does not exist")
  }
  else{
tasks.splice(index,1);
console.log(`Task ${index+1} Removed succesfully`)

}}

/**
 * edit a task
 *
 * @returns {void}
 */
function edit(text){
  let text_edit=text.slice(4,text.length).trim();
  let index=text.trim().split(" ")[1]-1;
  let splited_text=text.slice(4,text.length).trim();
  let new_text=text.slice(7,text.length)

    if(text.trim().length==4){
    console.log("Error, type task you want ");
  }
  else if(index>=0){
tasks[index]=new_text.replace("\n","");
console.log(`Task ${index+1} edited succesfully`);

}
else{
tasks[tasks.length-1]=splited_text;
console.log(`last task edited succesfully`);
}
}

/**
 * check a task
 *
 * @returns {void}
 */
function check(text){
  let index=text.slice(5,text.length).trim()-1;


  if(index>=tasks.length || index<0){
    console.log("Error, number of task does not exist")
  }
  else{
tasks[index].done=true;
console.log(`Task ${index+1} Checked succesfully`)

}}

/**
 * unCheck a task
 *
 * @returns {void}
 */
function uncheck(text){
  let index=text.slice(7,text.length).trim()-1;


  if(index>=tasks.length || index<0){
    console.log("Error, number of task does not exist")
  }
  else{
tasks[index].done=false;
console.log(`Task ${index+1} unchecked succesfully`)

}}





// The following line starts the application
startApp("Ali Al Ahmad")
