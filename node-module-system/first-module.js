// module.exports  => export
// require => import

// module exports is ntg but its exporting from other files and importing is require

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