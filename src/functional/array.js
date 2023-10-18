// immutabilty in array 
const arr = [1,2,3,4,5,6]

//adding
const new_arr = [45, ...arr]
const index_of_4 = arr.indexOf(4)
const new_arr_1 = [...arr.slice(0, index_of_4),12, ...arr.slice(index_of_4)]
console.log(new_arr_1)

//removing
const removed = new_arr_1.filter(n => n!=4)
console.log(removed)

//updating
const updated_arr = new_arr_1.map(n => n === 12 ? 21:n )
console.log(updated_arr)