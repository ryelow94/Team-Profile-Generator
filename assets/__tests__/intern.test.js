const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
test("Can set school via constructor argument", () => {
  const testValue = "school";
  const e = new Intern("name", 1, "test@email.com", testValue);
  expect(e.school).toBe(testValue);
});
test("returnRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("name", 1, "test@email.com", "Intern");
  expect(e.returnRole()).toBe(testValue);
});
test("Can get school via returnSchool()", () => {
  const testValue = "school";
  const e = new Intern("name", 1, "test@email.com", testValue);
  expect(e.returnSchool()).toBe(testValue);
});