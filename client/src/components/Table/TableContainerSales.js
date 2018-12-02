import React from "react";
import "../../styles/Table.css";

export const TableContainerSales= ({ children }) => {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Record ID</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Notes</th>

                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
};
