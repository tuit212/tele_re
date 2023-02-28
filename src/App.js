import { Routes , Route } from "react-router-dom";
import "./App.scss"

import Left from "./components/Left/Left";
import Center from "./components/Center/Center";
import Person from "./Pages/Person/Person";
import NatojTalim from "./Pages/NajotTalim/NatojTalim";
import Kanalim from "./Pages/Kanalim/Kanalim";
import Bozor from "./Pages/Bozor/Bozor";
import UnRead from "./Pages/UnRead/UnRead";
import Right from "./components/Right/Right";
import UserPage from "./UserPage/UserPage";


function App() {
  return (
    <div className="App">
    
       {/* left */}
       <Left/>

       {/* center */}
       <Routes>
          <Route path="/" element={<Center/>}>
              <Route path="person/only_212" element={<UserPage/>} />
          </Route>
          <Route path="/shaxsiy" element={<Person/>} />
          <Route path="/najotTa'lim" element={<NatojTalim/>} />
          <Route path="/kanalim" element={<Kanalim/>} />
          <Route path="/bozor" element={<Bozor/>} />
          <Route path="/o'qilmaganlar" element={<UnRead/>} />
          <Route path="/settings" element={<Kanalim/>} />
       </Routes>


       {/* right */}
       <Routes>
          <Route path="/" element={<Right/>} />
          <Route path="person/only_212" element={<UserPage/>} />
       </Routes>
    </div>
  );
}

export default App;
