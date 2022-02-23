import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/invoices">Invoices</NavLink> |{" "}
        <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/expenses">Expenses</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;