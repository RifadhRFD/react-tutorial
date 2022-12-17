import './App.css';
import Employee from './component/Employee';

function App() {

  const showEmployee = true;

  return (
    <div className="App">
      <header className="App-header">
        {showEmployee ?  
        <>
          <Employee />
          <Employee />
          <Employee />
        </>
        :
          <p>You cannot see me.</p>
      }
      </header>
    </div>
  );
}

export default App;
