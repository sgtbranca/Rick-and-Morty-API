import Card from '../Card/Card.module.css';


export default function Cards(props) {
   const {characters} = props;
   return (
      <div style={{display:"flex", justifyContent: "space-between"}}>
         {characters.map(character => (
            <Card 
               id = {character.id}
               key = {character.id}
               name = {character.name}
               species = {character.species}
               gender = {character.gender}
               image = {character.image}
               onClose ={props.onClose}
            />
         ))}
      </div>
   );
}
