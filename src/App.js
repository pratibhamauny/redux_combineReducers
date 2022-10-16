
import './App.css';
import ChangeName from './components/ChangeName';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import Users from './components/Users';

function App() {
  return (
    <div>
    <Counter/>
    <hr/>
    <ChangeName/>
    <hr/>
    <UserForm/>
    <Users/>
    </div>
  );
}

export default App;
