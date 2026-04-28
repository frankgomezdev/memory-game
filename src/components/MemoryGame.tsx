import { useState } from "react";
import shuffle from 'lodash/shuffle'


function createInitialCards(images) {
        const duplicatedImages = [...images, ...images]
        const cards = duplicatedImages.map((item, index) => {
            return {id: index, src: item, isMatched: false}
        })
        const shuffledCards = shuffle(cards);
        return shuffledCards;
    }

function MemoryGame({ images }) {
    const [cards, setCards] = useState(() => createInitialCards(images))
    const [flippedIds, setFlippedIds] = useState([])

    const handleClick = (id) => {
        const clickedCard = cards.find(card => card.id === id)
        if(clickedCard?.isMatched) {
            return null;
        } else if(flippedIds.includes(clickedCard.id)){
            return null;
        } else if(flippedIds.length >= 2) {
            return null;
        } else {
            setFlippedIds([...flippedIds, clickedCard.id])
            const firstCard = cards.find(card => card.id === flippedIds[0])
            const secondCard = clickedCard
            if(flippedIds.length == 1) {
                if(firstCard.src === secondCard.src){
                    setCards(cards.map(card => card.src == firstCard.src ? {...card, isMatched: true} : card))
                    setFlippedIds([])
                } else {
                setTimeout(() => {
                    setFlippedIds([])
                }, 1000)
            }
            } 
        }
    }

    return (
        <div>
        {cards.map((card) => (
            <Card key={card.id} id={card.id} src={card.src} isMatched={card.isMatched} isFlipped={flippedIds.includes(card.id)} onClick={handleClick}/>
           
        ))}
         </div>
    )
}

export default MemoryGame;