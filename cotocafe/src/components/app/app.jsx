//App — компонент приложения.
//В самом App мы используем style.css, чтобы задать стили <html> и <body>

import PageWrpapeer from "../layout/page-wrpapeer/page-wrpapeer";//главная обертка
import starList from "../../mocks/starList";//массив карточек(объектов) с данными
import { GlobalStyle } from "./styles";

function App() {
	return (
		<>
			<GlobalStyle />
			<PageWrpapeer stars = {starList}>   {/*передаем массив объектов с данными*/}
        кантент страницы
			</PageWrpapeer>
		</>
	  );
  }

	export default App ;
