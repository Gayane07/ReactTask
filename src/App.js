import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import UsersDataProvider from './providers/usersDataProvider';

function App() {

  return (
    <div>
      <UsersDataProvider>
      <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.component} />
        })}
      </Routes>
      </UsersDataProvider>
    </div>
  );
}

export default App;
