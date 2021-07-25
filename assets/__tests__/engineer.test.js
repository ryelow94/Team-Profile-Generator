const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");
test("Can set github account via constructor argument", () => {
  const testValue = "gitHub";
  const e = new Engineer("name", 1, "test@email.com", testValue);
  expect(e.gitHub).toBe(testValue);
});
test("returnRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("name", 1, "test@email.com", "Engineer" );
  expect(e.returnRole()).toBe(testValue);
});
test("Can get github account via returnGitHub()", () => {
  const testValue = "gitHub";
  const e = new Engineer("name", 1, "test@email.com", testValue);
  expect(e.returnGithub()).toBe(testValue);
});