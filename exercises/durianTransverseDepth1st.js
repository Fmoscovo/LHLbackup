class Employee {

  class Node {

    constructor(data) {
      this.data = data;
      this.parent = null;
      this.children = [];
    }
  
    depthFirstTraversal() {
  
      console.log(this); // 1
  
      for (const childNode of this.children) {
        childNode.depthFirstTraversal(); // 2
      }
    }
  }

  employeesThatMakeOver(amount) {

    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }// Use depth first traversal to calculate the total employees
  get totalEmployees() {

        
    
    

    return totalEmployees;

  }

}

// ada.totalEmployees // Returns the total number of employees in the entire company.
// craig.totalEmployees // Returns the total number of employees working in software development.