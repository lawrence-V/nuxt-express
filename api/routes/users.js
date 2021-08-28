const { Router} = require('express')

const router = Router()


//  Mock Users

const users = [
    {name: 'Lawrence'},
    {name: 'poya'},
    {name: 'Ban'},
]

//  Get users listing
router.get('/users', (req,res,next) => {
    res.json(users)
})

// Get user by Id
router.get('/users/:id', (req,res,next) => {
    const id = parseInt(req.params.id)
    if(id >= 0 && id < users.length){
        res.json(users[id])
    }else {
        res.sendStatus(404)
    }
})


module.exports = router