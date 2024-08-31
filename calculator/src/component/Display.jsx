import styles from "./Display.module.css"
function Display({disp}){
    return(
        <>
        <input className={styles.inputic} type="text" value={disp} readOnly/>
        </>
    )
}
export default Display;