class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;
    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }
    return numberOfPeople;
  }
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
}

const findBoss = (employee) => {
  return employee.boss;
};

const ada = new Employee("Ada", "CEO", 3000000.0); // Root node
const craig = new Employee("Craig", "VP Software", 1000000); // Child node responsible for software and subordinates leaf nodes "Simone" and "Ali"
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000); // Responsible for design and no subordinates
const angela = new Employee("Angela", "VP Retail", 1000000); // Responsible for retail and subordinates leaf nodes "Karla"
const phil = new Employee("Phil", "VP Marketing", 1000000); // Child node responsible for marketing and subordinates leaf nodes "Florida", "David", "Brian"
const simone = new Employee("Simone", "Software Engineer", 100000);
const ali = new Employee("Ali", "Software Engineer", 100000);
const florida = new Employee("Florida", "Marketing Associate", 75000);
const david = new Employee("David", "Marketing Associate", 75000);
const brian = new Employee("Brian", "Marketing Associate", 75000);
const karla = new Employee("Karla", "Retail Specialist", 75000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

console.log(ada.numberOfPeopleToCEO);
console.log(craig.boss);
console.log(craig.numberOfSubordinates);
console.log(craig.numberOfPeopleToCEO);
