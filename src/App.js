import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="App">
      {!user ? (
        <Auth />
      ) : (
        <div>
          <header className="header">
            <h1>📊 Manager Cheltuieli</h1>
            <div className="user-info">
              <span>{user.email}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          </header>
          <Dashboard user={user} />
        </div>
      )}
    </div>
  );
}

export default App;