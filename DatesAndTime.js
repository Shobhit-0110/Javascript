// dates in js is calculated from a standard date i.e January 1,1970

//  let date = new Date()
//  console.log(date)

//  console.log(date.toDateString())
//  console.log(date.toLocaleDateString())
//  console.log(date.toLocaleString())

//  console.log(typeof date)

// let my_date = new Date(2024,0,1,10,30)  // month in js by default start with 0
// console.log(my_date.toLocaleString())
// console.log(my_date.toDateString())

// // let my_date = new Date("2024-01-10")
// let my_date = new Date("01-10-2001")
// console.log(my_date.toDateString())

// let myTime = Date.now()
// console.log(myTime);
// console.log(my_date.getTime()); // gives time in ms
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// // console.log(newDate);
// // console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getMonth().toLocaleString());

console.log(newDate.toLocaleString('default',{
    weekday:"long"}
))