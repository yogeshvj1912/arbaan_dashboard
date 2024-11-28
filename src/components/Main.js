import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import styles from './Main.module.css'
import Dashbord from './pages/Dashbord'
import Detail from './pages/Detail'
import GetPostData from './pages/GetPostData'

function Main() {
  return (
    <div className={styles.container}>
    <Header/>
  <Outlet>
 <Dashbord/>
 <Detail/>
 <GetPostData/>
  </Outlet>
</div>
  )
}

export default Main
