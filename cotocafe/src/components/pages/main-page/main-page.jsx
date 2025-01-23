import About from "/src/components/blocks/about/about";
import StarsList from "../../blocks/stars-list/stars-list";

function MainPage({ stars }) {
  return (
	  <div>
		  <About/>
			<StarsList stars={stars}/>
	  </div>
	)
}

export default MainPage;
