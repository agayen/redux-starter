import { produce } from "immer";

let book = {
    name: 'Open çøver book'
}

function publish (book){
    // book.is_publish = true;
    return produce(book, draftBook => {
        draftBook.is_publish = true;
    })
}

const updated_book = publish(book)

console.log(book, updated_book)