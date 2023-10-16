import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";

import Error from "./ui/Error";
import Details from "./pages/Details";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/details/:userId" element={<Details />} />
       
        <Route
          path="/error"
          element={<Error errorMessage="404 🙂 Page Not Found" />}
        />
         
      </Routes>
    </BrowserRouter>
  );
};

export default App;
