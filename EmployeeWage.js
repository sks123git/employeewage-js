const IS_PART_Time = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
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
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log('Emp Wage: ' + empWage);
