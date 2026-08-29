import React from 'react';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar />

      <form className="form-container">
        {/* Text Input */}
        <div className="form-group">
          <label htmlFor="userName">Name</label>
          <input 
            type="text" 
            id="userName" 
            name="userName" 
            placeholder="Enter your name" 
            required 
          />
        </div>

        {/* Number Input */}
        <div className="form-group">
          <label htmlFor="userAge">Age</label>
          <input 
            type="number" 
            id="userAge" 
            name="userAge" 
            min="0" 
            placeholder="Enter your age" 
          />
        </div>

        {/* Radio Buttons for Single Choice */}
        <div className="form-group-status">
          <span className="label-title">Status</span>
          
          <div className="radio-option">
            <input 
              style={{accentColor:'green'}}
              type="radio" 
              id="statusOnline" 
              name="status" 
              value="online" 
              defaultChecked 
            />
            <label htmlFor="statusOnline">Online</label>
          </div>

          <div className="radio-option">
            <input 
              style={{accentColor:'gray'}}
              type="radio" 
              id="statusOffline" 
              name="status" 
              value="offline" 
            />
            <label htmlFor="statusOffline">Offline</label>
          </div>
        </div>
      </form>


    </>
  )
}

export default App
