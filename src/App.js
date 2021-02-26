import './App.css';
import Search from "./pages/search"
import API from '../src/utils/API';
import EmployeeTable from '../src/components/Table/index';
import SearchForm from "../src/components/SearchForm/index";

function App() {
  return (
    <div className="App">
      <Search />
    
    </div>
  );
}

export default App;
