import styles from "./Home.module.css";
import logo from './img/logo.jpeg'
import { Link } from "react-router-dom";


function Home (){
    return(
      <div className={styles.App}>
      
      <img src={logo} alt="what"/>
      <div className={styles.input}>
      <input type="text" placeholder="아이디"/>
      
      <input type="text" placeholder="비밀번호"/>
      </div>
      <div className={styles.login_btn}>
      <button  >
        <Link to={`/Next`}>로그인</Link></button>
      </div>
      <div className={styles.join}>
      <h4>아직 회원이 아닌가요?  <span>회원가입</span> </h4> 
      
      <h3>비밀번호 찾기</h3>
      </div>
    </div>

    )
}

export default Home;