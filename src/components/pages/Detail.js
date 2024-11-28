import React, { useContext, useEffect, useState } from 'react'
import styles from './Detail.module.css'
import AddContext from '../../addContext/AddContext'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function Detail() {
  
    const contextData = useContext(AddContext)
    const [model,setModel] = useState(false)
    const [deleteData,setDeleteData]= useState(null)
    const postData = contextData.post
    const navigate = useNavigate()

    const param = useParams()
    let count = 0


    const deleteFunc = async () => {
        try {
          const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${deleteData}`);
         setDeleteData(null)
      

        } catch (error) {
          console.error("Error deleting post:", error);
        }
      };
      


    return (
        <div className={styles.container}>
            <h2>Post Data</h2>
            {contextData.isLoading ? <h1>Loading...</h1> : <div className={styles.table_data}>

                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Get</th>
                            <th>Delete</th>
                         

                        </tr>
                    </thead> 
                    <tbody>
                    {postData.map((ele, i) => {
                 
                     
                      if(ele.userId == param.id ){
                          count +=1
                        return  <tr key={i}>
                        <td>{count}</td>
                        
                        <td>{ele.title}</td> 
                     
                        <td><button onClick={()=>navigate(`/get-post-detail/${ele.id}`)} className={styles.get}>Get</button></td>
                        <td><button onClick={()=>{setModel(true); setDeleteData(ele.id)}} className={styles.delete}>Delete</button>
                        <div className={model?styles.open_model:styles.open_model_close}>
                         <div>Do you want to delete this data? {deleteData}</div>
                         <button onClick={()=>{setModel(false); deleteFunc()}} className={styles.button}>Yes</button>
                    <button onClick={()=>{setModel(false)}} className={styles.button} >No</button>
                            </div>
                            </td>
                    </tr>
                      }
                      

                    })}
                      </tbody>
                </table>
            </div>}

        </div>
    )
}

















export default Detail
