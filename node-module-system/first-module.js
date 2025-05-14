// module.exports  => export
// require => import

// module exports is ntg but its exporting from other files and importing is require
// module wrapper is ntg about every module we create in nodejs is wrapped in a function these funcn has parameters like exports imports like require 
function add(a,b)
{
    return a + b
}
function sub(a,b)
{
    return a - b
}
function divide(a,b)
{
    if(b===0)
    {
       throw new Error("divide by 0 is wrong") 
    }
    return a/b
}

module.exports = {
    add,sub,divide
}