import Button from "../../ui/button/button";

function Nav() {
	// добавили в атрибуты кнопки мин-ширины и ссылку
	return (
    <nav>
		  <Button minWidth={260} link="/buy">Купить билет</Button>
	  </nav>
	)
}

export default Nav;
