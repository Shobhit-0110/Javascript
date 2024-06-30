// Singleton  -- created by constructors


// Object Literals

const mySym = Symbol("Key1")   // Symbol 

const User = {
        "name": "Shobhit",                // by default key is considered string
        [mySym] : "Key1",
        age : 2,
        location : "pune",
        email : "shobhitvarshney0110@gmail.com",
        LoginDays : ["Monday","thursday"]

}
// console.log(User.email)
// console.log(User["email"])
// console.log(User[mySym])
// console.log(typeof mySym)


// User.email = "shobhitgupta0110@gmail.com";
// Object.freeze(User);                         // Object gets freeze and no changes are applied after this in the object
// User.age = 78 
// console.log(User);

// User.greetings = function(){
//     console.log(`Hello User `);
// }

// User.greetingsTwo = function(){
//     console.log(`Hello User, ${this.name} `);
// }
// console.log(User.greetings);
// console.log(User.greetings());
// console.log(User.greetingsTwo());


// *************************************Singleton objects ***************************//

const UserDetails = new Object()
            // or//
// const UserDetails = {}  

UserDetails.id = "123abc"
UserDetails.age = 23
UserDetails.isLoggedIn = false

// console.log(UserDetails)

//  nested Objects


const UserDetailsNew = {
    email:"abc@gmail.com",
        FullName:{
                UserFullName:{
                    FirstName : "Shobhit",
                    LastName : "Gupta"
                }
        }
}

// console.log(UserDetailsNew)
// console.log(UserDetailsNew.FullName.UserFullName.LastName)


const Obj1 = {1:"a", 2:"b"}
const Obj2 = {3:"c", 4:"d"}
const Obj3 = {5:"e", 6:"f"}

const Obj4 = Object.assign({},Obj1,Obj2,Obj3)
//      or            //

const Obj5 = {... Obj1,...Obj2,...Obj3}
// console.log(Obj5)


const array = [
    {
        id: 1,
        name:"Shobhit"
    },
    {
        id: 2,
        name:"Mohit"
    },
    {
        id: 3,
        name:"Gaurav"
    }
]
// console.log(array[2]);
// array[2].name = "raj"
// console.log(array[2]);
 

// console.log(UserDetails)

// console.log(Object.keys(UserDetails));
// console.log(Object.values(UserDetails));
// console.log(Object.entries(UserDetails));

// console.log(UserDetails.hasOwnProperty("age"));


//************************   Destructuring of Objects ********************/

const Course = {
    CourseId : 1001,
    CourseInstructor : "Shobhit",
    CourseCost : 4999
}

const {CourseInstructor : Instructor} = Course

console.log(Instructor);