import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './Auth.css';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>📊 Manager Cheltuieli</h1>
        <form onSubmit={handleAuth}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Parolă" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading}> {loading ? 'Se încarcă...' : isLogin ? 'Logare' : 'Înregistrare'} </button>
        </form>
        {error && <p className="error">{error}</p>}
        <p className="toggle"> {isLogin ? "Nu ai cont? " : "Ai deja cont? "} <button type="button" onClick={() => setIsLogin(!isLogin)}> {isLogin ? 'Înregistrează-te' : 'Logare'} </button> </p>
      </div>
    </div>
  );
}

export default Auth;