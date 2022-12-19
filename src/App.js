import './index.css';
import Employee from './component/Employee'
import { useState } from 'react'

function App() {

  const showEmployee = true;
  const [role, setRole] = useState('dev');

  return (
    <div className="App bg-red-300">
      <header className="App-header">
        {showEmployee ?  (
        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value)
            setRole(e.target.value)
          }}
          />

          <Employee name="Mohammed" role="Intern"/>
          <Employee name="Rifadh" role="Software Engineer"/>
          <Employee name="Rijan" role={role}/>
          <Employee name="Rijan" />
        </>
        ):(
          <p>You cannot see me.</p>
          )}
      </header>
    </div>
  );
}

export default App;
