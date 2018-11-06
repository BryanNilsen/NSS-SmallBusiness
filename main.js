let employeeEl = document.querySelector(".employee")


// refactored code into one function >> execute using getData("computers")
function getData(dataType) {
  return fetch(`http://localhost:4000/${dataType}`)
    .then(response => response.json())
}

let employees = getData("employees")
let departments = getData("departments")
let computers = getData("computers")

Promise.all([employees, departments, computers]).then((alldata) => {
  alldata[0].forEach((currentEmployee) => {
    let employeeContainer = document.createElement("div");
    employeeContainer.classList.add("container");
    let employeeNameEl = document.createElement("h1");
    let employeeDeptEl = document.createElement("p");
    let employeeCompEl = document.createElement("p");
    let profileImage = `<image src="${currentEmployee.image_url}" width="200px">`

    alldata[1].forEach((dept) => {
      if(currentEmployee.department_id === dept.id){
        employeeDeptEl.innerHTML = `<strong>Department:</strong> ${dept.name}`;
      }
    })

    alldata[2].forEach((comp) => {
      if(currentEmployee.computer_id === comp.id){
        employeeCompEl.innerHTML = `<strong>Computer:</strong> ${comp.type}<br><strong>OS:</strong> ${comp.os}`;
      }
    })

    employeeNameEl.innerHTML = `${profileImage}<br>${currentEmployee.name}`;
    employeeContainer.appendChild(employeeNameEl);
    employeeContainer.appendChild(employeeDeptEl);
    employeeContainer.appendChild(employeeCompEl);

    employeeEl.appendChild(employeeContainer);
  })
})
