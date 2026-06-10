async function getUsersDirectory(){

    try{
        
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok){
            throw new Error("Failed to fetch users directory");
        }

        const users = await response.json();

        for(let user of users){
            console.log(`
                ------------------------------------------------------------

                Name: ${user.name}
                Email: ${user.email}
                Phone: ${user.phone}
                City: ${user.address.city}
                Company: ${user.company.name}               
                
                ------------------------------------------------------------
                `);
        }

    }
    catch(error){
        console.error(
            `Error: ${error.message}`
        );
    }
}


getUsersDirectory();