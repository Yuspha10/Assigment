const employeeForm = document.getElementById('employee-form');
const employeeTable = document.querySelector('#employee-table tbody');
let employees = []; // This will act as our data source

// Add employee
employeeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const hireDate = document.getElementById('hire-date').value;
    const jobTitle = document.getElementById('job-title').value;
    const status = document.getElementById('status').value;

    // Validation to ensure unique email and phone number
    if (employees.some(emp => emp.email === email)) {
        alert('Email must be unique!');
        return;
    }

    if (phone && employees.some(emp => emp.phone === phone)) {
        alert('Phone number must be unique!');
        return;
    }

    const newEmployee = { name, email, phone, hireDate, jobTitle, status };
    employees.push(newEmployee);

    renderTable();
    employeeForm.reset();
});

// Function to render employee table
function renderTable() {
    employeeTable.innerHTML = '';
    employees.forEach((employee, index) => {
        const row = `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.phone}</td>
                <td>${employee.hireDate}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.status}</td>
                <td>
                    <button onclick="editEmployee(${index})">Edit</button>
                    <button onclick="deleteEmployee(${index})">Delete</button>
                </td>
            </tr>
        `;
        employeeTable.insertAdjacentHTML('beforeend', row);
    });
}

// Delete employee
function deleteEmployee(index) {
    employees.splice(index, 1);
    renderTable();
}

// Edit employee (functionality to be implemented)
function editEmployee(index) {
    const employee = employees[index];
    document.getElementById('name').value = employee.name;
    document.getElementById('email').value = employee.email;
    document.getElementById('phone').value = employee.phone;
    document.getElementById('hire-date').value = employee.hireDate;
    document.getElementById('job-title').value = employee.jobTitle;
    document.getElementById('status').value = employee.status;

    // Delete the employee to replace with the updated version
    deleteEmployee(index);
}
