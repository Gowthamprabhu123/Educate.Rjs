import React, { useState, useContext, createContext } from 'react';

// Create a new context
const MyContext = createContext();

// A provider component to provide the value to the components
const MyProvider = ({ children }) => {
    const [myValue, setMyValue] = useState('');

    return (
        <MyContext.Provider value={{ myValue, setMyValue }}>
            {children}
        </MyContext.Provider>
    );
};

// A component that consumes the context using useContext hook
const MyComponent = () => {
    const { myValue, setMyValue } = useContext(MyContext);

   

    return (
        <div>
            <h2>Click the below button: {myValue}</h2>
            <button onClick={()=> setMyValue('ThankYou for visiting my site ')}>Update Value</button>
        </div>
    );
};

// Main App component that uses the MyProvider
const Ex1 = () => {
    return (
        <MyProvider>
            <div>

                <MyComponent />
            </div>
        </MyProvider>
    );
};

export default Ex1;