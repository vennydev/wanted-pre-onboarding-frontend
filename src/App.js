import { Route, Routes, Navigate } from 'react-router-dom';
import { SignUp, SignIn, Todo} from './pages/index.js';
import GlobalStyle from "./GlobalStyle";

function App() {
  const PublicRoute = ({ children }) => {
    const isLogined = !!localStorage.getItem("myToken");
    return isLogined ? <Navigate to="/todo" /> : children;
  };

  const PrivateRoute = ({ children }) => {
    const isLogined = !!localStorage.getItem("myToken");
    return isLogined ? children : <Navigate to="/signin" />;
  };

  
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
            <Route path="/todo" element={
              <PrivateRoute>
                <Todo />
              </PrivateRoute>
            } />
            <Route path="/signup" element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            } />
            <Route path="/signin" element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            } />
      </Routes>
    </div>
  );
}

export default App;
