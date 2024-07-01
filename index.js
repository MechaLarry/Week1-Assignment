        function calculateGrade() {
            var marks = prompt("Enter student marks (0-100):");

            // Validate input
            if (marks === null || marks === "" || isNaN(marks) || marks < 0 || marks > 100) {
                alert("Please enter a valid number between 0 and 100.");
                return;
            }

            marks = Number(marks);
            var grade;

            if (marks > 79) {
                grade = 'A';
            } else if (marks >= 60) {
                grade = 'B';
            } else if (marks >= 50) {
                grade = 'C';
            } else if (marks >= 40) {
                grade = 'D';
            } else if (marks >= 39) {
                grade = 'E';
            }
            else 
            grade ='Failed';
        
            document.getElementById("result of grade").innerText = "The grade is: " + grade;
        }
    
        function calculateSpeed() {
            var speed = prompt("Enter the speed of the car:");
    
            // Validate input
            if (speed === null || speed === "" || isNaN(speed) || speed < 0) {
                alert("Please enter a valid speed.");
                return;
            }
    
            speed = Number(speed);
            const speedLimit = 70;
            const kmPerPoint = 5;
    
            if (speed < speedLimit) {
                document.getElementById("result of speed").innerText = "Ok";
            } else {
                var points = Math.floor((speed - speedLimit) / kmPerPoint);
                if (points > 12) {
                    document.getElementById("result of speed").innerText = "License suspended";
                } else {
                    document.getElementById("result of speed").innerText = "Points: " + points;
                }
            }
        }
    
        function calculateNetSalary() {
            var basicSalary = prompt("Enter your basic salary:");
            var benefits = prompt("Enter your benefits:");

            // Validate input
            if (basicSalary === null || basicSalary === "" || isNaN(basicSalary) || basicSalary < 0 ||
                benefits === null || benefits === "" || isNaN(benefits) || benefits < 0) {
                alert("Please enter valid numbers for salary and benefits.");
                return;
            }

            basicSalary = Number(basicSalary);
            benefits = Number(benefits);
            var grossSalary = basicSalary + benefits;

            // PAYE (Tax) calculation
            var payee;
            if (grossSalary <= 24000) {
                payee = grossSalary * 0.1;
            } else if (grossSalary <= 32333) {
                payee = 2400 + (grossSalary - 24000) * 0.25;
            } else {
                payee = 2400 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3;
            }

            // NHIF deduction (simplified example, real rates vary)
            var nhif;
            if (grossSalary <= 5999) nhif = 150;
            else if (grossSalary <= 7999) nhif = 300;
            else if (grossSalary <= 11999) nhif = 400;
            else if (grossSalary <= 14999) nhif = 500;
            else if (grossSalary <= 19999) nhif = 600;
            else if (grossSalary <= 24999) nhif = 750;
            else if (grossSalary <= 29999) nhif = 850;
            else if (grossSalary <= 34999) nhif = 900;
            else if (grossSalary <= 39999) nhif = 950;
            else if (grossSalary <= 44999) nhif = 1000;
            else if (grossSalary <= 49999) nhif = 1100;
            else if (grossSalary <= 59999) nhif = 1200;
            else if (grossSalary <= 69999) nhif = 1300;
            else if (grossSalary <= 79999) nhif = 1400;
            else if (grossSalary <= 89999) nhif = 1500;
            else if (grossSalary <= 99999) nhif = 1600;
            else nhif = 1700;

            // NSSF deduction
            var nssf = Math.min(grossSalary * 0.06, 1080); // Assuming 1080 KSh is the maximum NSSF deduction

            // Net Salary calculation
            var netSalary = grossSalary - payee - nhif - nssf;

            // Display results
            document.getElementById("result").innerText = 
                "Gross Salary: " + grossSalary.toFixed(2) + "\n" +
                "PAYE (Tax): " + payee.toFixed(2) + "\n" +
                "NHIF Deduction: " + nhif.toFixed(2) + "\n" +
                "NSSF Deduction: " + nssf.toFixed(2) + "\n" +
                "Net Salary: " + netSalary.toFixed(2);
        }