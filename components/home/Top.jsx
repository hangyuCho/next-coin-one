import styles from "../../styles/home/Top.module.css"
import TextField from "@mui/material/TextField"

const Top = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.items}>
          <div className={styles.coinSearch}>
            <div className={styles.coinSearchArea}>
              <div className={styles.coinSearchAreaTitle}>
                <p>가상자산 첫 거래 안전하게,</p>
                <p>온리원 코인원</p>
              </div>
              <div className={styles.status24h}>264,404,334,447 원 (24시간 거래대금)</div>
              <div className={styles.searchText}>
                <TextField label="Ontlined" variant="outlined"></TextField>
              </div>
              <div className={styles.help}></div>
            </div>
          </div>
          <div className={styles.coinNews}>
            <div className={styles.coinNewsTop}>
              <div className={styles.coinNewsDate}>
                <p>Coinnews 2022.02.25 금요일 소식</p><div>refresh</div>
              </div>
              <div className={styles.coinNewsBtnGroup}>
                <div className={styles.btnGroup}>
                  <button className={styles.btn} type="button">🔺</button>
                  <button className={styles.btn} type="button">🔻</button>
                </div>
              </div>
            </div>
            <div className={styles.coinNewList}>
              <div className={styles.coinNewsCard}>
                <div className={styles.coinNewsTime}>35분전</div>
                <div className={styles.coinNewsDesc}>아르카 CIO "똑똑한 투자자, 거래소 토큰에 투자하고 있다"</div>
              </div>
            </div>
          </div>
          <div className={styles.coinRanking}>
            <div className={styles.coinRankingTop}>
              <div className={styles.coinRankingTopTitle}>
                <div>logo</div>
                <div>가상자산 랭킹 top7</div>
              </div>
              <div className={styles.coinRankingTopMore}>
                <span>더 보러가기</span>
              </div>
            </div>
            <div className={styles.coinRankingTable}>
              <table>
                <thead>
                  <tr>
                    <th>th</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>td</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
