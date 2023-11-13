function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return ('This one is on me!')
  } else if (feet > 400 && feet <= 2000) {
    return ('That will be twenty bucks.')
  } else if (feet > 2000 && feet <=2500) {
    return ('I will gladly take your thirty bucks.')
  } else if (feet > 2500) {
    return ('No can do.')
  } else { return}
}

function ternaryCheckCity(city){
  let greeting;
  city === 'NYC' ? greeting = "Ok, sounds good." : greeting = 'No go.';
  return greeting;
}

function switchOnCharmFromTip(tip){
  let gracious = '';
  switch(tip){
    case 'generous':
      gracious = 'Thank you so much.';
      break;
    case 'not as generous':
      gracious = 'Thank you.';
      break;
    case 'thanks for everything':
      gracious = 'Bye.';
      break;
  }
  return gracious;
}
