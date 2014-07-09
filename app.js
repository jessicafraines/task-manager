var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var home = [], school = [], work = [];
var option = prompt ("Will task happen at (h)ome, (s)chool, (w)ork or (q)uit?"); 

while(option != 'q'){
  var task = prompt("What is the task?");

  if(option === 'h'){
    home.push(task);
  }
  else if(option ==='s'){
    school.push(task);
  }
  else if(option === 'w'){
     work.push(task);
  }
  option = prompt("will task happen at (h)ome, (s)chool, (w)ork or (q)uit?");
}

console.log("Tasks at home are", home);
console.log("Tasks at school are", school);
console.log("Tasks at work are", work);



      
