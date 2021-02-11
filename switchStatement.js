function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
  case "a":
    return "apple";
    break;
  case "b":
    return "bird";
    break;
  case "c":
    return "cat";
    break;
  default:
    return "stuff";
    break;
}
  // Only change code above this line
  return answer;
}

switchOfStuff(1);


function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break; 
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);


function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "bob":
      return "Marley";
      break;
    case 42:
      return "The Answer";
      break;
    case 1:
      return "There is no #1";
      break;
    case 99:
      return "Missed me by this much!";
      break;
    case 7:
      return "Ate Nine";
      break;           
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
