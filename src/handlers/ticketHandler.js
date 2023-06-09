

export const createTicketsCount=(tickets)=>{



        const data={
            pending:0,
            closed:0,
            progress:0,
            blocked: 0
    
    
        }
    
    tickets.forEach(ticket=>{
    
        if(ticket.status === "OPEN"){
            data.pending+=1;
        }
        else if(ticket.status === "INPROGRESS")
        {
            data.progress+=1;
        }
        else if(ticket.status === "CLOSED")
        {
            data.closed+=1;
        }
        else{
            data.blocked+=1;
        }
        
    });

    return data;
}