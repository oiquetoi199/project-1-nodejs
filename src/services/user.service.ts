import getConnection from "../config/db";

const handleCreateUser = async (fullName: String, email: String, address: String) => {
    const connection = await getConnection()
    try {
        const query = 'insert into users (name, email, address) values (?,?,?)';
        const values = [fullName, email, address];

        const [results, field] = await connection.query(query, values);
    } catch (err) {
        console.log(err);

        return [];
    }
}

const getAllUsers = async () => {
    const connection = await getConnection();
    try {
        const [results, field] = await connection.query(
            'select * from users'
        );
        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
}


export { handleCreateUser, getAllUsers };