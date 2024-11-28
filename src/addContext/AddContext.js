import { createContext, useEffect, useState } from "react";
import axios from "axios"

let AddContext = createContext();

export function AddProvider({children}){
    const [isLoading, setLoading] = useState(true)
const [user,setUser] = useState([])
const [post,setPost] = useState([])
const [comments,setComments] = useState([])
const [todos,setTodos] = useState([])



const getAllData = async () => {
    try {
        const [userData,postData,commentData,todosData] = await  Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/users"),
            axios.get("https://jsonplaceholder.typicode.com/posts"),
            axios.get("https://jsonplaceholder.typicode.com/comments"),
            axios.get("https://jsonplaceholder.typicode.com/todos")
        ]);
        setUser(userData.data)
        setPost(postData.data)
        setComments(commentData.data)
        setTodos(todosData.data)

        setLoading(false)
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=> {
    getAllData()
},[])


return(
     <AddContext.Provider value={{user,isLoading,post,comments,todos}}>
{children}
     </AddContext.Provider>
)
}

export default AddContext;