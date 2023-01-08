



// take the first parameter as the userInput 
userInput = x ;
if (userInput === ('rock')) {
// console.log('User Input rock') ;
}
else if (userInput === ('paper')) {
 // console.log('User Input paper') ;
 }
 else if (userInput === ('scissors')) {
  //console.log('User Input scissors') ;
 }
 else {
  console.log('not a valid parameter. Rock - Paper or Scissors');
  return;
 }

//console.log(`You have chosen ${userInput}`); // <--- user param function works

const getComputerChoice = () => { //Step 5
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
     return 'rock';
   //console.log(`rock');
      break;
    case 1:
     return 'paper';
    //  console.log('paper') ;
     break;
    case 2:
      return 'scissors';
      break;
  }
}

//console.log(`Computer has chosen ${getComputerChoice()}`);   // <-- computer choice function works
computerChoice=getComputerChoice();
console.log(`Computer has chosen ${computerChoice}`); 
console.log(`User has chosen ${userInput}`); 
const determineWinner = ($computerChoice,$userInput) => {
 // console.log(`Computer has passed ${computerChoice}`); 
 // console.log(`User has passed ${userInput}`); 
  if (userInput === computerChoice) {
   //   if ('scissors' === 'rock') {
    return 'Game1 was a tie.';
    // game was a tie

  } else if (userInput === 'rock') {
      if (computerChoice === 'paper') {
      return 'Computer wins with paper! Paper wraps rock.';
      } 
      else { 
       return 'You win with rock! Computer chose scissors.';
      }
    } 
  else if (userInput === 'paper') {
      if (computerChoice === 'scissors') {
      return 'Computer wins with scissors! Scissors cut paper.';
      } else {
       return 'You win with paper! Computer chose rock.';
      }
  } 
  else if (userInput === 'scissors') {
            if (computerChoice === 'rock') {
      return 'Computer wins! Rock smashed scissors.'
      } 
      else {
      return 'You win with scissors! Scissors cut paper.'
      }
    }  
}

console.log(determineWinner()); 
