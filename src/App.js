import './App.css';
import Employee from './component/Employee';

function App() {

  const showEmployee = true;

  return (
    <div className="App">
      <header className="App-header">
        {showEmployee ?  
        <>
          <Employee name="Mohammed" role="Intern"/>
          <Employee name="Rifadh" role="Software Engineer"/>
          <Employee name="Rijan" role="CEO"/>
          <Employee name="Rijan" />
        </>
        :
          <p>You cannot see me.</p>
      }
      </header>
    </div>
  );
}

export default App;
