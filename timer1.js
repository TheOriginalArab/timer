//Process command line arguments starting from index 2
const args = process.argv.slice(2);

//Convert arguments to numbers and filter out non-numeric inputs
const alarms = args.filter((arg) => !isNaN(arg)).map(Number);

//function to set alarm
const setAlarm = function (time) {
  setTimeout(() => {
    console.log(`Time's up! Alarm for ${time} seconds`);
    process.stdout.write("\x07");
  }, time * 1000);
};

//schedule each alarm
alarms.forEach((alarm) => {
  if (alarm >= 0) {
    setAlarm(alarm);
  }
});
