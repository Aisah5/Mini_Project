import mysql from "mysql"

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"sosmed_app",
  PORT:"3360"
})

export default db;