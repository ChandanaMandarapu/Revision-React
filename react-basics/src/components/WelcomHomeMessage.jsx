
const WelcomHomeMessage = () => {
    const myName = "chandu"

    const multiply = (a,b) => a*b

    const specialClass = "simple-class"

    const greet = () => "hello"

    // const productInfo = () => {
    //     const product = {
    //         name : "laptop",
    //         pricee: 100,
    //         isthere : "instok"
    //         return 
    //         <div>
    //             Name
    //         </div>
    //     }
    // }
  return (
    <div>
        <h1 className="my-class">Hello World</h1>
        <p>Welcome learning js</p>
        <label htmlFor="hey">name</label>
        <p>JSX must return a single parent element</p>
        <p>{2 + 2 }</p>
        <h1>{myName}</h1>
        <p>my friends : {["hina","tina"]}</p>
        <p>2*2 = {multiply(2,9)}</p>
        <p class = {specialClass}>this is special class</p>
        <p>{greet}</p>
        <h1>Name : {product.name}</h1>
    </div>
  )
}

export default WelcomHomeMessage