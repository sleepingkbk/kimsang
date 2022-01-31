import Content from "./Content";
import styles from "./Sidemenu.module.css";
import store from './img/store.png'
import human from './img/human.png'
import napal from './img/napal.png'
import doc from './img/doc.png'
import member from './img/member.png'
import coin from './img/coin.png'

function Sidemenu (){
    return(
        <div className={styles.content}>
            <div className={styles.sidemenu}>
             <div className={styles.store}>
                <div className={styles.store_title}>
                      <img src={store} alt="what"/>
                      <h4>업장관리</h4>
                      </div> 
                <div className={styles.store_title}>
                      <img src={human} alt="what"/>
                      <p>직원관리</p>
                      </div> 
                <div className={styles.store_title}>
                      <img src={coin} alt="what"/>
                      <p>급여관리</p>
                      </div> 
            </div>
            <div className={styles.store}>
                <div className={styles.store_title}>
                      <img src={store} alt="what"/>
                      <h4>회원관리</h4>
                      </div> 
                <div className={styles.store_title}>
                      <img src={human} alt="what"/>
                      <p>회원정보</p>
                      </div> 
                <div className={styles.store_title}>
                      <img src={doc} alt="what"/>
                      <p>이용안내</p>
                      </div> 
                      <div className={styles.store_title}>
                      <img src={napal} alt="what"/>
                      <p>공지사항</p>
                      </div>
            </div>
                 
            
            
        </div>
        
            <Content/>
        
</div>
        
    )
}

export default Sidemenu