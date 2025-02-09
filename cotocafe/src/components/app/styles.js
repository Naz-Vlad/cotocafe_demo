// подключаем функцию  глабальных стилей из пакета styled-components
import { createGlobalStyle } from "styled-components";

// задаем глабальные стили
export const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}

body,
html {
  margin: 0;
}

body {
  position: relative;
  min-height: 100%;
  font-family: ${(props) => props.theme.fontFamily};// передаем из темы тип шрифта
  font-size: ${(props) => props.theme.fontSizeDefault};//передаем из темы иасштаб теста
  line-height: 27px;
  font-weight: 400;
  color: ${(props) => props.theme.colorBlackForText};//передаем из темы цвет теста
}
`;

//При этом мы не указали подключение шрифтов в createGlobalStyle. Дело в том, что styled-components плохо работают с @import. Поэтому рекомендуются вместо подключения шрифтов в стилях через import, подключать их в HTML через тег link
