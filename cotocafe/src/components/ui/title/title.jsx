import "./style.css";

// создаем объект для загаловков, ключ - велечина заголовка, значение ключа - прописывается в стилях 
export const TitleSize = { // РазмерТекста
  BIG: "big",      // БОЛЬШОЙ: большой
  SMALL: "small",  // МАЛЕНЬКИЙ: маленький
  DEFAULT: ""      // ПО УМОЛЧАНИЮ
};

function Title({children, size}) { // в параметрах указываем; {дети, размер}
  return (
    <h1 className={`title${size ? `title_${size}` : ""}`}> {children} </h1>
  ) // 
}

export default Title