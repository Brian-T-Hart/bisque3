import React from "react";
import "../../styles/Table.css";

export const TableContainerProduct = ({ children }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};
