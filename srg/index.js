

import express from 'express';
import { json, urlencoded } from 'body-parser';

const app = express();

app.use(json());
app.use(urlencoded({ extended:false }));

app.get('/',(req,res)=>{
    res.send('ok')
})

app.listen(3000);