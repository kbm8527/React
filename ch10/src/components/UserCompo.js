import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const UserCompo = () => {
  const userCtx = useContext(UserContext);

  return (
    <div className="UserCompo">
      <h4>UserCompo</h4>
      <p>
        이름 : {userCtx.name} <br />
        나이 : {userCtx.age} <br />
        주소 : {userCtx.addr} <br />
      </p>
    </div>
  );
};

export default UserCompo;
