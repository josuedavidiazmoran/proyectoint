import { Pool } from 'pg'

 export const pool = new Pool({
     host:'ec2-3-224-125-117.compute-1.amazonaws.com',
     user:'rzozczxbrbpikux',
     password:'caaab1aae8b8b122d7c2900da68e8c52de3f8a3d651480436c53026224b4b51a',
     database: 'dfeg1qoqrhegr2',
     port:5432,
     ssl:{rejectUnauthorized:false}
 });