module.exports = class ProductsController {
    async getAllProducts(req, res) {
        res.status(200).send("route si sworking fine")
    }
}