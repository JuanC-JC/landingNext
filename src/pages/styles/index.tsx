import styled, { MainTheme } from "styled-components"

export const HomeStyled = styled.div.attrs({
	className: "home"
})`
	& > div {
		scroll-margin-top: 80px;
	}
	/*  */
`
//background: ${({ theme }: { theme: MainTheme }) => theme.colors.primary}
