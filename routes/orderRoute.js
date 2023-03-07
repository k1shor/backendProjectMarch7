const express = require('express')
const { placeOrder, getAllOrders, getOrderDetails, getUserOrders, updateOrder, deleteOrder } = require('../controller/orderController')
const { requireSignin } = require('../controller/userController')
const router = express.Router()

router.post(`/placeorder`, requireSignin, placeOrder)
router.get(`/orderlist`, getAllOrders)
router.get(`/orderdetails/:id`, getOrderDetails)
router.get('/userorders/:userid', getUserOrders)
router.put('/updateorder/:orderid', updateOrder)
router.delete('/deleteOrder/:orderid', deleteOrder)

module.exports = router