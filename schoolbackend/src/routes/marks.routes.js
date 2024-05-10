module.exports = app => {
    const marks = require("../controllers/marks.controller");

    var router = require("express").Router();

    router.post("/", marks.create);

    router.get("/", marks.findAll);

    router.put("/:id", marks.update);

    router.delete("/:id", marks.delete);

    app.use('/api/marks', router);
};