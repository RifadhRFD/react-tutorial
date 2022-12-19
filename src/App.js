import './index.css';
import Employee from './component/Employee'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

function App() {

  const showEmployee = true;
  const [role, setRole] = useState('Developer')
  const [employees, setEmployees] = useState(
    [
      {
        name: 'Rifadh',
        role: 'Software'
      },
      {
        name: 'Bobby',
        role: 'Developer'
      },
      {
        name: 'Cane',
        role: 'Software'
      },
      {
        name: 'Steve',
        role: 'Developer'
      },
      {
        name: 'Marvel',
        role: 'Software'
      },
      {
        name: 'Captain',
        role: 'Developer'
      },
      {
        name: 'Robert',
        role: 'Software'
      },
      {
        name: 'Lilly',
        role: 'Developer'
      }
    ]
  )

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
            <Employee key={uuidv4()} name={employee.name} role={employee.role} />
            );
          })}
        </div>
        </>
        ):(
          <p>You cannot see me.</p>
          )}
    </div>
  );
}

export default App;
