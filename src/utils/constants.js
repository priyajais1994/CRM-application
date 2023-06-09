

const userTypes= {
    customer:"CUSTOMER",
    engineer:"ENGINEER",
    admin:"ADMIN"
} 

const userStatus = {
    pending:"PENDING",
    approved:"APPROVED",
    rejected:"REJECTED"
}
const ticketStatus = {
    open:"OPEN",
    Progress:"PROGRESS",
    blocked:"BLOCKED",
    closed:"CLOSED"
}

const userAttributeFields ={

    userType : "userType"
}

export default {userTypes, userStatus, ticketStatus, userAttributeFields}