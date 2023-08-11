const employee = {
    name: "Gabriel",
    streetAddress: "123 Mainstreet",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newemployee = {...employee}
    newemployee[key] = value
    return newemployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key, value) {
    const copyOfemployee = {...employee}
    delete copyOfemployee[key]
    return copyOfemployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[ key]
    return employee
}