import React, { useContext, useEffect, useState } from 'react'
import styles from './Header.module.css'
// import AddContext from './AddContext'
import { useNavigate } from 'react-router-dom'

function Header() {


  const navigate = useNavigate()








  return (
    <div className={styles.container}>
      <h1  className={styles.title} >Arbaan</h1>

   
    </div>
  )
}

export default Header
