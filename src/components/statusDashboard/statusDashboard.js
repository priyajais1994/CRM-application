import { SignalWifiStatusbarNull } from '@mui/icons-material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { createTicketsCount } from '../../handlers/ticketHandler';



const StatusDashboard = (props)=>{

    // console.log(props.statusDetails)

    const statusDetails= createTicketsCount(props.ticketDetails);

            const userName =  localStorage.getItem("name");
            const userType =  localStorage.getItem("userType");

    return (   <div className="col my-4">

                <div className="container">


                    <div>
                        <h3 className="text-primary text-center" > Welcome, {userName} </h3>
                        <p className="text-center text-muted" > Take a quick look at your {userType} stats below </p>


                        <div className="row text-center">

                            <div className="col-xs-12 col-lg-3 col-md-6 my-1">
                                <div className="card cardItem shadow  bg-primary text-dark bg-opacity-25 border border-primary">
                                    <div className="card-body">
                                        <h5 className="mb-2" >
                                            <i className="text-primary bi bi-pencil mx-2"></i>
                                            Open
                                        </h5>
                                        <hr/>
                                        <div className="row">
                                            <div className="col">
                                                <h1 className="text-dark mx-4"> {statusDetails.pending}</h1>
                                            </div>
                                            <div className="col">
                                                <div style={{width:60, height:60}}>
                                                <CircularProgressbar value={statusDetails.pending} styles={buildStyles({ textColor:"red", pathColor:"darkBlue"})} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                              <div className="col-xs-12 col-lg-3 col-md-6 my-1">
                                <div className="card cardItem shadow  bg-warning text-dark bg-opacity-25 border border-warning">
                                    <div className="card-body">
                                        <h5 className="mb-2" >
                                            <i className="text-warning bi bi-lightning-charge mx-2"></i>
                                            Progress
                                        </h5>
                                        <hr/>
                                        <div className="row">
                                            <div className="col">
                                                <h1 className="text-dark mx-4"> {statusDetails.progress} </h1>
                                            </div>
                                            <div className="col">
                                                <div style={{width:60, height:60}}>
                                                <CircularProgressbar value={statusDetails.progress} styles={buildStyles({ textColor:"red", pathColor:"#AA6C39"})} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             <div className="col-xs-12 col-lg-3 col-md-6 my-1">
                                <div className="card cardItem shadow  bg-success text-dark bg-opacity-25 border border-success">
                                    <div className="card-body">
                                        <h5 className="mb-2" >
                                            <i className="text-success bi bi-check-circle mx-2"></i>
                                            Closed
                                        </h5>
                                        <hr/>
                                        <div className="row">
                                            <div className="col">
                                                <h1 className="text-dark mx-4"> {statusDetails.closed} </h1>
                                            </div>
                                            <div className="col">
                                                <div style={{width:60, height:60}}>
                                                <CircularProgressbar value={statusDetails.closed} styles={buildStyles({ textColor:"red", pathColor:"green"})} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             <div className="col-xs-12 col-lg-3 col-md-6 my-1">
                                <div className="card cardItem shadow  bg-secondary text-dark bg-opacity-25 border border-secondary">
                                    <div className="card-body">
                                        <h5 className="mb-2" >
                                            <i className="text-dark bi bi-slash-circle mx-2"></i>
                                            Blocked
                                        </h5>
                                        <hr/>
                                        <div className="row">
                                            <div className="col">
                                                <h1 className="text-dark mx-4"> {statusDetails.blocked} </h1>
                                            </div>
                                            <div className="col">
                                                <div style={{width:60, height:60}}>
                                                <CircularProgressbar value={statusDetails.blocked} styles={buildStyles({ textColor:"red", pathColor:"black"})} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                         </div>
                     </div>
            </div> )
}


export default StatusDashboard;  


        
                

                                    
            


