import { RateLimitInfo } from './../node_modules/express-rate-limit/dist/index.d';
import express,{Application} from 'express';
import morgan from 'morgan' ;
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';



const PORT =3000;
// crete instance of server
const app:Application =express()

// middleware to parse incoming request bodies
app.use(express.json());

// http request logger middleware
app.use(morgan('common'));

//Http security middleware
app.use(helmet());

app.use(rateLimit({
	windowMs:  60*60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    message: 'Too many requests, please try again later.',
}));



// add routing for /path
app.get('/',(req,res)=>{
    res.json({
        message:"Hello World",
    });})


// post request

app.post('/',(req,res)=>{
    res.json({
        message:"Hello World",
        data:req.body,
    });})
// start express server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})




export default app;