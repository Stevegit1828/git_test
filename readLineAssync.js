const readline = require('readline');

const getUserInput = () => {
  const rl = readline.createInterface({
    input: process.stdin
  });
  
  return new Promise((resolve) => {
    rl.prompt();
    rl.on('line', (line) => {
     // rl.close();
      resolve(line);
    });
  });
};

const run = async () => {
  console.log('Rock, Paper or Scissors');
  const userInput = await getUserInput();
  console.log(`Your weapon is ${userInput}`);
};

//console.log ('Computer ${computerChoice}') ;
/*
const getComputerChoice = () => { //Step 5
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      computerChoice=== 'rock' ; 
      console.log ('Computer ${computerChoice}') ;
    return 'rock';
      break;
    case 1:
      computerChoice === 'paper' ; 
      return 'paper';
      console.log ('Computer ${computerChoice}') ;
      break;
    case 2:
      computerChoice === 'scissors' ; 
      return 'scissors';
      console.log ('Computer ${computerChoice}') ;
      break;
  }
  console.log ('Computer $computerChoice') ;
}
*/
run();

