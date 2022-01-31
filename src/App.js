import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./Home";
import Next from "./Next";



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/next" element={<Next/>}/>
      
      <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
