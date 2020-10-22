import React from "react";
import qs from "qs";

const QueryCompo = ({ location }) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

  return (
    <div className="QueryCompo">
      <h3>QueryCompo</h3>
      <p>
        이름 : {query.name}
        <br />
        나이 : {query.age} <br />
        주소 : {query.addr}
        <br />
      </p>
    </div>
  );
};

export default QueryCompo;
