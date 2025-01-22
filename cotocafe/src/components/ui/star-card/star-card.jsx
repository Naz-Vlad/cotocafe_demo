import Title, {TitleSize} from "../title/title";
import "./style.css"

function StarCard() {
	 return (
		<article className="star-card">
			<figure className="star-card__figure">
				<img className="star-card__image"
				  src="/src/assets/cat_1.png"
          width={313}
          height={313}
          alt="изображение кота"
				/>
				 <span className="star-card__icon">Ласковый</span>
			</figure>
			<Title size={TitleSize.SMALL}>Кошка Сью</Title>
			<p className="star-card__text"> Эта юная красавица очень общительная и ласковая<br/> уже с первого дня, как
			приехала в кафе.
			</p>
		</article>
	 )
}

 export default StarCard;
