import { Route, Routes, Navigate } from 'react-router-dom';
import { SignUp, SignIn, Todo} from './pages/index.js';

function App() {
  const isLogined = localStorage.getItem('myToken') ? true : false;
  
  const PublicRoute = ({ children }) => {
    return isLogined ? <Navigate to="/todo" /> : children;
  };

  const PrivateRoute = ({ children }) => {
    return isLogined ? children : <Navigate to="/signin" />;
  };

  return (
    <div className="App">
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
