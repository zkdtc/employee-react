import React, { useState } from "react";
import UserContext from "../src/utils/userContext";
import "./App.css";
import Cards from "./components/Cards"
import { Dropdown } from 'react-bootstrap';
function Employees() {
  const employees = [
    {
      name: "Harry",
      title: "Professor"
    },
    {
      name: "Hermione",
      title: "Assistant Professor"
    },
    {
      name: "Abigail",
      title: "Associate Professor"
    }
  ];

  const [employeesState, setEmployeesState] = useState(
    { employees: employees, filter: false, selected: 'Professor', sort: false }
  );
  const onClickHandler = event => {
    const value = event.target.innerHTML;
    setEmployeesState({...employeesState, selected:value })
  }

  return (
    <UserContext.Provider value={{
      employeesState
    }}>
      <div className="App">
        <h1>Employees Directory</h1>
        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
          <button type="button" className="btn btn-secondary" onClick={() => setEmployeesState({ ...employeesState, sort: employeesState.sort ? false : true })}>Sort By Name? {String(employeesState.sort)}</button>
          <button type="button" className="btn btn-secondary" onClick={() => setEmployeesState({ ...employeesState, filter: employeesState.filter ? false : true })}>Filter By Title? {String(employeesState.filter)}</button>

          <div className="btn-group" role="group">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Title
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={onClickHandler} href="#/action-1">Professor</Dropdown.Item>
                <Dropdown.Item onClick={onClickHandler} href="#/action-2">Associate Professor</Dropdown.Item>
                <Dropdown.Item onClick={onClickHandler} href="#/action-3">Assistant Professor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row mt-5">
          <Cards />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default Employees;
