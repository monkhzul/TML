
module.exports = app => {
    const tml = require("../controller/UserController");
    var router = require("express").Router();

    router.get("/", tml.getCustomer);

    app.use('/api/tml', router);
};
