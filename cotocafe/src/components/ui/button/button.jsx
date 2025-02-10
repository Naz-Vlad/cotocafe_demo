import {StyledButton} from './styles'

function Button({children, minWidth, link, className}) { //добавляем в парам. minWidth, link, claccName

	//в атрбут компанента записываем мин-ширину, а также, если link? то переход по ссылки, если нет добавляется класс и тип button
	return (
	  <StyledButton $minWidth={minWidth}
			{...(link ? { href: link } : { as: "button", type: "button" })}
			className={className}>
			{children}
		</StyledButton>
	)
}

export default Button
