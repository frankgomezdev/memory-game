import cardBack from '../assets/card_back.png'
interface CardProps {
    id: number;
    src: string;
    isMatched: boolean;
    isFlipped: boolean;
    onClick: (id: number) => void
}

function Card({ id, src, isFlipped, isMatched, onClick }: CardProps){
    const cardImgWidth = 175;
    const cardImgHeight = 200;
    return (
        <div onClick={() => onClick(id)}>
            {isFlipped || isMatched ? <img width={cardImgWidth} height={cardImgHeight} src={src} /> : <img width={cardImgWidth} height={cardImgHeight} src={cardBack} />}
        </div>
    )
}

export default Card