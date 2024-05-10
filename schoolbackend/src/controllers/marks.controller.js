const { marks } = require("../model/index")


exports.create = (req, res) => {
    const marksData = {
        studentId: req.body.studentId,
        marks: req.body.marks,
        subject: req.body.subject,
    };

    marks.create(marksData)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating Marks."
            });
        });
};


exports.findAll = (req, res) => {
    marks.findAll({
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Marks."
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id;

    marks.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Marks was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Marks with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Marks with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    marks.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Marks was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Marks with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Marks with id=" + id
            });
        });
};
