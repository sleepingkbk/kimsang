import React from "react";
import logo from './img/logo.jpeg'
import { Link } from "react-router-dom";
import Home from "./Home";
import styles from "./Header.module.css";


function Header(){
    return(      
        
                <div className={styles.header}>
                    <img className={styles.logo} src={logo} alt="what"/>
                    <div>
                        <h4 className={styles.service_area}>
                        <span className={styles.span_basic} >회사명</span> 회사명회사명 <span className={styles.span_basic}>직원수</span>000명 
                        <span className={styles.log_out}>
                            <Link to={`/`}>로그아웃</Link></span>
                    </h4>
                    
                    </div>
                    
                </div>
               
        
    )
}

export default Header