function currentDay() {
    let today = new Date()
    var dd = today.getDate();
    let year = today.getFullYear();
    let longMonth = today.toLocaleString('en-us', { month: 'long' });
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayNum = today.getDay();
    let dayName = days[dayNum];

    console.log(`Today is ${dayName} the ${dd} of ${longMonth},  ${year}`);
}
currentDay();
