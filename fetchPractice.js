async function getPost(){
    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        const data = await response.json();

        console.log(data);

        console.log("Title of the post is : ", data.title);

        console.log("Body of the post is : ", data.body);
    }
    catch(error){

        console.log("Error fetching post: ", error);
    }
}

getPost();