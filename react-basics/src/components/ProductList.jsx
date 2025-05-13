

const ProductList = () => {

    const products = [
        {id : 1, name: "earpods", price:899},
        {id : 2, name: "headphones", price:799},
        {id : 3, name: "computer", price:899},
    ];
  return (
    <div>
        {products.map(p => (
            <div key = {p.id}>
                <h1>Name : {p.name}</h1>
                <h1>price : {p.price}</h1>
            </div>
        ))}
    </div>
  )
}

export default ProductList