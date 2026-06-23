let tatkalBooking = new Promise((resolve, reject)=>{ 
    let bookingStatus = true
    
    if(bookingStatus){
        setTimeout(resolve, 3000, "Ticket booked successfully")
    }
    else{
        setTimeout(reject, 3000, "Tatkal Ticket Not Booked Successfully!")
    }
})

tatkalBooking.then((message)=>{  
    console.log(message)
})
.catch((message)=>{
    console.log(message)
})