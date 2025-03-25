const myPromise = new Promise((resolve, reject) => {

    let sucess = true;

    setTimeout(() => {
        if (sucess == true) {
            resolve("Operation good")
        } else {
            reject("You error !!!")
        }
    }, 2000);
});

myPromise.then((messae) => {
    console.log("Success: ", messae);
})
.catch((error) => {
    console.error("Error: ", error);
})


getUser(1)
    .then((user) => getOrders(user.id))
    .then((orders) => getOrderDetails(orders[0]))
    .then((details) => console.log(details))
    .catch((error) => console.error(error))


