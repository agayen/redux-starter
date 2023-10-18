
// immutability in javascript
const person = {
    name: 'Abhijit',
    collage: 'RKMVCC',
    roll_no: 1234,
    address: {
        city: 'Kolkata',
        state: 'West bengal'
    }
} 

const updated = Object.assign({},person, {name: 'Abhijit Gayen', Age: '18'}) // this is for making copy 
updated.address.city = 'Delhi' // here you will se it also update the refernce of address in person.
console.log(updated, person)

const updated_of = {...person, 
    address: {
        ...person.address,
        city: 'Mumbai',
    },
    name: 'Abhijit Gayen', 
    Age: '18'
}

console.log(updated_of,person)
