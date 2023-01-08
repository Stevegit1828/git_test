/*const getUserChoice = userInput =>  {   //Step 1
  userInput = userInput.toLowerCase();  //Step 2
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {  //Step 3
    return userInput; 
  } else {
    console.log(`${userInput} is not a valid weapon choice, please choose either rock, paper or scissors.`);
  };
};
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Rock, Paper or Scissors", function (userInput) {
  console.log(`Oh, so your weapon is ${userInput}`);
  userInput = userInput.toLowerCase();  //Step 2
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {  //Step 3
    console.log(`Confirmed weapon is ${userInput}`);
    return userInput; 
  } else {
    console.log(`${userInput} is not a valid weapon choice, please choose either rock, paper or scissors.`);
  };
  // console.log("Closing the interface");
  rl.close();
})
 const getComputerChoice = () => { //Step 5
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

console.log(`Computer has chosen ${getComputerChoice()}`);   // <-- computer choice function works


;