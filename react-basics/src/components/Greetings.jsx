// import React from 'react'

const Greetings = ({timeOfDay}) => {
return timeOfDay === "mrng" ? (<h1>goodmrng</h1>) : (<h1>good afternoon</h1>)
}

export default Greetings