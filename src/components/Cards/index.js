import React, { useContext } from "react";
import "./style.css";
import UserContext from "../../utils/userContext";

function Cards(props) {
  const { employeesState } = useContext(UserContext);
  const tempArr0 = employeesState.sort ? employeesState.employees.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) : employeesState.employees;
  const tempArr = employeesState.filter ? tempArr0.filter(item => item.title === employeesState.selected) : employeesState.employees;


  return (
    <div>
      {tempArr.map(item => (
        <div className="card h-50" key={item.name}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.title}</p>

          </div>
        </div>
      ))}
    </div>

  );
}

export default Cards;
