import './index.css';
import Employee from './component/Employee'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import AddEmployee from './component/AddEmployee';

function App() {

  const showEmployee = true;
  const [role, setRole] = useState('Developer')
  const [employees, setEmployees] = useState(
    [
      {
        id:1,
        name: 'Rifadh',
        role: 'Software'
      },
      {
        id:2,
        name: 'Bobby',
        role: 'Developer'
      },
      {
        id:3,
        name: 'Cane',
        role: 'Software'
      },
      {
        id:4,
        name: 'Steve',
        role: 'Developer'
      },
      {
        id:5,
        name: 'Marvel',
        role: 'Software'
      },
      {
        id:6,
        name: 'Captain',
        role: 'Developer'
      }
    ]
  )

    function updateEmployee(id, newName, newRole){
      const updatedEmployee = employees.map((employee) => {
        if (id === employee.id){
          return {...employee, name: newName, role:newRole}
        }

        return employee;
      })
      setEmployees(updatedEmployee)
    }

    function NewEmployee(name, role) {
      newEmployee = {
        id: uuidv4(),
        name: name,
        role: role
      };
      setEmployees([...employees, newEmployee]);
    }

  return (
    <div className="App">
        {showEmployee ?  (
        <>
        <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
          />
          
        <div className="flex flex-wrap justify-center">

          {employees.map((employee) => {
            console.log(employee);
            return(
            <Employee 
            key={employee.id} 
            id={employee.id}
            name={employee.name} 
            role={employee.role}
            updateEmployee={updateEmployee} />
            );
          })}
        </div>
        <AddEmployee newEmployee={newEmployee} />
        </>
        ):(
          <p>You cannot see me.</p>
          )}
    </div>
  );
}

export default App;
