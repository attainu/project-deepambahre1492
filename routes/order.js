const express = require("express")
const router = express.Router()
const OrdersController = require("../controllers/orders")

// Handle incoming GET requests to /orders
router.get("/orders", OrdersController.orders_get_all)

router.post("/orders", OrdersController.orders_create_order)

router.get("/orders/:orderId",  OrdersController.orders_get_order)

router.delete("/orders/:orderId",   OrdersController.orders_delete_order)

module.exports = router