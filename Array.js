// //Array


// // const my_arr = [1,2,3,4,'shobhit','mohit']
// // console.log(my_arr)

// const arr_2 = new Array(1,8,6,5,10,69)
// // console.log(arr_2[2]);

// // arr_2.push('gaurav')
// // arr_2.push('69')
// // console.log(arr_2)
// // arr_2.pop()
// // console.log(arr_2)


// // arr_2 .unshift(23)  // Element is added at the start of the array
// // console.log(arr_2)

// // arr_2.shift()
// // arr_2.shift()
// // console.log(arr_2) // removes the first element of the array

// console.log(arr_2.includes(9))
// console.log(arr_2.indexOf(8))

// const new_arr = arr_2.join() // datatype of array is converted to string
// console.log(arr_2)
// console.log(new_arr)
// console.log(typeof new_arr)

// console.log("A",arr_2)

// const arr_3 = arr_2.slice(1,3)

// console.log("B",arr_3)
// console.log("C",arr_2)


// const arr_4 = arr_2.splice(1,3)  
// console.log("D",arr_2)
// console.log("E",arr_4)


// // Difference between slice and splice is that slice does not manipulate the original array 
// // But splice does changes in the original array


Marvel_heros = ['Ironman','Spriderman','Doctor_Strange','Thor'];
DC_heros = ["Batman","Superman","Flash"];

// Marvel_heros.push(DC_heros)
// console.log(Marvel_heros)
// console.log(Marvel_heros[4][1])

// All_heros = Marvel_heros.concat(DC_heros)
// console.log(All_heros)

// All_new_heros = [...Marvel_heros, ...DC_heros]  // spread out operation
// console.log(All_new_heros)


// another_array = [1,2,3,4,5,[1,7,8],[69,88,22],64]
// const array_1 = another_array.flat(Infinity);
// console.log(array_1);
 

// console.log(Array.isArray("shobhit"));
// console.log(Array.from("shobhit")); // converts into the array
// console.log(Array.from({name:"shobhit"}));   // interesting :- as returns empty array

let Score1 = 100
let Score2 = 200
let Score3 = 500

console.log(Array.of(Score1,Score2,Score3));
