const firstModule = require("./first-module")
console.log(firstModule.add(10,20)) 

try{
    console.log("trying to divide by zero")
    let result = firstModule.divide(0,0)
    console.log(result)
}catch(error){
    console.log("caught an error")
}