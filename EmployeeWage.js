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
