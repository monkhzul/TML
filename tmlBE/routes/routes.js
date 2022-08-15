
module.exports = app => {
    const tml = require("../controller/UserController");
    var router = require("express").Router();

    router.get("/", tml.getInfo);
    router.get("/customer", tml.getCustomer);

    app.use('/api/tml', router);
};
