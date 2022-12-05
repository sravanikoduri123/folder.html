
// arrays//
let shoppinglist=['milk','bread','butter','jam','juice','cream']
console.log(shoppinglist)
// to get specific value from shopping list fetch with index numbers
console.log(shoppinglist[1])
// to replace something in already existing array//
shoppinglist[0]='rice'
console.log(shoppinglist)
//to add new value at end in already existing array use push
shoppinglist.push('ghee')
console.log(shoppinglist)
//to remove some value from the end
shoppinglist.pop();
console.log(shoppinglist)
//to delete value from any specific index
//splics(index valu, no.of items to delete)
shoppinglist.splice(1,1)
console.log(shoppinglist) 
//with using splice we can add new value in the place where we are deleting something//
shoppinglist.splice(0,1,'other items')
console.log(shoppinglist)

//objects//
//objects are used to represent given value
//example-//
//let user=['sravani', 'sravani@gmail.com', '8466959472', 'hyderabad']// this is array lets add object to this array

let user={
    name:'sravani',
    email:'sravani@gmail.com',
    mobile:'8466959472',
    location:'hyderabad'
}
console.log(user)
//to get specific value// here we are trying to get value of name
console.log(user.name)
//to add value to object//
user.pincode='500008'
console.log(user)
//to delete values from object//
delete user.location;
console.log(user)



let numbers=[1,2,3,4,5]
let totalnumbers=[...numbers,6,7,8,9,0]
//if we want both numbers and totalnumbers at one place// (using spread operator)
console.log(totalnumbers)

//array of objects//
let users=[
    {name:'sravani', mobile:'8466959472', address:'hyderabad'},
    {name:'sirish', mobile:'910959472', address:'hyderabad'},
    {name:'sravani', mobile:'7469959472', address:'hyderabad'}
]
console.log(users)
//if we want specific value from the users//
console.log(users[1])

















