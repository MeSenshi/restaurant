import React from "react";
import Table from "../Table/Table";
import "./Tables.css";

const Tables = ({tables}) => {
  return (
    <div className="tables_container">
      {tables.map((table) => {
        return <Table key={table.Table} table={table} />;
      })}
    </div>
  );
};

export default Tables;
