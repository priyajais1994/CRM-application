

import MaterialTable from 'material-table'
import React from 'react';
import { Icon } from '@mui/material';



function UserTable ( props){



    return(

        <MaterialTable

        onRowClick={(event, rowData)=>props.editUsers(rowData)}


          columns={[
            { title: 'USER ID', field: 'userId' },
            { title: 'NAME', field: 'name' },
            { title: 'EMAIL', field: 'email' },
            { title: 'ROLE', field: 'userTypes' },
            { title: 'STATUS', field: 'userStatus' },
          ]}

          data= {props.userDetails}
          
          title= {props.title}

          options = {{
            
                exportAllData:true,
                exportButton: true,
                sorting: true,
                filtering: true,
                rowStyle:{
                    cursor:"Pointer",
                    
                }
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
export default UserTable;