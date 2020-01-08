const inquirer = require('inquirer');
const connection = require("../connect.js");


function updateEmployee(){
    connection.query("SELECT id, first_name, last_name FROM employee", function (err, result) {
        if (err) throw err;
        const emplyeeName = [];
        for (let i = 0; i < result.length; i++) {
            let choices = result[i].id;
            emplyeeName.push(choices);
        }

        inquirer.prompt([
            {
                name: "employee",
                type: "list",
                message: "Please select the employee name you like to update",
                choices: emplyeeName
            },
            {
                name: "newTitle",
                type: "list",
                message: "What is the employee's new role?",
                choices:[
                    "Sales Lead",
                    "SalesPerson",
                    "Lead Engineer" ,
                    "Software Engineer",
                    "Accountant",
                    "Legal Team Lead",
                    "Lawyer",
                    "Lead Engineer"
                ]
            }
        ])
        .then(async function(answer) {
            let employeeName = answer.employee;
            if(answer.newTitle === "Sales Lead"){
                let roleID = 1;
            }else  if(answer.newTitle === "SalesPerson"){
                let roleID = 2;
            }else if(answer.newTitle === "Lead Engineer"){
                let roleID = 3;
            }else if(answer.newTitle === "Software Engineer"){
                let roleID = 4;
            }else if(answer.newTitle === "Accountant"){
                let roleID = 5;
            }else if(answer.newTitle === "Legal Team Lead"){
                let roleID = 6;
            }else if(answer.newTitle === "Lawyer"){
                let roleID = 7;
            }else if(answer.newTitle === "Lead Engineer"){
                let roleID = 8;
            }
            connection.query(`UPDATE employee SET role_id = "${roleID}" WHERE id = "${employeeName}"`, function(err, res) {
                if (err) throw err;

                console.log(res.affectedRows + "  Record UPDATED");
            })
        })
    })
}

module.exports = updateEmployee;