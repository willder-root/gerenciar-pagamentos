import express,{Request, Response} from 'express';
import TesteConnection from './database';

const app = express();

const port = 9000;

TesteConnection();

app.get('/',(req:Request,res: Response)=>{
    res.send('Hello, world!');
})

app.listen(port,()=>{
    console.log(`Servidor iniciado na porta: ${port}`);
})