import { Route, Routes } from 'react-router-dom';
import { SignUp, SignIn } from './pages/index.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
