import './App.css';
import LoginButton from './component/LoginButton';
import LogoutButton from './component/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      {
        isAuthenticated ? (<LogoutButton />) : (<LoginButton />)
        // <LoginButton />
      }̦
    </div>
  );
}

export default App;
