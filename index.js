// Solution 1

let employee = {
name: "Sam",
streetAddress: "101 Manhattan",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]:value}
}

// Solution 2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key]= value;
   
   return employee;
}

// Solution 3

function deleteFromEmployeeByKey(employee, key){
    const { [key]: omitted, ...newEmployee } = employee;

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}