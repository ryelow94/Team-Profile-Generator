const Employee = require("./Employee") 

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
    super(name, id, email,) 
    this.gitHub = gitHub
    }
 

returnRole() {
    return "Engineer"
}  
returnGithub() {
    return this.gitHub
} 
returnEmail() {
    return this.email
}
} 

module.exports = Engineer