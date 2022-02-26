import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import LogoImage from "../public/img/coinone_logo_blue.svg"
import ticketImageLager from "../public/img/gnb-banner-20210901.png"
import ticketImageSmall from "../public/img/gnb-banner-icon-20210901.png"
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftLogo}>
          <LogoImage/>
        </div>
      </div>
      <div className={styles.center}>
        <ul className={styles.centerList}>
          <li> <button className={[styles.btn, styles.centerListBtn].join(" ")}>간편구매</button> </li>
          <li> <button className={[styles.btn, styles.centerListBtn].join(" ")}>거래소</button> </li>
          <li> <button className={[styles.btn, styles.centerListBtn].join(" ")}>프로차트</button> </li>
          <li> <button className={[styles.btn, styles.centerListBtn].join(" ")}>자산</button> </li>
          <li> <button className={[styles.btn, styles.centerListBtn].join(" ")}>코인정보</button> </li>
          <li> <button className={[styles.btn, styles.centerListBtn].join(" ")}>플러스</button> </li>
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.rightMenu}>
          <div className={styles.rightTicket}>
            <div className={styles.rightTicketImageLager}>
              <Image src={ticketImageLager} alt=""/>
            </div>
            <div className={styles.rightTicketImageSmall}>
              <Image src={ticketImageSmall} alt=""/>
            </div>
          </div>
          <div className={styles.rightNotice}>
            <CampaignOutlinedIcon/>
          </div>
          <div className={styles.rightBtnGroup}>
            <button className={[styles.btn, styles.rightSignInBtn].join(" ")}>회원가입</button>
            <button className={[styles.btn, styles.rightLoginBtn].join(" ")}>로그인</button>
          </div>
          <select className={[styles.select, styles.rightSelectLanguage].join(" ")}>
            <option>KR</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Navbar
