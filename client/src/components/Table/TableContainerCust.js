import React from "react";
import "../../styles/Table.css";

export const TableContainerCust = ({ children }) => {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
};
