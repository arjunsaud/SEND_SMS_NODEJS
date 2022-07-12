import express from 'express'
import twilio from 'twilio'
import bodyParser from 'body-parser'

const sid="" //twilo sid
const token="" //twilo token
const from=123//twilo virtual number
const client=twilio(sid,token)

const PORT=5000;
const app=express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('send')
})

app.post('/send',(req,res)=>{
    const to=req.body.destnum
    const body=req.body.msg
    client.messages
    .create({from,to,body})
    .then(()=>{
        res.send('SMS sent successfylly')
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.listen(PORT,()=>{
    console.log('Server Started...');
})