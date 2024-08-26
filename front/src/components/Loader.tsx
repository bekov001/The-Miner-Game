import styles from "./loader.module.css";



export default function Loader() {
  return (
    <div style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent:'center', height: '100vh'}}>
      <div className={styles.loader}></div>
      {/* <p className={styles.text}>Loading...</p> */}
    </div>
  );
}