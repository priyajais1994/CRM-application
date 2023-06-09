import MaterialTable from 'material-table'
import { Icon } from '@mui/material'
import React from 'react'


function Tickettable ( props){

    return(

        <MaterialTable

        onRowClick={(event, rowData)=>props.editTickets(rowData)}

          columns={[
            { title: 'TICKET ID', field: '_id' },
            { title: 'TITLE', field: 'title' },
            { title: 'DESCRIPTION', field: 'description' },
            { title: 'PRIORITY', field: 'ticketPriority' },
            { title: 'STATUS', field: 'status' },
            { title: 'REQUSTOR', field: 'requestor' },
            { title: 'ASSIGNE', field: 'assignee' },
          ]}

          data = {props.ticketDetails}
          
          title= {props.title}

          options = {{
            
                
                sorting: true,
                filtering : true,
                rowStyle:{
                    cursor:"Pointer",
                    
                },
            }
          }

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



    )




}
export default Tickettable;