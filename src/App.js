import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { AppContextProvider } from "./Context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
