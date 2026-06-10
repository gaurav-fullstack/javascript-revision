async function getUser(){

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        console.log(response.ok)

        const data = await response.json();

        console.log(data);

        console.log("Name of the user is : ", data.name);

        console.log("Email of the user is : ", data.email); 
        console.log("Company Name of the user is : ", data.company.name)
        
    }
    catch (erro){

        console.log("Error fetching API : ", error);
    }
}

getUser();



// how one should write the code
async function getUsers() {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP Error");
        }

        const data = await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error.message);

    }

}