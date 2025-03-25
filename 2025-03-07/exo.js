// Convert callback code to a Promise
function fetchData(callback) {
    setTimeout(() => {
        callback("Données récupérées !");
    }, 2000);
}
fetchData((data) => {
    console.log(data);
});

const getData = new Promise((resolve, reject) => {
    // Make action here
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Données récupérées !")
        } else {
            reject('Rejected')
        }
    }, 2000);
});

getData()
    .then((message) => console.log(message));


// Convert this code to async / await
getUser(1)
    .then((user) => getOrders(user.id))
    .then((orders) => getOrderDetails(orders[0]))
    .then((details) => console.log(details))
    .catch((error) => console.error(error));

async function getDataUser() {
    try {
        const user = await getUser(1);
        const orders = await getOrders(user.id);
        const details = await getOrderDetails(orders[0]);
        console.log(details);
    } catch (error) {
        console.error(error);
    }
}

getDataUser()