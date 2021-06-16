
const increaseDate = (date, dayNumber=3) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + dayNumber);
    return  newDate.getTime();
}

console.log(increaseDate(new Date('July 20, 21 00:20:18 GMT+00:00')))