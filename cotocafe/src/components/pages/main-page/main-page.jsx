import About from "/src/components/blocks/about/about";
import StarsList from "../../blocks/stars-list/stars-list";

function MainPage({ stars }) { {/*функция создания глав. страницы c карт.*/}
  return (
	  <>
		  <About/>                  {/* компанент блока <section clacc="about">*/}
			<StarsList stars={stars}/>{/*комп. блока <section clacc="star-list">*/}
	  </>
	)
}

export default MainPage;
