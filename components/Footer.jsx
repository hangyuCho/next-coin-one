import styles from "../styles/Footer.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import BookIcon from '@mui/icons-material/Book';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}> <div className={styles.left}>
          <div className={styles.leftTop}>
            <div className={styles.title}>고객센터</div>
            <p className={styles.text}><b>전화상담</b> 1670-9756(평일 10:00~19:00 / 주말 및 공휴일 휴무)</p>
            <p className={styles.text}><b>1:1 채팅상담</b> <b>카카오톡 상담</b> <b>온라인 고객센터</b> (24시간 운영)</p>
            <p className={styles.text}><b>오프라인 고객센터</b> 서울특별시 용산구 한강대로 69 용산푸르지오써밋 1층 (평일 10:00~18:00 / 주말 및 공휴일 휴무)</p>
          </div>
          <div className={styles.leftBottom}>
            <p className={styles.text}>(주)코인원 | 대표이사 차명훈 | 사업자등록번호 261-81-07437</p>
            <p className={styles.text}>서울특별시 용산구 한강대로 69 (한강로2가, 용산푸르지오써밋) 4층, 코인원 (우 04378)</p>
            <p className={styles.text}><EmailIcon/> <b>상장문의</b> <b>제휴문의</b></p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightItem}>
            <div className={styles.title}>회사</div>
            <ul className={styles.rightList}>
              <li>회사소개</li>
              <li><b>코인원코어</b></li>
              <li>채용</li>
              <li>상장 신청</li>
            </ul>
          </div>
          <div className={styles.rightItem}>
            <div className={styles.title}>안내</div>
            <ul className={styles.rightList}>
              <li>이용안내</li>
              <li>보안안내</li>
              <li>계정정보변경</li>
              <li>상장 정책 안내</li>
              <li>계정잠금</li>
              <li>세금관련</li>
            </ul>
          </div>
          <div className={styles.rightItem}>
            <div className={styles.title}>정책</div>
            <ul className={styles.rightList}>
              <li>이용약관 및 규정</li>
              <li>API 이용약관</li>
              <li><b>개인정보 처림방침</b></li>
              <li><b>영상정보처리기기 운영•관리방침</b></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles}></div>
        <div><button className={[styles.btn, styles.apiBtn].join(" ")}>API 설정</button></div>
      </div>
      <hr/>
      <div className={styles.row}>
        <div className={styles.snsBtnGroup}>
          <FacebookIcon/>
          <BookIcon/>
          <YouTubeIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
        </div>
        <p className={styles.text}>Copyright © Coinone, Inc. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
