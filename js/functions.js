// functions

Date.prototype.calcDateDiffInDays = function (
  date1 = new Date(),
  date2 = new Date()
) {
  return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
};

Date.prototype.getMonthName = function () {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][this.getMonth()];
};

Date.prototype.getMonthDays = function () {
  const month = this.getMonth();
  let days = null;

  if (
    month === 0 ||
    month === 2 ||
    month === 4 ||
    month === 6 ||
    month === 7 ||
    month === 9 ||
    month === 11
  )
    days = 31;
  else if (month === 3 || month === 5 || month === 8 || month === 10) days = 30;
  else if (month === 1) days = month % 4 === 0 ? 29 : 28;

  return days;
};

Date.prototype.getCompleteWeeksOfThisMonth = function () {
  const date = new Date(this);
  date.setDate(1);
  return date.getDay() === 0 ? 4 : 3;
};

Date.prototype.getIncompleteWeeksOfThisMonth = function () {
  const date = new Date(this);
  date.setDate(1);

  return date.getMonthDays() > 28 && date.getDay() ? 1 : date.getDay() > 28;
};

Date.prototype.getMonthWeeks = function () {
  return (
    this.getCompleteWeeksOfThisMonth() + this.getCompleteWeeksOfThisMonth()
  );
};

const date = new Date();
date.setMonth(7);

// console.log(date.getMonthName());
// console.log(date.getMonthDays());
// console.log(date.getCompleteWeeksOfThisMonth());
// console.log(date.getMonthWeeks());

function calculate() {
  const days = document.querySelector("#days");
  const weeks = document.querySelector("#weeks");
  const weeksRounded = document.querySelector("#weeksRounded");

  const submitBtn = document.querySelector("#submitBtn");
  const resetBtn = document.querySelector("#resetBtn");

  let date1 = document.querySelector("#date1");
  let date2 = document.querySelector("#date2");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    date1 = document.querySelector("#date1");
    date2 = document.querySelector("#date2");

    const d = new Date();
    const d1 = new Date(date1.value);
    const d2 = new Date(date2.value);

    _days = new Date().calcDateDiffInDays(d1, d2);
    _weeks = Math.floor(new Date().calcDateDiffInDays(d1, d2) / 7);
    _remainingDays = new Date().calcDateDiffInDays(d1, d2) % 7;
    _weeksRounded = Math.round(new Date().calcDateDiffInDays(d1, d2) / 7);

    days.innerHTML = _days;
    weeks.innerHTML = `${_weeks} ${
      _weeks > 1 ? "weeks" : "week"
    }, ${_remainingDays} ${_remainingDays > 1 ? "days" : "day"}`;
    weeksRounded.innerHTML = _weeksRounded;
  });

  resetBtn.addEventListener("click", (e) => {
    e.preventDefault();

    date1 = document.querySelector("#date1");
    date2 = document.querySelector("#date2");

    date1.value = null;
    date2.value = null;
  });
}
