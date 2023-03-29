const IS_PART_Time = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 2;
const MAX_Hours = 100;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empWageArray = new Array();

function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_Time:
      return PART_TIME_HOURS;
      break;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
      break;
    default:
      return 0;
  }
}

function calculateDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_Hours && totalWorkingDays < NUM_OF_WORKING_DAYS) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  totalEmpHrs += empHrs;
  empWageArray.push(calculateDailyWage(empHrs));
}

let empWage = calculateDailyWage(totalEmpHrs);
console.log(
  'Total working days ' +
    totalWorkingDays +
    ' Total emp hrs: ' +
    totalEmpHrs +
    ' Emp Wage: ' +
    empWage
);
//calculating total wage
let totalEmpWage = 0;
function sum(dailywage) {
  totalEmpWage += dailywage;
}

empWageArray.forEach(sum);
console.log(
  'Total days working: ' + totalWorkingDays + ' totalWage: ' + totalEmpWage
);

function totalWages(totalWage, dailywage) {
  return totalWage + dailywage;
}
console.log('Total employee wage: ' + empWageArray.forEach(totalWages, 0));

//Show the day using Array map
let dailyCntr = 0;
function mapDayWithWage(dailywage) {
  dailyCntr++;
  return dailyCntr + '=' + dailywage;
}
let mapDaywithWageArray = empWageArray.map(mapDayWithWage);
console.log('Daily wage map');
console.log(mapDaywithWageArray);

//show days when full time is 160
function fullTimeWage(dailywage) {
  return dailywage.includes('160');
}

let fullDayWageArray = mapDaywithWageArray.filter(fullTimeWage);
console.log('Daily wage wit 160');
console.log(fullDayWageArray);

//first occurence when full time wage is found
function findfullTimeWage(dailywage) {
  return dailywage.includes('160');
}

let firstOccurence = mapDaywithWageArray.find(findfullTimeWage);
console.log('Daily wage with  first occurence 160');
console.log(firstOccurence);

//to check every element of full time hold truly 160
function everyfullTimeWageHoldsTrue(dailywage) {
  return dailywage.includes('160');
}

let everyFullTime = fullDayWageArray.every(everyfullTimeWageHoldsTrue);
console.log('Every element of full time hold truly 160');
console.log(everyFullTime);

//to check every element of full time hold truly 160
function isAnyPartTimeWage(dailywage) {
  return dailywage.includes('80');
}

let isPartTime = mapDaywithWageArray.some(isAnyPartTimeWage);
console.log('Every element of full time hold truly 80');
console.log(isPartTime);

//Find number of days employee worked
function noOfDaysWorked(noOfdays, dailywage) {
  if (dailywage > 0) return noOfdays + 1;
  return noOfdays;
}

console.log('No of days worked');
console.log(empWageArray.reduce(noOfDaysWorked, 0));
