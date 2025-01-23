import Button from "../../ui/button/button";
import StarCard from "../../ui/star-card/star-card";
import Title from "../../ui/title/title";
import "./style.css";

function StarsList({ stars }) {
	return (
		<section className="star-list">
			{stars?.length ? ( // проверяем списое еотов на массив
			  <>
          <Title>Наши звезды</Title>
			    <ul className="star-list__list">
				  {/* Внутри компонента StarList нужно каждый элемент массива stars превратить в компонент StarCard. 
				  Используем для этого map для перебора м, по id - key={star.id} */}
				    {stars.map((star) => ( 
					    <li className="star-list__item" key={star.id}>
								<StarCard {...star} />
					    </li>
				    ))}
			    </ul>
					<Button minWidth={353}>Купить билет</Button>
				</>
		  ) : null}
		</section>
	)
}

export default StarsList;
