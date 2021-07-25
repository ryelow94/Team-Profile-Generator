const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("name", 1, "test@email.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});
test("returnRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("name", 1, "test@email.com", 100);
  expect(e.returnRole()).toBe(testValue);
});
test("Can get office number with returnOfficeNumber()", () => {
  const testValue = 100;
  const e = new Manager("name", 1, "test@email.com", testValue);
  expect(e.returnOfficeNumber()).toBe(testValue);
});