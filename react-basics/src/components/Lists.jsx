// if u want to remove update or anything first u need to provide the unique label to that array so using keys to iterate over through each element 

const Lists = () => {
    const numbers = [1, 2, 3, 45, 3];

    const userInfo = [
        {
            username: "chandu",
            email: "test@gmail.com",
            location: "INDIA"
        },
        {
            username: "laya",
            email: "test@gmail.com",
            location: "kochi"
        },
        {
            username: "navi",
            email: "test@gmail.com",
            location: "Bangalore"
        }
    ];

    const places = [
        {
            state: "telangana",
            famous: "food"
        },
        {
            state: "karnataka",
            famous: "music"
        },
        {
            state: "tamilnadu",
            famous: "temples"
        },
    ];

    return (
        <div>
            {numbers.map((number, index) => (
                <ul key={index}>
                    <li>{number}</li>
                </ul>
            ))}

            {userInfo.map((user, index) => (
                <ul key={user.username}> {/* using username as key */}
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                </ul>
            ))}

        </div>
    );
};

export default Lists;
