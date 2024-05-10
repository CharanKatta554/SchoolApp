const { student, marks } = require("../model/index")

exports.create = (req, res) => {
  const studentData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    class: req.body.class,
    age: req.body.age,
    homeTown: req.body.homeTown,
    pincode: req.body.pincode
  };


  student.create(studentData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student."
      });
    });
};


exports.findAll = (req, res) => {
  student.findAll({
    include: [{
      model: marks
    }]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Students."
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  student.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Student with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  student.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Student with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Student with id=" + id
      });
    });
};
