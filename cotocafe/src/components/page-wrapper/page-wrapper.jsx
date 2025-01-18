import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import MainPage from "../pages/main-page/main-page";
import "./style.css";

 function PageWrpapeer() {
	return (
	  <div className="App">
        <Header/>
		<main className="page-wrapper__main">
			<MainPage/>
		</main>
		<Footer/>
	  </div>
	);
  }

  export default PageWrpapeer
