import { useState } from "react";
import employeesJson from "../../data/employees.json";
import { Input } from "../ui/Input";

interface EmployeeDepartment {
  department: string;
  employees: string[];
}

export function EmployeeList() {
  const departmentsEmployees = new Array<EmployeeDepartment>();
  const populateDepartmentEmployees = () => {
    for (const department of Object.keys(employeesJson.departments)) {
      const departmentEmployee: EmployeeDepartment = {
        department,
        employees: [],
      };
      for (const employee of (employeesJson.departments as any)[department]) {
        departmentEmployee.employees.push(employee);
      }
      departmentsEmployees.push(departmentEmployee);
    }
  };
  populateDepartmentEmployees();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDepartments = departmentsEmployees
    .map((dept) => ({
      department: dept.department,
      employees: dept.employees.filter((name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(
      (dept) =>
        dept.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dept.employees.length > 0
    );
  return (
    <main>
      <h2>Employee Directory</h2>
      <Input
        type="text"
        placeholder="Search by department..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded mb-4 w-full"
      />
      <div id="employee-list">
        {filteredDepartments.map((x, i) => (
          <div key={i}>
            <h2>{x.department}</h2>
            <ul>
              <li className="employee">
                {x.employees.map((y, i) => (
                  <div key={i}>{y}</div>
                ))}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
