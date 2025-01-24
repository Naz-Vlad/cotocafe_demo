import Title, {TitleSize} from "../title/title";
import StarIcon from "../star-icon/star-icon";
import "./style.css"


function StarCard({name, about, feature, image}) { // ф-ия карточки кота
	 return (
		<article className="star-card">
			<figure className="star-card__figure">
				<img className="star-card__image"
				  src={image}
          width={313}
          height={313}
          alt="изображение кота"
				/>
        <StarIcon className="star-card__icon" feature={feature} />
			</figure>
			<Title size={TitleSize.SMALL}>{name}</Title>
			<p
        className="star-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
		</article>
	 )
}

 export default StarCard;
