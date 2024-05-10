const marks = require("./marks");
const student = require("./student");

student.hasMany(marks, {
    foreignKey: 'studentId',
});
marks.belongsTo(student);

module.exports = {
    student: student,
    marks: marks
}