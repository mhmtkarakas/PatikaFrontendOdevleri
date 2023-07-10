import axios from "axios";

// export default async function getData(number) {
    
//     const getUsers = async (number) => {
//         const {data } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
//         console.log(data);
//     }

//     const getPost =async (number) => {
//         const {data } = await axios ("https://jsonplaceholder.typicode.com/posts?id=" + number );
//         console.log(data);
//     }
    
//     const userId = await getUsers(number)
//     const postId = await getPost(number)
//     return userId + postId ;
// }

// getData;

async function getData(number) {
    const {data :user} = await axios("https://jsonplaceholder.typicode.com/users/" + number);
    const {data :post} =  await axios("https://jsonplaceholder.typicode.com/posts?id=" + number);

    console.log("users ", user);
    console.log("posts ", post);
}

export default getData ;


