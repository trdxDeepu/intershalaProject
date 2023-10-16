import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import SeachBar2 from "./ui/SearchBAr2";
import Error from "./ui/Error";
import Details from "./pages/Details";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/details/:userId" element={<Details />} />
        <Route path="/search" element={<SeachBar2/>} />
        <Route
          path="/error"
          element={<Error errorMessage="404 🙂 Page Not Found" />}
        />
         <Route path="/user/:userId" component={UserDetails} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
