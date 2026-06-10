function greetMessage(){
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Hello Gaurav");
        }, 2000);

    });

}

async function showMessage() {

    const message = await greetMessage();

    console.log(message);

}

showMessage();