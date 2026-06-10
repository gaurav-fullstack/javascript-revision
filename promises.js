const myPromise = new Promise((resolve, reject) => {

    const success = 0;

    if (success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }

});

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


    function checkAge(age) {

        const ageCheckPromise = new Promise((resolve, reject)=>{
            
            const success = age >= 18
            
            if(success){
                resolve("Your are eligible to vote");
             }
             else{
                reject("You are not eleigible to vote");
             }
        });

        ageCheckPromise.then(
            (result)=>{console.log(result)
            }
        ).catch((error)=>{
            console.log(error);
        })
    }


    checkAge(16);

    checkAge(20);
    

    //better way to write the above code is to return the promise from the function and then handle it outside the function.

    function checkAge(age) {

        return new Promise((resolve, reject) => {

            if (age >= 18) {
                resolve("You are eligible to vote");
            } else {
                reject("You are not eligible to vote");
            }

        });
    }

checkAge(20)
    .then(result => console.log(result))
    .catch(error => console.log(error));
