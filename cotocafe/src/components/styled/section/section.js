import styled from 'styled-components'; // подключили пакет стилей

// стилизуем секций(блоков) компанентов <About/> и <StarsList>
const Section = styled.section`
 display: flex;
  position: relative;
  box-sizing: border-box;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
`;

export default Section;
