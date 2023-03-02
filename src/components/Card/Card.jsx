import styles from "./Card.module.css"

function Card({ name, gender, onClose, species, image }) {
   return (
      <div className={styles.container}>
      <div className={styles.buttonContainer}>
         <button onClick={onClose}>X</button>
     </div>
      <div className={styles.dataContainer}>
         <h2>{name}</h2>
         <h4>{species}</h4>
         <h4>{gender}</h4>
     </div>
         <img  className={styles.image} src={image} alt="name" /> 
      </div>
   );
}
export default Card;