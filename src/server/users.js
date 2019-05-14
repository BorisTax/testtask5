import {Client} from 'pg';
import options from './options';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function loginUser(user){
    const client = new Client(options);
    client.connect();
    const res=await client.query('SELECT * FROM users')
    let users=res.rows;
    let result={success:false};
    for(let u of users)
      if(user.name===u.name){
            if (bcrypt.compareSync(user.password, u.password)) {
                let token = jwt.sign({name:user.name}, 'secretkey', {expiresIn: 1440})
                result={token,success:true};
                }}
    client.end()
    return result;
}

export async function getUsers(){
  const client = new Client(options);
  client.connect();
  const res=await client.query('SELECT * FROM users')
  let users=res.rows;
  users=users.map(item=>item.name);
  client.end()
  return {users};
}

export async function registerUser(user){
    const client = new Client(options);
    client.connect();
    let res=await client.query('SELECT * FROM users')
    let users=res.rows;
    for(let u of users)
      if(user.name===u.name.trim()) {
        client.end();
        return false;
      }
    const result=await async function(){
      bcrypt.hash(user.password, 10, async function(err, hash) {
        let res=await client.query(`INSERT INTO users VALUES('${user.name}','${hash}')`)
        client.end();
        return true;
        }
      )}()
    return true;
}