// Question 
// 1. what is pure functaion ?
// 3. why pure functaion is very useful ?
// 2. what is high ordered function ?
// 4. why need to use immutable objects and its use cases ?
// 5. how to use immer to immutable objects ?

// redux 
// action in redux
// use of subscribe and unsubcribe
// what is 'getState' , 'dispatch', 'subscribe'

import { bugAdded, bugRemoved, bugResolved } from "./actionCreater";
import store from "./store";

const unsubscribe = store.subscribe(()=>{
    console.log("Store in changed", store.getState())
});

store.dispatch(bugAdded('We can not update with version 4.0+'))

store.dispatch(bugResolved(1))

unsubscribe();

store.dispatch(bugRemoved(1))


console.log(store.getState())