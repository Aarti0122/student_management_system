let students = [];

const studentName = document.getElementById("studentName");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("studentTableBody");

addBtn.addEventListener("click", function () {

    let name = studentName.value.trim();

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    let student = {
        id: Date.now(),
        name: name
    };

    students.push(student);

    displayStudents();

    studentName.value = "";
});

function displayStudents() {

    tableBody.innerHTML = "";

    students.forEach((student, index) => {

        tableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>
                <button class="delete-btn" onclick="deleteStudent(${student.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    displayStudents();
}