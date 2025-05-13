const List = () => {

    const users = [
        { id : 1 , name: "anika",age:21},
        { id : 2 , name: "kanika",age:22},
        { id : 3 , name: "parnika",age:23}
    ];
  return (
    <div>
        {users.map((user) => (
            <div key = {user.id}>
                <h1>Name : {user.name}</h1>
                <h1>Age : {user.age}</h1>
            </div>
            ))}
    </div>
  )
}

export default List