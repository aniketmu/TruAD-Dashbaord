import React, { useState } from 'react'
import "./raiseticket.css"


// import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import RaiseDailog from './RaiseDailog';
import CardActions from '@mui/material/CardActions';
const columns = [
  { id: 'ticketid', label: 'Ticket ID', minWidth: 50 },
  { id: 'subject', label: 'Subject', minWidth: 200 },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'lastupdate',
    label: 'Last Update',
    minWidth: 170,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'support',
    label: 'Support',
    minWidth: 170,
    align: 'left',
    // format: (value) => value.toFixed(2),
  }, {
    id: 'viewfile',
    label: 'View File',
    minWidth: 30,
    align: 'right',
    // format: (value) => value.toFixed(2),
  },
];

function createData(ticketid, subject, status, lastupdate, support, img) {
  // const density = population / size;
  // const img = "Qayyum"

  return { ticketid, subject, status, lastupdate, support, img }; //density
}

const rows = [
  createData(1001, 'Not Getting Proper Data', "On Hold", "2 days ago"),
  createData(1002, 'Not Getting Proper Data', "In Progress", "2 days ago"),
  createData(1003, 'Not Getting Proper Data', "Completed", "2 days ago"),
  createData(1004, 'Not Getting Proper Data', "In Progress", "2 days ago"),
  createData(1005, 'Not Getting Proper Data', "On Hold", "2 days ago"),
  createData(1006, 'Not Getting Proper Data', "Completed", "2 days ago"),
  createData(1007, 'Not Getting Proper Data', "On Hold", "2 days ago"),
  createData(1008, 'Not Getting Proper Data', "Completed", "2 days ago"),
  createData(1009, 'Not Getting Proper Data', "In Progress", "2 days ago"),
  createData(1010, 'Not Getting Proper Data', "On Hold", "2 days ago"),
  createData(1011, 'Not Getting Proper Data', "In Progress", "2 days ago"),
  createData(1012, "Not Getting Proper Data", "In Progress", "2 days ago"),
  createData(1013, 'Not Getting Proper Data', "On Hold", "2 days ago"),
  createData(1014, 'Not Getting Proper Data', "Completed", "2 days ago"),
  createData(1015, 'Not Getting Proper Data', "On Hold", "2 days ago"),
];

function RaiseTicket() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [input, setInput] = useState("");
  const [data, setData] = useState(rows);
  const [switchPage, setSwitchPage] = useState(true);

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value)
  }

  const handleSearch = () => {
    const newArr = [...rows];
    const serchTearm = input.trim();
    if (serchTearm) {
      const filerdArray = newArr.filter((val) => {
        return val.ticketid === serchTearm;
      })
      setData(filerdArray)
    }
    else {
      setData(rows)
    }
  }

  const addRaiseNewData = (text, selectedDepartment, img) => {

    const s = createData(1001 + rows.length, text, "In Process", "today", selectedDepartment, img)
    const newArr = [s, ...data]
    rows.unshift(s);
    setData(newArr)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className='raiseTicketContainer'>


      <div className='raise1 raise'>
        <h3>Help</h3>
        <div>
          <span>My Tickets</span>
          <span>Knoledgebase</span>
          <span>Announcement</span>
        </div>
      </div>
      <div className='raise1 raise'>
        {/* <h3>Help</h3> */}
        <div>
          <span onClick={()=>{setSwitchPage(true)}}>Raise by you</span>
          <span onClick={()=>{setSwitchPage(false)}}>Raise for you</span>
          {/* <span>Announcement</span> */}
        </div>
      </div>
     
     {switchPage?<div className='raise'>
      <div className='raise2 raise'>
        <div style={{ width: "50%" }}>
          <input type="text" value={input} style={{ width: "60%", height: "35px" }} onChange={handleInputChange} placeholder='Enter Ticket ID' />
          <button onClick={handleSearch} style={{ borderRadius: "7px", backgroundColor: "red", marginLeft: "10px", width: "15%" }} >Search</button>
          <span> Total  {data.length} Ticket </span>
        </div>
        <div className='addTicketContainer' >
          <CardActions>
            <RaiseDailog addRaiseNewData={addRaiseNewData} />
          </CardActions>
        </div>
      </div>
      <div className='raise3 raise'>
        <div>

        </div>
        <div>
          <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: "#171a1cc9", color: "white" }} style={{ color: "white" }}>
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead >
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
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];


                            if (column.id === 'viewfile') {
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  <a href={row.img} target='blank'>
                                    <button style={{ borderRadius: "7px" }} >View Image </button>
                                    {/* <h1></h1> */}
                                  </a>
                                </TableCell>
                              )
                            }
                            else {
                              return (
                                <TableCell key={column.id} align={column.align} style={{ color: "white" }}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                  {/* {column.} */}

                                </TableCell>

                              )
                            }
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination style={{ color: "white" }}
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

     </div>:<div className='raise'>
      <div className='raise2 raise'>
        <div style={{ width: "50%" }}>
          <input type="text" value={input} style={{ width: "60%", height: "35px" }} onChange={handleInputChange} placeholder='Enter Ticket ID' />
          <button onClick={handleSearch} style={{ borderRadius: "7px", backgroundColor: "red", marginLeft: "10px", width: "15%" }} >Search</button>
          <span> Total  {data.length} Ticket </span>
        </div>
        <div className='addTicketContainer' >
          {/* <CardActions>
            <RaiseDailog addRaiseNewData={addRaiseNewData} />
          </CardActions> */}
        </div>
      </div>
      <div className='raise3 raise'>
        <div>

        </div>
        <div>
          <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: "#171a1cc9", color: "white" }} style={{ color: "white" }}>
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead >
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
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];


                            if (column.id === 'viewfile') {
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  <a href={row.img} target='blank'>
                                    <button style={{ borderRadius: "7px" }} >View Image </button>
                                    {/* <h1></h1> */}
                                  </a>
                                </TableCell>
                              )
                            }
                            else {
                              return (
                                <TableCell key={column.id} align={column.align} style={{ color: "white" }}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                  {/* {column.} */}

                                </TableCell>

                              )
                            }
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination style={{ color: "white" }}
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

     </div>}
    </div>
  )
}

export default RaiseTicket