import React, { useContext } from 'react'
import styles from './Dashbord.module.css'
import AddContext from '../../addContext/AddContext'
import { useNavigate } from 'react-router-dom'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar} from "react-chartjs-2"
function Dashbord() {
    const contextData = useContext(AddContext)
    const userData = contextData.user
    const postData = contextData.post.length
    const commentsData = contextData.comments.length
    const todosData = contextData.todos.length
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h2>User Data</h2>
            {contextData.isLoading ? <h1>Loading...</h1> : <div className={styles.table_data}>

                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>City</th>
                            <th>More details</th>

                        </tr>
                    </thead> 
                    <tbody>
                    {userData.map((ele, i) => {
                        return  <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.company.name}</td>
                                <td>{ele.address.city}</td>
                                <td><button onClick={()=>navigate(`detail/${ele.id}`)} className={styles.view_detail}>View Detail</button></td>
                            </tr>
                      

                    })}
                      </tbody>
                </table>
            </div>}

            <div className={styles.chart}>
                <h2>Chart</h2>
<Bar 
data = {{
    labels: ["post","comments","todos"],
    datasets:[
        {
            label:"total count",
            data:[postData,commentsData,todosData],
      
            backgroundColor:["rgb(41, 44, 248,0.8)",]
        }
    ]

}}

/>


            </div>
        </div>
    )
}

export default Dashbord
