import cards from 'components/Cards/data.json';
import Card from './Card';
import { grid } from 'components/UI';

const Cards = () =>{
  return (
    <ul className={grid({type:'cards'})}>
      {cards.map(card=> (
        <li key={card.title}> 
          {<Card {...card}/>} 
        </li>
      ))}
    </ul>

  );
};

export default Cards;
