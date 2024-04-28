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
// While this type is not mostly used but you have to know about it in certain cases there si unreachable code and hard to fiind.
// Bur if we know that our function runs contionouslty we can anotate it with never so that we can easily find bugs later before running the the code.

// function processEvent(): never {
//     while (true) {
//         // Do something
//     }
// }

// processEvent()

// console.log('hello')


// ................####### OBJECT ORIENTED PROGRAMMING #####.............

// it is one of the many programming paradigms like (Procedural , Functional, Object-Oriented, Event Driven. Aspect Driven etc.)
// In objext Oriented programming objects are the building blocks of our application (Here multiple objects work together to solve a problem.)

// An objects is a unit that contains some (data (state) + operations (behaviour))
//  For example a person is an oject with data (name , email, etc) also known as properties. And the same person also has operations/behavious like (talk(), dance(), etc) aslo known as methods.

// lets create a class ( a class is basically a blue print of an object)
//  For example the account obbject can have a class with properties like ( id, owner, balance) and methods like( deposit(), withdraw())

// !! In typescritp we also have Access modifiers eg (Public Private and Protected)

// class Account {
//     public readonly id: number; //this is readonly and can not be modified from outside 
//     public owner: string;
//     private _balance: number;
//     public nickname?: string // this is optonal

//     constructor(id: number, owner: string, _balance: number){
//         this.id = id;
//         this.owner = owner;
//         this._balance = _balance;
//     }

//     deposit(amount:number): void {
//         if (amount <= 0)
//             throw new Error('Invalid Amount')
//         this._balance += amount
//     }

//     getBalance(): number{
//         return this._balance
//     }
// }

// let account = new Account(102,'Peter', 0);

//  the other way of how to write a clean code is by using Parameter Properties 

// class Account1 {
//     nickname?: string

//     constructor(
//         public readonly id: number, 
//         public owner: string, 
//         private _balance: number){
       
//     }

//     deposit(amount:number): void {
//         if (amount <= 0)
//             throw new Error('Invalid Amount')
//         this._balance += amount
//     }

//     getBalance(): number{
//         return this._balance
//     }
// }

// ###....Getters and setter....### 

// class Account1 {
//     nickname?: string

//     constructor(
//         public readonly id: number, 
//         public owner: string, 
//         private _balance: number){
       
//     }

//     deposit(amount:number): void {
//         if (amount <= 0)
//             throw new Error('Invalid Amount')
//         this._balance += amount
//     }
//     // the getter looks like this 
//     get balance(): number{
//         return this._balance
//     }
//     // the setter looks like this 
//     set balance(value: number) {
//         if (value < 0)
//             throw new Error('Invalid Value');
//         this._balance = value;
//     }
// }

// let account = new Account1(101, 'Abdul', 0)

// account.balance = 30
// console.log(account.balance)

// Index Signitures
// Basically this help you in assigning key value pairs in a class dynamically 

// class AssigningTicket {
//     [seatNumber: string] : string;
// }

// let seat = new AssigningTicket();
// seat.A1 = 'Mosh';
// seat.B30 = 'Abdul';



///.......###Static Members###.....
// In a situation where we need a single instance of our variable in memory nomatter how mang objects are created. 
// Imagine being an Uber company where you want to see active rides on the appication

// class Ride {
//     private static _activeRides: number = 0;

//     start() {
//         Ride._activeRides++
//     }

//     stop() {
//         Ride._activeRides--
//     }

//     static get activeRides(): number {
//         return Ride._activeRides
//     } 
// }

// let Ride1 = new Ride
// Ride1.start()


// let Ride2 = new Ride
// Ride2.start()

// let Ride3 = new Ride
// Ride3.start()
// Ride3.stop()

// console.log(Ride.activeRides)


// #####......Inheritance.....####

// class Person {
//     constructor (
//         private firstName: string, 
//         public lastName: string
//     ){
//     }

//     get fullName(): string{
//         return this.firstName + ' ' + this.lastName
//     }
// }


// class Student extends Person {
//     constructor(
//         private studentNumber: number, firstName:string , lastName:string
//     ){
//         super(firstName, lastName)
//     }

//     get studentNo():number{
//         return this.studentNumber
//     }
// }

// let student = new Student(1, 'Eddie', 'Maffie')


// ####..........Method Overriding...####
// In tis situation we have inheritade the another object but we want to override the method.

// class Teacher extends Person {
//     override get fullName(): string{
//         return 'Professor'+ ' ' + super.fullName
//     }
// }

// let prof = new Teacher('John', 'Smith')

// console.log(prof.fullName);

// Polymorphims
// Techinically pollymophyism means means one for many
// printPeople([
//     new Person('John', 'Smith'),
//     new Teacher('John', 'Peters'),
//     new Teacher('John', 'Petos'),
//     new Person('John', 'Waldo')
// ])

// function printPeople(people: Person[]){
//     let count: number = 0
//     people.forEach(person => {
//         count++
//         console.log(person.fullName)
//     });
//     console.log('There are '+ count + ' ' + 'people')   
// }

// ...........### Abstract classes ###.........
// This are classes that are created to be extend there are like still being cooked but not ready

// abstract class Shape {
//     constructor(protected color: string){}

//     abstract render(): void
// }

// class Tringle extends Shape {
//     constructor(
//         public radius: number,
//         color: string
//     ){
//         super(color)
//     }

//     override render(): void {
//         console.log('This is a Triangel')
//     }

//     get shapeColor() {
//         return this.color
//     }

// }

// let tri = new Tringle(2,'red')
// console.log( tri.shapeColor);


//###......Interfaces......###
// interfacess are technically like abstruct classes but with know logic or algorithms in them kind. They are techinically type aliases 
// instead of using extends we use implements
// In TypeScript, interfaces and type aliases can be used interchangeably. Both can be used to describe the shape of an object.

// interface Calender {
//     name: string,
//     addEvent(): void,
//     removeEvent(): void
// }

// class GoogleCalender implements Calender {
//     constructor( public name: string){}
//     addEvent(): void {
//         throw new Error("Method not implemented.");
//     }
//     removeEvent(): void {
//         throw new Error("Method not implemented.");
//     }
   
// }

// interface Employee {
//     name: string;
//     salary:number;
//     address:{
//         street: string;
//         city: string;
//         zipCode:number;
//     };
// }

// let employee: Employee = {
//     name:'John Smith',
//     salary:50_000,
//     address:{
//         street:'Flinders st',
//         city:'Melbourne',
//         zipCode:3144
//     }
// };
