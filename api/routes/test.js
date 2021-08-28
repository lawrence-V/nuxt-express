const { Router } = require('express')

const router = Router()

// Test Router 
router.use('/test', (req, res) => {
    res.end('Test Api')
})

module.exports = router