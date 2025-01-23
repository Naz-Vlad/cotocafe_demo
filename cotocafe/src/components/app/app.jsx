//app — компонент приложения.

import PageWrpapeer from "../layout/page-wrpapeer/page-wrpapeer";//гл. обертка
import "./style.css"
import starList from "../../mocks/starList";// массив карточками(объектов) с данными о котах

function App() {
	return <PageWrpapeer stars = {starList}/> // передаем массив карт. с данными(значением клчей)
  }

	export default App ;
