const { Router } = require("express");
const middleware = require("../middleware");
const jwt = require('jsonwebtoken')
const { Admin,food, Food } = require("../db");
const router = Router();
const {jwtSecret} = require('../config')

router.post('/signup', async(req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    const admin = await Admin.find({username});

    let x = admin.find(x => x.username = username)
    
    if (typeof(x) == 'undefined'){
        Admin.create({
            username,
            password
        }).then (function (){
            let token = jwt.sign({username},jwtSecret)
            res.json({msg:'Admin created Successfully',token})
        })
        
    }else{
        res.json({msg : 'Admin already exist'})
}
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    var username = req.body.username;
    var password = req.body.password;
    let admin = await Admin.find({
        username : req.body.username,
        password : req.body.password
    })

    let x = admin.find(x => x.username = username)
    
    if (typeof(x) == "object"){
        let token = jwt.sign({username},jwtSecret)
            res.json({msg:'Login successfully',token})
    }
    else{
        res.status(403).json({msg : 'Incorrect Email or password'})
    }
    
});

router.post('/addmenu',middleware,async (req, res) => {
    // Implement course creation logic
    let title = req.body.title;
    let imageLink = req.body.imageLink;
    let price = req.body.price;

    const newFood = await Food.create({
        title,
        imageLink,
        price
    })
    res.json({msg:'Item created successfully',FoodId : newFood._id})
});

router.get('/:id', async(req,res) => {
    console.log('hi')
    const id = req.params.id;
    const food = await Food.find({_id : id}) 
    res.json(food)
})

router.get('/menu/all', async(req, res) => {
   const response = await Food.find({})
    res.json({menu : response})
});

router.post('/',async(req,res) => {
    const id = req.body.id
    const result = await Food.findByIdAndUpdate({_id:id}, {ordered:true})
    res.json(result)
})

router.get('/all/ordered',async(req,res)=> {
    const order = await Food.find({ordered:true})
    res.json(order)
})


module.exports = router;