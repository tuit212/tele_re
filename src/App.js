import { Routes , Route } from "react-router-dom";
import "./App.scss"

import Left from "./components/Left/Left";
import Center from "./components/Center/Center";


function App() {
  return (
    <div className="App">
    
       {/* left */}
       <Left/>

       {/* center */}
       <Routes>
          <Route path="/" element={<Center/>}/>
       </Routes>


       {/* right */}
    </div>
  );
}

export default App;
