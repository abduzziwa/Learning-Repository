// let sales: number = 123_456_789;
// let course = "TypeScript";
// let isPublished: boolean = true;
// let level;


// ##..............TUPLES................ ###//Mostyly user for strict length arrays usefull when we have only 2 vlues

//  let user: [number, string] = [3, 'klaar']


// ###..........ENUMS............. ###//Used to define a set of named constants

// const enum Peter { Age = 20, Name = 'Peter' }

// let Age = Peter.Age;

// console.log(Age);


//###...........FUNCTIONS.........###
//Properly annotate your functions

// function calculateTax(income: number, taxYear: number = 1): number{
//     if (taxYear < 2022)
//         return income * 0.1;
//     return income * 0.2;
// }

// calculateTax(10_000, 2022)

//####.............OBJECTS...............####
// let empoyee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = { 
//     id: 1, 
//     name: 'Peter',
//     retire: (date: Date) => console.log(date);
// }

// ####.....OBJECTS.....TYPE ALIAS.........####

// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let empoyee: Employee = { 
//     id: 1, 
//     name: 'Peter',
//     retire: (date: Date) => console.log(date)
// }


// ####.........Union Types.........###
// Giving a variable more than one type

// function kgToLbs(weight: number | string): number{
//     // Narrowing
//     if (typeof weight === 'number')
//         return (weight * 2.2);
//     else
//         return parseInt(weight) * 2.2
// }

// kgToLbs(10);
// kgToLbs('20');


// ##..............Intersection...........##

// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textbox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

// ###........Literal Types......#####
// Limit the variables with certain "SPECIFIC"values
// let Quantity: 50 | 100 = 50;

// ###...........NULLABLE TYPES...........
// In situations where we use null / undefined eg:

// function greet(name : string | null | undefined): void {
//     if (name)
//         console.log(name)
//     else
//         console.log('Hola')
// }

// console.log (greet(null))

// ####...........OPTIONAL CHAINING...........
// Since null and undefined are most causes of bug. The optional chaining comes in to solve the validity of the variable

// type Customer = {
//     birthday?: Date
// }

// function getCustomer(id: number): Customer | null | undefined {
//    return id == 0 ? null : { birthday: new Date()}
// }

// let customer = getCustomer(1)
// console.log(customer?.birthday?.getFullYear())



// ###...........Nullish Coaelscing......######
// The two quetion marks(Nullish Coaelscing operator) simply means if speed is not null or undefined use speed values otherwise use 30 
// let speed: number | null = null

// let ride = {
//     speed: speed ?? 30
// }

// ####........Assertions......###
// Sometimes we know more about the variable value that typescript and we need to tell typescript we know what we are doing and we know the values eg:

// let phone = document.getElementById('phoone') as HTMLInputElement

//OR you can use this syntax the most used
// let phone = <HTMLInputElement> document.getElementById('phoone')
// what happends is that i can find the properties of the variable easily


// ###...........UNKNOWN TYPE.........#######
// This is like the any type but this is the most recomended beacuse it forces us to do some narrowing and checking whereas with any our program can crush

// let Name: unknown;


// ###..............The never Type........######

function processEvent(): never {
    while (true) {
        // Do something
    }
}

processEvent()

console.log('hello')