function Employee(name)
  {
      this.name=name;
  }
  console.log(Employee);
  console.log(Employee.prototype);
Employee.prototype.details=function(){
    console.log("My name is "+this.name);
}
var emp=new Employee("Sumit Joshi");
emp.details();