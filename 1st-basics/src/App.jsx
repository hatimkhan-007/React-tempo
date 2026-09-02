import React from 'react';
import Navbar from './components/Navbar.jsx';


function UserCard({ name, age, isOnline }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>
        Status:{" "}
        <span style={{ 
          color: isOnline ? 'green' : 'gray',
          fontWeight: 'bold'
        }}>
          {isOnline ? '🟢 Online' : '⚪ Offline'}
        </span>
      </p>
    </div>
  );
}


function App() {
  return (
    <>
      <Navbar />

      <div>
        <h1> My First React App</h1>
        <UserCard name="Alice" age={28} isOnline={true} />
        <UserCard name="Bob" age={34} isOnline={false} />
        <UserCard name="Charlie" age={22} isOnline={true} />
      </div>


    </>
  )
}

export default App
