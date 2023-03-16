import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerOrderInput from "../CustomerOrderInput/CustomerOrderInput";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([
    {
      name: "John Doe",
      address: "123 Main St",
      owe: [
        {
          date: "2022-03-01",
          payment: 50,
        },
        {
          date: "2022-03-15",
          payment: 30,
        },
        {
          date: "2022-04-01",
          payment: 20,
        },
      ],
    },
    {
      name: "Jane Smith",
      address: "456 Maple Ave",
      owe: [
        {
          date: "2022-03-01",
          payment: 25,
        },
        {
          date: "2022-03-15",
          payment: 25,
        },
      ],
    },
    {
      name: "Bob Johnson",
      address: "789 Oak St",
      owe: [],
    },
  ]);

  const sortByNameAscending = () => {
    const sortedCustomers = [...customers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCustomers(sortedCustomers);
  };

  const sortByNameDescending = () => {
    const sortedCustomers = [...customers].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setCustomers(sortedCustomers);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Customer Information</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th colSpan="2"></th>
            <th className="float-center">
              <button onClick={sortByNameAscending} class="btn btn-secondary btn-sm">Sort A-Z</button>
              <button onClick={sortByNameDescending} class="btn btn-secondary btn-sm">Sort Z-A</button>
              <th className="float-center"><CustomerOrderInput /></th>
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Owe</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.address}</td>
              <td>
                <ul className="list-group">
                  {customer.owe.length > 0 ? (
                    customer.owe.map((item, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        {item.date}{" "}
                        <span className="badge badge-primary badge-pill">
                          {item.payment}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item">No payments owed</li>
                  )}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
