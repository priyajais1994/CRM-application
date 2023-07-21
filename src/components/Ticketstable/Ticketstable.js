import MaterialTable from 'material-table'
import { Icon } from '@mui/material'
import Swal from "sweetalert2";
import React from 'react'
import { deleteTicket } from '../../api/ticket';


function Tickettable ( props){

  const DeleteTicket=(_id)=>{

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result)=>{
      if(result.value) {
        const isticketDeleted = await deleteTicketApi(_id)
  
        if(isticketDeleted){
          props.onTicketsdeleted();
        }
      }
    })
  }
  
  const deleteTicketApi = async (_id) => {

    // make API call 

      deleteTicket(_id)
      .then((res)=>{
       
        Swal.fire(
          "Deleted!",
          `Ticket ${_id} has been deleted`,
          "success"
        );
        return true;
      })
      .catch((err)=>{
        Swal.fire("Error!",`OOPS Something went Wrong`, "warning")
        console.log(err)
      })
      return false;
  }

    return(

      <div id="tickets">
      
    <MaterialTable
      style={{
        color: "black",
        background: "whitesmoke",
        borderWidth: "2px",
      }}
      onRowClick={(event, rowData) => props.editTickets(rowData)}
      columns={[
        { title: "TICKET ID", field: "_id" },
        { title: "TITLE", field: "title" },
        { title: "DESCRIPTION", field: "description" },
        { title: "REQUESTOR", field: "requestor" },
        { title: "PRIORITY", field: "ticketPriority" },
        { title: "ASSIGNEE", field: "assignee" },
        { title: "STATUS", field: "status" },
      ]}
      actions={[
        (rowData)=> ({
          icon:"delete",
          tooltip:"Delete Tickets",
          onClick:()=>{
            DeleteTicket(rowData._id)
          },
        })
       
      ]}
      title={props.title}
      options={{
        sorting: true,
        exportButton: true,
        actionsColumnIndex: -1,
        serioulnumber:true,
        headerStyle: {
          backgroundColor: "mediumblue",
          fontSize: "1.2em",
          alignItems: "center",
          color: "white",
          textTransform: "uppercase",
        },
        rowStyle: {
          border: "2px solid gray",
          cursor: "pointer",
        },
      }}
      data={props.ticketDetails}

      icons={{
        Filter: () => <Icon className="bi bi-filter" style={{ color: 'black', fontSize: '20px' }} />,
        Search: () => <Icon className="bi bi-search" style={{ color: 'orange', fontSize: '18px' }} />,
        Clear: () => <Icon className="bi bi-x-circle" style={{ color: 'red', fontSize: '16px' }} />,
        FirstPage: () => <Icon className="bi bi-chevron-double-left" style={{ color: 'orange', fontSize: '20px' }} />,
        LastPage: () => <Icon className="bi bi-chevron-double-right" style={{ color: 'orange', fontSize: '20px' }} />,
        NextPage: () => <Icon className="bi bi-chevron-right" style={{ color: 'black', fontSize: '18px' }} />,
        PreviousPage: () => <Icon className="bi bi-chevron-left" style={{ color: 'black', fontSize: '18px' }} />,
        ResetSearch: () => <Icon className="bi bi-x-circle-fill" style={{ color: 'gray' }} />,
        SortArrow: () => <Icon className="bi bi-caret-down-fill" style={{ color: 'brown', fontSize: '16px' }} />,
      }}
    />
    </div>
    )
}

 export default Tickettable;