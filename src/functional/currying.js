function add(a,b){
    return a+b;
}

function added(b){
    return function(a){
        return a+b;
    }
}

const added_ad = a => b => a+b; // (a,b) => a + b

const add_1 = add(1)
console.log(add_1(12)) // 13

console.log(added(1)(12))//13