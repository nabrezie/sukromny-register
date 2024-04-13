
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./scenes/loginPage";
import PublicHomePage from "./scenes/publicHomePage";
import PrivateHomePage from "./scenes/privateHomePage";
import { useSelector } from 'react-redux'


function App() {

  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicHomePage />} />
        <Route
          path="/privatehome"
          element={isAuth ? <PrivateHomePage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
