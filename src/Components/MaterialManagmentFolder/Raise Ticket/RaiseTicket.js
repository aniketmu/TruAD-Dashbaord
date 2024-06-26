import React, { useEffect, useState } from "react";
import "./raiseticket.css";

// import * as React from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useCookies } from "react-cookie";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import RaiseDailog from "./RaiseDailog";
import CardActions from "@mui/material/CardActions";
import { colors } from "@mui/material";
const columns = [
  { id: "ticketid", label: "Ticket ID", minWidth: 50 },
  { id: "subject", label: "Subject", minWidth: 200 },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "left",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "lastupdate",
    label: "Last Update",
    minWidth: 170,
    align: "left",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "support",
    label: "Support",
    minWidth: 170,
    align: "left",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "viewfile",
    label: "View File",
    minWidth: 30,
    align: "right",
    // format: (value) => value.toFixed(2),
  },
];

function createData(ticketid, subject, status, lastupdate, support, img) {
  // const density = population / size;
  // const img = "Qayyum"

  return { ticketid, subject, status, lastupdate, support, img }; //density
}

const rows = [
  createData(1014, "Not Getting Proper Data", "Completed", "2 days ago"),
  createData(1015, "Not Getting Proper Data", "On Hold", "2 days ago"),
];

function RaiseTicket() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  // const [render, setrender] = useState['t']
  const [cookies, setCookie] = useCookies(["user"]);
  const [user, setuser] = useState({
    name:'',
    email:'',
    raiseTicket:[], 
  });

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value);
  };

  const handleSearch = () => {
    const newArr = [...rows];
    const serchTearm = input.trim();
    if (serchTearm) {
      const filerdArray = newArr.filter((val) => {
        return val.ticketid === serchTearm;
      });
      setData(filerdArray);
    } else {
      setData(rows);
    }
  };

  const addRaiseNewData = (text, selectedDepartment, img) => {
    const s = createData(
      1001 + rows.length,
      text,
      "In Process",
      "today",
      selectedDepartment,
      img
    );
    const newArr = [s, ...data];
    rows.unshift(s);
    setData(newArr);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  

  useEffect(() => {
    const getTicket = async () => {
      try {
        const data = await fetch(
          "https://truad-dashboard-backend.onrender.com/api/user",
          {
            method: "GET", // Added method for clarity, assuming it's a GET request
            headers: {
              Authorization: `Bearer ${cookies.user}`,
              "Content-Type": "application/json",
            },
          }
        );
        const ticketData = await data.json();
        rows.splice(0,rows.length);
        ticketData.user.raiseTicket.forEach((el, index) => {
          const date = new Date(el.updatedAt);
          const formatter = new Intl.DateTimeFormat("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          const formattedDate = formatter.format(date);
          // const formatterT = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          // const formattedTime = formatteT.format(date);
          const a = createData(
            index,
            el.subject,
            el.status,
            formattedDate,
            el.supportTeam,
            el.viewImage
          );
          rows.push(a);
        });
          setuser(ticketData.user);
        
      } catch (error) {
        console.log("error=>", error);
      }
    };
    getTicket();
  }, [cookies]);



  return (
    <div className="raiseTicketContainer">
      <div className="raise1 raise">
        <h3>Help</h3>
        <div>
          <span>My Tickets</span>
          <span>Knoledgebase</span>
          <span>Announcement</span>
        </div>
      </div>

      <div className="raise">
        <div className="raise2 raise">
          <div style={{ width: "50%" }}>
            <input
              type="text"
              value={input}
              style={{ width: "60%", height: "35px" }}
              onChange={handleInputChange}
              placeholder="Enter Ticket ID"
            />
            <button
              onClick={handleSearch}
              style={{
                borderRadius: "7px",
                backgroundColor: "red",
                marginLeft: "10px",
                width: "15%",
              }}
            >
              Search
            </button>
            <span> Total {data.length} Ticket </span>
          </div>
          <div className="addTicketContainer">
            <CardActions>
              <RaiseDailog
                user_email={user.email}
              />
            </CardActions>
          </div>
        </div>
        <div className="raise3 raise">
          <div></div>
          <div>
            <Paper
              sx={{
                width: "100%",
                overflow: "hidden",
                backgroundColor: "#171a1cc9",
                color: "white",
              }}
              style={{ color: "white" }}
            >
              <TableContainer sx={{ maxHeight: 600 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];

                              if (column.id === "viewfile") {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    <a href={row.img} target="blank">
                                      <button style={{ borderRadius: "7px" }}>
                                        View Image{" "}
                                      </button>
                                    </a>
                                  </TableCell>
                                );
                              } else {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ color: "white" }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              }
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                style={{ color: "white" }}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaiseTicket;
