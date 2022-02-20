import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.logo}></div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles}> <button>간편구매</button> </li>
            <li className={styles}> <button>거래소</button> </li>
            <li className={styles}> <button>프로차트</button> </li>
            <li className={styles}> <button>자산</button> </li>
            <li className={styles}> <button>코인정보</button> </li>
            <li className={styles}> <button>플러스</button> </li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles}>
            <div className={styles}>Ticket</div>
            <div className={styles}>Notice</div>
            <div className={styles}>
              <button>회원가입</button>
              <button>로그인</button>
              <select>
                <option>KR</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.item}>
        </div>
        <div className={styles.item}>
        </div>
        <div className={styles.item}>
        </div>
        <div className={styles.item}>
        </div>
      </div>
    </div>
  )
}

export default Navbar
