const Employee = require("../lib/Employee") 

test("Can Employee return name of", () =>{
    const testValue = "name" 
    const e = new Employee("name", 1, "test@email.com") 
    expect(e.name).toBe(testValue)
}) 
test("Can Employee return id", () =>{
    const testValue = 1 
    const e = new Employee("name", 1, "test@email.com") 
    expect(e.id).toBe(testValue)
}) 
test("Can Employee return email", () =>{
    const testValue = "test@email.com" 
    const e = new Employee("name", 1, "test@email.com") 
    expect(e.email).toBe(testValue)
})