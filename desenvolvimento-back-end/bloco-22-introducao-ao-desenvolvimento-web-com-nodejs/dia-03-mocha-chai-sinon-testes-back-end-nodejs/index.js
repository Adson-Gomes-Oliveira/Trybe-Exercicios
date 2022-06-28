const ageInMonths = (age) => {
  const calc = age * 12;
  return calc;
}

const ageInDays = (age) => {
  const calc = ((age * 12) * 365);
  return calc;
}

const ageInHours = (age) => {
  const calc = (((age * 12) * 365) * 24);
  return calc;
}

const ageInMinutes = (age) => {
  const calc = ((((age * 12) * 365) * 24) * 60);
  return calc;
}

function timeStatics (age) {
  const statics = {
    age_in_minutes: ageInMinutes(age),
    age_in_hours: ageInHours(age),
    age_in_days: ageInDays(age),
    age_in_months: ageInMonths(age),
  }

  return console.table(statics);
}

module.exports = {
  timeStatics,
  ageInDays,
  ageInHours,
  ageInMinutes,
  ageInMonths
}
