    const createTeam = team =>{
    const createManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.returnName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.returnRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.returnId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.returnEmail()}">${manager.returnEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.returnOfficeNumber()}</li>
            </ul>
        </div>
    </div>
       `
    } 
    const createEngineer = engineer => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.returnName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.returnRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.returnId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.returnEmail()}">${engineer.returnEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href= "${engineer.returnGithub()}">${engineer.returnGithub()}<a/></li>
            </ul>
        </div>
    </div>
       `
    }
    const createIntern = intern => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.returnName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.returnRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.returnId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.returnEmail()}">${intern.returnEmail()}</a></li>
                <li class="list-group-item">School: ${intern.returnSchool()}</li>
            </ul>
        </div>
    </div>
       `
    } 
    const htmlElements = [] 
    htmlElements.push(team.filter(employee=>employee.returnRole() === "Manager").map(manager => createManager(manager))) 
    htmlElements.push(team.filter(employee=>employee.returnRole() === "Engineer").map(engineer => createEngineer(engineer)).join("")) 
    htmlElements.push(team.filter(employee=>employee.returnRole() === "Intern").map(intern => createIntern(intern)).join("")) 
    return htmlElements.join("")
 }

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team-Profile-Generator</title> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> 
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    ${createTeam(team)}
</body>
</html>` 
}
