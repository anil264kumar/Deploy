const dotenv = require('dotenv')
const express = require("express");
const cors = require('cors')
const app = express();


dotenv.config()
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors())


app.get('/sum',(req,res)=>{
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  const sum = a + b;
  res.send(sum)

})

app.get("/interest", (req, res) => {
  const principal = parseFloat(req.query.p);
  const rate = parseFloat(req.query.r);
  const time = parseFloat(req.query.t);
  const interest = (principal * rate * time) / 100;

  const totalAmt = principal + interest;

  res.json({
    TotalAmount: totalAmt,
    SimpleInterest: interest,
  });
});

app.listen(PORT,(err)=>{
      if(err) 
        console.log("ERR!!",err.message)
      console.log(`Listening on Port ${PORT}`)
    
}
);
