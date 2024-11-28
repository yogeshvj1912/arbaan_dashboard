import React, { useContext } from 'react'
import AddContext from '../../addContext/AddContext'
import styles from './GetPostData.module.css'
import { useParams } from 'react-router-dom'
function GetPostData() {
    const contextData = useContext(AddContext)
    const postData = contextData.post
    const param = useParams()


  return (
    <div className={styles.container}>
            <h2>Post Detail</h2>
            {contextData.isLoading ? <h1>Loading...</h1> : <div className={styles.table_data}>

             
                    {postData.map((ele, i) => {
                 
                     
                      if(ele.id == param.id ){
                  
                        return <div key={i} className={styles.card}>
                            <h3>Title</h3>
                            <div>{ele.title}</div>
                            <h3>Body</h3>
                            <div>{ele.body}</div>
                            <div className={styles.modify}><button>Modify</button></div>
                        </div>
                        
                      }
                      
 
                    })}
            </div>}

        </div>
  )
}

export default GetPostData
