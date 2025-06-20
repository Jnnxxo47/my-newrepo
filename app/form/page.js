'use client';

import React, { useState } from 'react';

const Form = () => {
  const [userInput, setUserInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [usernumber, setusernumber] = useState(0);
  const [userBool, setuserBool] = useState(true);

  const doMath = (e) => {
    e.preventDefault();
    alert("Square of your number is: " + (usernumber * usernumber));
  };

  const FavoriteColor = () => {
    const colorList = ['blue', 'red', 'pink', 'yellow', 'black', 'white', 'gray', 'green', 'orange', 'purple'];
    const [index, setIndex] = useState(0);
    const color = colorList[index];

    const handleNext = () => {
      setIndex((prevIndex) => (prevIndex + 1) % colorList.length);
    };

    return (
      <center>
        <h1>My favorite color is {color}!</h1>
        <button type="button" onClick={handleNext}>
          *Change color*
        </button>
      </center>
    );
  };

  const showAlert = () => {
    alert('You successfully saved your process!');
  };

  const handleClick = () => {
    window.location.href = '/home';
  };

  const SendMessage = (e) => {
    e.preventDefault();
    alert('Ok, I will call you ' + userInput);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
        padding: '25px',
        minHeight: '100vh',
      }}
    >
      <center>
        <div
          style={{
            margin: '50px auto',
            width: '60%',
            border: '3px solid #90CAF9',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <img
            src="/fox.jpg"
            alt="fox with a hat"
            width="300"
            style={{
              borderRadius: '50%',
              display: 'block',
              margin: '0 auto 20px auto',
            }}
          />
          <h1>This is a form</h1>

          <form onSubmit={SendMessage}>
            <label>
              Type your name:
              <input
                type="text"
                name="username"
                value={userInput}
                placeholder="Enter your name"
                onChange={(e) => setUserInput(e.target.value)}
                style={{ marginLeft: '10px' }}
              />
            </label>
            <br />
            <button
              type="button"
              onClick={showAlert}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              *Submit*
            </button>
          </form>

          <br />

          <form onSubmit={doMath}>
            <label>
              Number:
              <input
                type="text"
                placeholder="Enter a number"
                style={{ borderWidth: 3, borderColor: 'white', marginLeft: '10px' }}
                onChange={(e) => setusernumber(parseInt(e.target.value))}
              />
            </label>
            <button
              type="submit"
              style={{
                marginLeft: '10px',
                padding: '5px 15px',
              }}
            >
              *Calculate Square*
            </button>
          </form>

          <br />

          <button
            type="button"
            onClick={handleClick}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            *Return To Home*
          </button>

          <br />

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            *Toggle dark mode*
          </button>

          <br />
          <br />

          <FavoriteColor />

          <br />
          {userBool ? <p>The Bool is true</p> : <p>The Bool is false</p>}
          <button onClick={() => setuserBool(!userBool)}>*Toggle Bool*</button>
        </div>
      </center>
    </div>
  );
};

export default Form;
