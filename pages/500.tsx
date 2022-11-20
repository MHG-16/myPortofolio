import styles from "../styles/500.module.css"

export default function Page500(){
    return (<div className={styles.screen}>
    <div className={styles.titleError}>
      <h2>4&#128557;0 </h2>
      <h3>
        Opps....
        <br />
        Error send data to server
      </h3>
    </div>
    <div className={styles.content}>
      <p>
        Sorry, please try again later or send a message to the technique
        teams <a href="#">here</a>.
      </p>
    </div>
    <div className={styles.btn}>
      <button>Back to home page</button>
    </div>
  </div>)
}