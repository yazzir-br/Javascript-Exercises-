function getSuccessMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = true;
            if (isSuccess) {
                resolve("Hawshu si guul leh ayay u dhammaatay");
            } else {
                reject("Waan ka xunnahay, khalad ayaa dhacay");
            }
        }, 2000);
    });
}

getSuccessMessage()
    .then(message => {
        console.log("Success:", message);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// Funtion ka dib loo qoray 

 async function displaySuccessMessage() {
    try {
     
        const message = await getSuccessMessage();
        
        console.log("Success:", message);
    } catch (error) {
        console.error("Error:", error);
    }
}

displaySuccessMessage();