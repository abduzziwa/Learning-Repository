// let sales: number = 123_456_789;
// let course = "TypeScript";
// let isPublished: boolean = true;
// let level;


// ..............TUPLES................ //Mostyly user for strict length arrays usefull when we have only 2 vlues

//  let user: [number, string] = [3, 'klaar']


// ..........ENUMS............. //Used to define a set of named constants

// const enum Peter { Age = 20, Name = 'Peter' }

// let Age = Peter.Age;

// console.log(Age);


//...........FUNCTIONS.........
//Properly annotate your functions

// function calculateTax(income: number, taxYear: number = 1): number{
//     if (taxYear < 2022)
//         return income * 0.1;
//     return income * 0.2;
// }

// calculateTax(10_000, 2022)

//.............OBJECTS...............
// let empoyee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = { 
//     id: 1, 
//     name: 'Peter',
//     retire: (date: Date) => console.log(date);
// }

// .....OBJECTS.....TYPE ALIAS.........

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let empoyee: Employee = { 
    id: 1, 
    name: 'Peter',
    retire: (date: Date) => console.log(date);
}
