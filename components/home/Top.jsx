import styles from "../../styles/home/Top.module.css"
import TextField from "@mui/material/TextField"

const Top = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.items}>
          <div className={styles.coinSearch}>
            <div className={styles.coinSearchArea}>
              <div className={styles.coinSearchAreaTitle}>원칙을 지키는 가상자산 거래소 코인원</div>
              <div className={styles.status24h}>264,404,334,447 원 (24시간 거래대금)</div>
              <div className={styles.searchText}>
                <TextField></Texteld>
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
                <div className={styles.coinNewsTime}></div>
                <div className={styles.coinNewsDesc}></div>
              </div>
            </div>
          </div>
          <div className={styles.coinRanking}>
            <div className={styles.coinRankingTop}>
              <div className={styles.coinRankingTopTitle}></div>
              <div className={styles.coinRankingTopMore}></div>
            </div>
            <div className={styles.coinRankingGrid}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.coinRankingLogo}></div>
                  <div className={styles.coinRankingCoinAlias}></div>
                  <div className={styles.coinRankingCoinName}></div>
                </div>
                <div className={styles.col}>
                  <div className={styles.price}></div>
                </div>
                <div className={styles.col}>
                  <div className={styles.percent}></div>
                </div>
                <div className={styles.col}>
                  <div className={styles.trade}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
