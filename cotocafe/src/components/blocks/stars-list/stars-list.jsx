import Button from "../../ui/button/button";
import StarCard from "../../ui/star-card/star-card";
import Title from "../../ui/title/title";
import "./style.css";

function StarsList({ stars }) { // создаем компанент со списком карточек
	return (
		<section className="star-list">
			{stars?.length ? ( //нужно учесть, что в списке котов по ошибке может прийти не массив, проверяем это
			  <>
          <Title>Наши звезды</Title> {/*заголовок компонета */}
			    <ul className="star-list__list">
				  {/* Внутри компонента StarList нужно каждый элемент массива stars превратить в компонент StarCard. Используем для этого map. на экран будет выведено столько карточек, сколько есть элементов в массиве stars */}
				    {stars.map((star) => (//функция содания комп.(карточек с ключами)
					    <li className="star-list__item" key={star.id}>
								<StarCard {...star} />{/*комп. масс. карт. котов с ключами*/}
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
