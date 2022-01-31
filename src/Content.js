import styles from "./Content.module.css";
function Content (){
    return(
<div>
    
        <div className={styles.top}>
            <h2>직원수정</h2>
            
            <button>직원</button>
            <button>아르바이트</button>
            <button>일용직</button>
            </div>
            <div className={styles.row}>
            <div >
            <p>이름</p>
            <input  type="text" placeholder="홍길동"/>
            <p>전화번호</p>
            <input type="number" placeholder="전화번호를 입력해 주세요."/>
            <p>직급</p>
            <input type="text" placeholder="-"/>
            </div>
            <div>
            <p>주민등록번호</p>
            <input type="number" placeholder="000000-0000000"/>
            <p>공제대상 가족 수</p>
            <input type="number" placeholder="3"/>
            <p>부서</p>
            <input type="text" placeholder="-"/>
            </div>
            </div>
</div>
    )
}

export default Content