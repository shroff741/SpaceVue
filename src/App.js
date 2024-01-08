import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/login/LogIn";
import PageNotFound from "./PageNotFound";
import { AuthProvider } from "./contexts/auth";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
