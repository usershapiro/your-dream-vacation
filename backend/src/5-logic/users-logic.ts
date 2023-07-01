import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import UserModel from "../4-models/user-model";

async function getAllUsers() :Promise <UserModel[]> {
    const sql = `SELECT * FROM users
     `;
    const users = await dal.execute(sql);
    console.log(users)
    return users;
}

async function addUser (user:UserModel) :Promise <UserModel> {
    const sql=`INSERT INTO users VALUES(?,?,?,?,?,?)`;
    const info: OkPacket = await dal.execute(sql,[user.id,user.firstName,user.lastName,user.email,user.password,user.role]);
    user.id =info.insertId
    return user
}




export default {
    getAllUsers,
    addUser
};
