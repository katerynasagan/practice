function lifeInWeeks(age) {

  var yearsLeft = 90 - age;
  // Calculate days you have left to live
  var daysLeft = yearsLeft * 365;
  // Calculate weeks you have left to live
  var weeksLeft = yearsLeft * 52;
  // Calculate month you have left to live
  var monthsLeft = yearsLeft * 12;
  // Create an alert with calculated numbers
  // console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.")
  console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`)
}
lifeInWeeks(56);