const express = require("express")
const mongodb = require("mongoose")
const product = require('./mongosc')
const user = require('./user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

app = express()
app.use(express.json())

app.get("/api",(req,res)=>{
    res.json([{name:'charan',age:69}])
})

app.post("/api/store",async(req,res)=>{
    try{
        const a = await product.create(req.body);
        res.send(a)
    } catch(err){
        res.status(500).send(err)
    }
})

app.get("/api/mongo",async(req,res)=>{
    try{
        res.send(await product.find({}))
    } catch(err){
        res.send(err)
    }
})
//getting data using id
app.get("/api/mongo/:id", async(req,res)=>{
    try{
        const {id} = req.params
        res.send(await product.findById(id))
    }catch(err){
        res.send(err)
    }
})

//getting data using id for sharing purpose
app.get("/api/share/:id", async(req,res)=>{
    try{
        const {id} = req.params
        res.send(await product.findById(id))
    }catch(err){
        res.send(err)
    }
})

///updating data using id
app.put("/api/neww/:id",async(req,res)=>{
    try{
        const {id} = req.params
        res.send(await product.findByIdAndUpdate(id,req.body))
    }
    catch{
        res.status(500).send("eroor")
    }
})

//delete using id
app.delete("/api/del/:id", async(req,res)=>{
    try{
        const {id} = req.params
        const aa = await product.findByIdAndDelete(id);
        if(!aa){
            res.status(404).send({"message":`product not found idd ${id}`})
        }else{
            res.send(aa)
        }
    }catch{
        res.status(500).send("error")
    }
})

//<!----------------------------------------------something new------------------------------!>

////auth diff methodd
app.post('/api/reg', (req,res)=>{
    const {password,name,email} = req.body;
    bcrypt.hash(password,10,function(err,hashedPass){
        if(err){
            res.json({error:err})
        }
        let userr = new user({
            name: name,
            email: email,
            password: hashedPass
        })
        user.create(userr)
        .then(user =>{
            res.json({message:"user added"})
        })
        .catch(error=>{
            res.json({message:"error boiii"})
        })
    })
})
app.post('/api/login',(req,res)=>{
    const {email, password} = req.body
    user.findOne({email:email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err,result){
                if(err){
                    res.json({error:err})
                }
                if(result){
                    let token = jwt.sign({name: user.name}, "someseckey")
                    res.json({
                        message:"login success",
                        token
                    })
                }else{
                    res.json({
                        message:"password wrong"
                    })
                }
            })
        }else{
            res.json({
                message:"no user found"
            })
        }
    })
})
const auth  = (req,res,next)=>{
    try {
        const token = req.headers.autho.split(" ")[1]
        const decode = jwt.verify(token,'someseckey',(err,users)=>{
            req.users = users
            next()
        })
    }
    catch(err){
        res.json({message:"auth failed"})
        // res.redirect('/api/')
    }
}
app.post("/api/gett",async(req,res)=>{
    try{
        const {user} = req.body
        res.send(await product.find({"user":user}))
    } catch(err){
        res.send(err)
    }
})
app.get("/api/gett/:id",async(req,res)=>{
    try{
        const {id} = req.params
        res.send(await product.findById(id))
    } catch(err){
        res.send(err)
    }
})

app.post("/api/new/store",async(req,res)=>{
    try{
        const a = await product.create(req.body);
        res.send(a)
    } catch(err){
        res.status(500).send(err)
    }
})

//dumb test
app.get("/api/dumb",async(req,res)=>{
    try{
        // const {name} = req.body
        res.send(await product.find({"users":'new'}))
    } catch(err){
        res.send(err)
    }
})
// db.scores.find(
//     { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
//  )



app.listen(4000)
mongodb.connect("mongodb+srv://210701134:R0eSEiT8rCFiMLLp@whyrugay.v4wp0gj.mongodb.net/charan?retryWrites=true&w=majority").then(()=>{console.log("connected");})