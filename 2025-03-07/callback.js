function fetchData(callback) {
    setTimeout(() => {
        console.log("Get all data");
        callback()
    }, 2000);
}

function processData() {
    console.log("Processing data ...");
}

fetchData(processData);




getUser(1, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0], (details) => {
            console.log(details);
        });
    });
});