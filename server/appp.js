const express = require("express")
const mongodb = require("mongoose")
const product = require('./mongosc')

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

app.listen(4000)
mongodb.connect("mongodb+srv://210701134:R0eSEiT8rCFiMLLp@whyrugay.v4wp0gj.mongodb.net/charan?retryWrites=true&w=majority").then(()=>{console.log("connected");})