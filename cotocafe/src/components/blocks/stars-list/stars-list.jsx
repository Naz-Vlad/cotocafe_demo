import Button from "../../ui/button/button";
import Title from "../../ui/title/title";
import "./style.css";

function StarsList() {
	return (
    <section className="star-list">
      <Title>Наши звезды</Title>
			<ul className="star-list__list">
				<li className="star-list__item">

				</li>
			</ul>
      <Button minWidth={353}>Купить билет</Button>
		</section>
	)
}

export default StarsList;
