import React, { useState } from "react";
import Formatting from "./graph"

const list = [
  {
    id: "#2147",
    name: "Brandon Jacob",
    email: "qayyum@truad.co",
    price: "128000",
    status: "Overdue",
  },
  {
    id: "#2147",
    name: "Brandon Jacob",
    email: "qayyum@truad.co",
    price: "128000",
    status: "Pending",
  },
  {
    id: "#2147",
    name: "Brandon Jacob",
    email: "qayyum@truad.co",
    price: "128000",
    status: "Paid",
  },
  {
    id: "#2049",
    name: "Ashleigh Langosh",
    email: "qayyum@truad.co",
    price: "128000",
    status: "Paid",
  },
  {
    id: "#2644",
    name: "	Angus Grady",
    email: "qayyum@truad.co",
    price: "128000",
    status: "Pending",
  },
  {
    id: "#2049",
    name: "Raheem Lehner",
    email: "qayyum@truad.co",
    price: "128000",
    status: "Refunded",
  },
];
export default function RecentSales() {
  const [option, setoption] = useState(5);
  const renderSwitch = (status) => {
    switch (status) {
      case "Paid":
        return "badge bg-success";
      case "Pending":
        return "badge bg-warning";
      case "Overdue":
        return "badge bg-danger";
      default:
        return "badge bg-info";
    }
  };
  return (
    <section className="section dashboard row">
      <div className="col-8">
        <div className="card recent-sales overflow-auto">
          <div
            className="card-body"
            style={{ backgroundColor: "rgba(234, 231, 231, 0.776)" }}
          >
            <h5 className="card-title text-start">Recent Sales</h5>

            <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
              <div
                className="datatable-top"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="datatable-dropdown">
                  <label>
                    <select
                      className="datatable-selector"
                      onChange={(e) => {
                        e.target.value === "All"
                          ? setoption(20)
                          : setoption(e.target.value);
                      }}
                    >
                      {[5, 10, 15, "All"].map((el,index) => {
                        return (
                          <option key={index} value={el}>
                            {el}
                          </option>
                        );
                      })}
                    </select>
                    entries per page
                  </label>
                </div>
                <div className="datatable-search">
                  <input
                    className="datatable-input"
                    placeholder="Search..."
                    type="search"
                    title="Search within table"
                  />
                </div>
              </div>
              <div className="datatable-container">
                <table
                  className="table table-borderless datatable datatable-table"
                  style={{ "--bs-table-bg": "none" }}
                >
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        data-sortable="true"
                        style={{ width: "10.71012805587893%" }}
                      >
                        <button
                          className="btn datatable-sorter"
                          style={{ fontWeight: 700 }}
                        >
                          ID
                        </button>
                      </th>
                      <th
                        scope="col"
                        data-sortable="true"
                        style={{ width: "23.39930151338766%" }}
                      >
                        <button
                          className="btn datatable-sorter"
                          style={{ fontWeight: 700 }}
                        >
                          Customer
                        </button>
                      </th>
                      <th
                        scope="col"
                        data-sortable="true"
                        style={{ width: "39.34807916181606%" }}
                      >
                        <button
                          className="btn datatable-sorter"
                          style={{ fontWeight: 700 }}
                        >
                          Email
                        </button>
                      </th>
                      <th
                        scope="col"
                        data-sortable="true"
                        style={{ width: "11.757857974388825%" }}
                      >
                        <button
                          className="btn datatable-sorter"
                          style={{ fontWeight: 700 }}
                        >
                          Price
                        </button>
                      </th>
                      <th
                        scope="col"
                        data-sortable="true"
                        className="red"
                        style={{ width: "14.78463329452852%" }}
                      >
                        <button
                          className="btn datatable-sorter"
                          style={{ fontWeight: 700 }}
                        >
                          Status
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((list,index) => {
                      return (
                        <tr data-index="0" key={index}>
                          <td>{list.id}</td>
                          <td>{list.name}</td>
                          <td>
                            <a href={{}} className="text-primary">
                              {list.email}
                            </a>
                          </td>
                          <td>{list.price}</td>
                          <td className="green">
                            <span className={renderSwitch(list.status)}>
                              {list.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="datatable-bottom">
                <div className="datatable-info text-end">
                  Showing 1 to {option} of {option} entries
                </div>
                <nav className="datatable-pagination">
                  <ul className="datatable-pagination-list"></ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 " >
        <Formatting/>
      </div>
    </section>
  );
}
