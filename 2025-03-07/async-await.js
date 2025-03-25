async function getGoogleHomePage() {

    const response = await fetch('https://www.google.com');
    
    fetch('https://www.google.com')
        .then((googlePage) => {
            console.log(googlePage);
        })

    console.log(googlePage);
    
}

getGoogleHomePage();