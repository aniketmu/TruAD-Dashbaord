import React from 'react'
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
  },
];

function createData(ticketid, subject, status, lastupdate) {
  // const density = population / size;
  const support = "Qayyum"
  return { ticketid, subject, status, lastupdate, support }; //density
}

const rows = [
  createData(1001, 'Not Getting Proper Data', "On Hold", 3287263,),
  createData(1002, 'Not Getting Proper Data', "In Progress", 9596961),
  createData(1003, 'Not Getting Proper Data', "Completed", 301340),
  createData(1004, 'Not Getting Proper Data', "In Progress", 9984670),
  createData(1005, 'Not Getting Proper Data Hold', 327167434, 9833520),
  createData(1006, 'Not Getting Proper Data', "Completed", 7692024),
  createData(1007, 'Not Getting Proper Data', "On Hold", 357578),
  createData(1008, 'Not Getting Proper Data', "Completed", 70273),
  createData(1009, 'Not Getting Proper Data', "In Progress", 1972550),
  createData(1010, 'Not Getting Proper Data', "On Hold", 377973),
  createData(1011, 'Not Getting Proper Data', "In Progress", 640679),
  createData(1012, "Not Getting Proper Data", "In Progress", 67545757, 242495),
  createData(1013, 'Not Getting Proper Data', "On Hold", 17098246),
  createData(1014, 'Not Getting Proper Data', "Completed", 923768),
  createData(1015, 'Not Getting Proper Data', "On Hold", 8515767),
];

function RaiseTicket() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
      <div className='raise2 raise'>
        <div style={{width:"100%"}}>
          <input type="text"  style={{width:"30%",height:"35px"}}/>
          <span>   7 Ticket Total</span>
        </div>
        <div>
          <button>test</button>
        </div>
      </div>
      <div className='raise3 raise'>
        <div>

        </div>
        <div>
          <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: "#171a1cc9", color: "white" }} style={{ color: "white" }}>
            <TableContainer sx={{ maxHeight: 650 }}>
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
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align} style={{ color: "white" }}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                                {/* {column.} */}
                              </TableCell>
                            );
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
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </div>
  )
}

export default RaiseTicket