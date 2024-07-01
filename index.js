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
        
            document.getElementById("result").innerText = "The grade is: " + grade;
        }
    