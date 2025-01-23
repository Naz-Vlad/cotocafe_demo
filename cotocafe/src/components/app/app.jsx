import PageWrpapeer from "../page-wrapper/page-wrapper";
import "./style.css"
import starList from "../../mocks/starList";

export default function App() {
	return <PageWrpapeer stars = {starList}/> // передаем массив карточек с данными
  }
