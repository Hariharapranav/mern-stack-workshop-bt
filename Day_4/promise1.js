let booking = new Promise((resolve, reject) => {

    let bookingStatus = true;

    if (bookingStatus) {
        setTimeout(resolve, 3000, "Ticket Booked Successfully");
    } else {
        reject("Ticket not Booked, Amount refunded");
    }

});

async function bookTicket() {

    try {

        let message = await booking;

        console.log(message);

    }
    catch(error) {

        console.log(error);

    }

}

bookTicket();