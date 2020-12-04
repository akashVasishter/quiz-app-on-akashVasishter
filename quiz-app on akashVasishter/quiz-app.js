const chalk = require('chalk')
const log = console.log;
 var readlineSync = require('readline-sync');
var userName = readlineSync.question(chalk.bold.redBright("what is your name? "));
console.log(chalk.italic.greenBright.underline("Hello "  + userName + " Welcome to VasishterS quiz on akashVasishter"));
var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer === answer){
    console.log(chalk.bold.magentaBright(userName+" you answered: "+userAnswer+ " you are right!!"))
    score++

  }

  else{
    console.log(chalk.bold.magentaBright(userName+" you answered:"+userAnswer+ " you are wrong!"));
    score--
  }

console.log(chalk.bold.red("what you want to do ?"))
var userKey=prompt(chalk.yellowBright.inverse("press e to exit,enter key to continue!"))

if(userKey==='e')
{
fail;
}
   
}

var question = [{
  question:chalk.bold.magentaBright("Where can you always find me?\na.handball ground\nb.cafteria\nc.library\n\t"),
  answer:"a"
},

{
  question:chalk.bold.magentaBright("Who would I invite to my fantasy dinner party?\na.bhavya\nb.malavika mohanan\nc.alexaendra daddario\nd.all the above\n\t"),
  answer:'d'
 
},

{
  question:chalk.bold.magentaBright("Why do you think we get along so well??\na.brotherhood\nb.good connection\nc.positivity\n\t"),
  answer:'a'
},{

  question:chalk.bold.magentaBright(' If I became president, what do you think I’d do first??\na.legalise cannabis\nb.would offer you a job and look after you\nc.make you as vice president\n\t '),
  answer:'a'
},

{
  question:chalk.bold.magentaBright('We’re going to let a celebrity be in our group of friends — who would we ask??\na.charlie hunnam\nb.ajith kumar\nc.ranbir kapoor\n\t '),
  answer:'b'
}
];

for(var i=0;i<question.length;i++)
{
  var currentQuestion = question[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log(chalk.bold.greenBright.underline("yay your score is ",score));
console.log(chalk.greenBright.inverse("Thankyou for playing!"));