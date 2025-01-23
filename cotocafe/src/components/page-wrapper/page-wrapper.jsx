import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import MainPage from "../pages/main-page/main-page";
import "./style.css";

 function PageWrpapeer(prop) {
	return (
	  <div className="App">
      <Header/>
			<main className="page-wrapper__main">
				<MainPage {...prop} />
			</main>
		  <Footer/>
	  </div>
	);
  }

  export default PageWrpapeer
