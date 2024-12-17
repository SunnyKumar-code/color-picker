import styles from './card.module.css'
const Card = (props)=>{
    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.hex);
        alert(`Copied: ${props.hex}`); 
      };
    return(
<div className={styles.Card}  onClick={copyToClipboard}>
    <div className={styles.colorBox} style={{backgroundColor:props.hex}}></div>
    <div className={styles.text}>
        <p style={{fontSize:"18px"}}>{props.hex}</p>
        <p style={{ color: props.hex, fontSize: "12px" }}>{props.color}</p>
    </div>
</div>
    )
}
export default Card