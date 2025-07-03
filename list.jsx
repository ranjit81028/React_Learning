const List = () => {
    const users = [
        {
            username: "ranjit",
            age: 20,
            location: "kharagpur"
        },
        {
            username: "pranjal",
            age: 20,
            location: "gujrat"
        },
        {
            username: "ronit",
            age: 20,
            location: "delhi"
        }
    ];

    return (
        <>
            {/* Mapping over all the users */}
            {users.map((user) => (
                <ul key={user.username}>
                    <li>{user.username}</li>
                    <li>{user.age}</li>
                    <li>{user.location}</li>
                </ul>
            ))}
        </>
    );
};

export default List;
