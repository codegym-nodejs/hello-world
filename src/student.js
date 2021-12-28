
function getStudentName(){
  let student = {
    name: "Le Van Thinh",
    class: 123,
  };  
  return student.name;
}

module.exports = {
  getStudentName: getStudentName
}