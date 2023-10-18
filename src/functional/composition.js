import {compose, pipe } from 'lodash/fp';


// problem statment 
const input = '     Javascript   ';
// const output = "<div>"+input.trim().toLowerCase()+"</div>"


const trim = str => str.trim();
const lowerCase = str => str.toLowerCase();

const wraperSpan = str => `<span>${str}</span>`;
const wraperDiv = str => `<div>${str}</div>`;

const wrap = type => str => `<${type}>${str}</${type}>`;

//usually output
const output_1 = wraperDiv(lowerCase(trim(input)))

// using functionally programming language
const tranform = compose(wraperDiv, lowerCase, trim)
const output_2 = tranform(input)

const tranform_pipe = pipe(trim, lowerCase, wraperDiv)
const output_3 = tranform_pipe(input)

const tranform_pipe_1 = pipe(trim, lowerCase, wrap('div'))
console.log(tranform_pipe_1(input))
