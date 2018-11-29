import React from "react";
import "../../styles/Table.css";

export const TableContainerProduct= ({ children }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className="col-md-1">Product ID</th>
                    <th className="col-md-2">Product Name</th>
                    <th className="col-md-2">Quantity</th>
                    <th className="col-md-2">Description</th>
                </tr>
            </thead>
            <tbody className="table table_scrollbar">
                {children}
            </tbody>
        </table>
    );
};
