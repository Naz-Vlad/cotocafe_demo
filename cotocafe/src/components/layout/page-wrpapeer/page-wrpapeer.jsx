//компанент для общей обёртки

import Header from "../../layout/header/header";// шапка
import Footer from "/src/components/layout/footer/footer"; // подвал
import MainPage from "/src/components/pages/main-page/main-page";//гл. страна
import "./style.css";

function PageWrpapeer({...prop}) { {/* функция создания общей обёртки с пропсами(массив созданных карточек с ключами) */}
	return (
	  <div className="App">
      <Header/>                {/* компанент шапки */}
			<main className="page-wrapper__main">
				<MainPage {...prop} /> {/* компанент главной страницы  с пропсами(массив созданных карточек с ключами)*/}
			</main>
		  <Footer/>                {/* компанент подвала */}
	  </div>
	);
  }

  export default PageWrpapeer
