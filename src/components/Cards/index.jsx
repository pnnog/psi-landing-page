import Card from "./Card"
import cards from 'components/Cards/data.json'

const Cards = () =>{
    return (

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-32 pt-4 lg:pt-8">
        {cards.map(card=> (
          <li key={card.title}> 
            <article> {<Card {...card}/>} </article>
          </li>
        ) )}
      </ul>

    )
}

export default Cards