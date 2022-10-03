const chalk = require('chalk')
const log = console.log;
var readlineSync = require('readline-sync');
var userName = readlineSync.question(chalk.bold.redBright("what is your name? "));
console.log(chalk.italic.greenBright.underline("Hello " + userName + " Welcome to VasishterS quiz on akashVasishter"));
var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(chalk.bold.magentaBright(userName + " you answered: " + userAnswer + " you are right!!"))
    score++

  }

  else {
    console.log(chalk.bold.magentaBright(userName + " you answered:" + userAnswer + " you are wrong!"));
    score--
  }

  console.log(chalk.bold.red("what you want to do ?"))
  var userKey = prompt(chalk.yellowBright.inverse("press e to exit,enter key to continue!"))

  if (userKey === 'e') {
    fail;
  }

}

var question = [{
  question: chalk.bold.magentaBright("Where do you live?\na.Tirupur \nb.Coimbatore\nc.Bangalore\n\t"),
  answer: "a"
},

{
  question: chalk.bold.magentaBright("Where Do you work?\na.Tech Mahindra\nb.TCS\nc.none of the above\n\t"),
  answer: 'a'

},

{
  question: chalk.bold.magentaBright("What do you want to become??\na.Web developer\nb.Data analyst\nc.Testing engineer\n\t"),
  answer: 'a'
}, {

  question: chalk.bold.magentaBright(' What are you currently passion about?\na.Machine Learning\nb.Internet of things\nc.Web Development\n\t '),
  answer: 'c'
},

{
  question: chalk.bold.magentaBright('What is your work experience?\na.1 year\nb.No Experience just starting\nc.2 years\n\t '),
  answer: 'c'
}
];

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.bold.greenBright.underline("yay your score is ", score));