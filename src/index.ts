import express,{Application} from 'express';


const PORT =3000;
// crete instance of server
const app:Application =express()


// add routing for /path
app.get('/',(req,res)=>{
    res.json({
        message:"Hello World",
    });})

// start express server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})




export default app;