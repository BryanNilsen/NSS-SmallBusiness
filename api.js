// need fetch from json dbase

let officeData = {

  getEmployees() {
    return fetch("http://localhost:8088/employees")
      .then(response => response.json())
  },

  getDepartments() {
    return fetch("http://localhost:8088/departments")
      .then(response => response.json())
  },

  getComputers() {
    return fetch("http://localhost:8088/computers")
      .then(response => response.json())
  },

}


// or

getData(objects){
  return fetch(`http://localhost:8088/${objects}`)
  .then(response => response.json())
}