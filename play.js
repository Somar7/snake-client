const { connect } = require('./client')
const { setupInput } = require('./input')

console.log("Connecting ...");
let resultFromClientJS = connect();

setupInput(resultFromClientJS);
