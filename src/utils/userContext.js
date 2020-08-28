import React from "react";

const UserContext = React.createContext({
  employeesState:{},
  handleBtnClick: () => {}
});

export default UserContext;