import styles from "./Btn.module.css";
function Btn() {
  const yh = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btns}>
      {yh.map((item => 
        <button className={styles.btn}>{item}</button>
      ))}
    </div>
  );
}
export default Btn;
