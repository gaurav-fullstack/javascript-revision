 const person = {
        name:"Gaurav",
        age: 32,
        city:"Ghaziabad"
    }


    console.log("Name is : ", person.name);
    console.log("Age is : ", person.age);
    console.log("City is : ", person.city);


    person.profession = `Software Engineer`;;

    console.log("After adding profession to the person object: ", person);

    person.city = "Noida";

    console.log("After updating city in the person object: ", person);

    for(let key in person){
        console.log(`${key} : ${person[key]}`);
    }

    const employee = {
    name: "Gaurav",
    skills: ["HTML", "CSS", "JavaScript"]
};


for(let key in employee){
    if(key === "skills"){
        console.log(`${key} : ${employee[key].join(", ")}`);
    }
}