import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { AppContextProvider } from "./Context/AppContext";
import Restaurant from "./Pages/Restaurant";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/restaurant/:id" exact element={<Restaurant />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
