import React from "react";
import "../../styles/Table.css";

export const TableContainerCal = ({ children }) => {
    return (
        <table className="table table-hover table-bordered table-striped">
            <thead>
                <tr>
                    <th>Event Title</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Note</th>
                    {/* <th>createdAt</th> */}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
};

