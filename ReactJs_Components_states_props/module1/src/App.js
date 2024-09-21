import './App.css';
import CounterApp from './Programs/CounterApp';
import HelloWorld from './Programs/HelloWorld';
import Login_logout from './Programs/Login_logout';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      <HelloWorld />
      <CounterApp />
      <Login_logout />
    </div>
  );
}

export default App;
