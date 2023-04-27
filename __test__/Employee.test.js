const { Employee, Manager, Engineer, Intern } = require('../Employee');

describe('Employee class', () => {
  it('should create a new Employee instance', () => {
    const employee = new Employee('John Doe', 1234, 'johndoe@example.com');
    expect(employee).toBeInstanceOf(Employee);
  });

  it('should get the name of the Employee', () => {
    const employee = new Employee('John Doe', 1234, 'johndoe@example.com');
    expect(employee.getName()).toEqual('John Doe');
  });

  it('should get the ID of the Employee', () => {
    const employee = new Employee('John Doe', 1234, 'johndoe@example.com');
    expect(employee.getId()).toEqual(1234);
  });

  it('should get the email of the Employee', () => {
    const employee = new Employee('John Doe', 1234, 'johndoe@example.com');
    expect(employee.getEmail()).toEqual('johndoe@example.com');
  });

  it('should get the role of the Employee', () => {
    const employee = new Employee('John Doe', 1234, 'johndoe@example.com');
    expect(employee.getRole()).toEqual('Employee');
  });
});

describe('Manager class', () => {
  it('should create a new Manager instance', () => {
    const manager = new Manager('Jane Smith', 5678, 'janesmith@example.com', '123-456-7890');
    expect(manager).toBeInstanceOf(Manager);
  });

  it('should get the office number of the Manager', () => {
    const manager = new Manager('Jane Smith', 5678, 'janesmith@example.com', '123-456-7890');
    expect(manager.getOfficeNumber()).toEqual('123-456-7890');
  });

  it('should override the role of the Employee to Manager', () => {
    const manager = new Manager('Jane Smith', 5678, 'janesmith@example.com', '123-456-7890');
    expect(manager.getRole()).toEqual('Manager');
  });
});

describe('Engineer class', () => {
  it('should create a new Engineer instance', () => {
    const engineer = new Engineer('Bob Johnson', 9012, 'bobjohnson@example.com', 'bobjohnson');
    expect(engineer).toBeInstanceOf(Engineer);
  });

  it('should get the GitHub username of the Engineer', () => {
    const engineer = new Engineer('Bob Johnson', 9012, 'bobjohnson@example.com', 'bobjohnson');
    expect(engineer.getGithub()).toEqual('bobjohnson');
  });

  it('should override the role of the Employee to Engineer', () => {
    const engineer = new Engineer('Bob Johnson', 9012, 'bobjohnson@example.com', 'bobjohnson');
    expect(engineer.getRole()).toEqual('Engineer');
  });
});

describe('Intern class', () => {
  it('should create a new Intern instance', () => {
    const intern = new Intern('Sarah Lee', 3456, 'sarahlee@example.com', 'University of Washington');
    expect(intern).toBeInstanceOf(Intern);
  });

  it('should get the school of the Intern', () => {
    const intern = new Intern('Sarah Lee', 3456, 'sarahlee@example.com', 'University of Washington');
    expect(intern.getSchool()).toEqual('University of Washington');
  });
});
