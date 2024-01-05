import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Poppins', sans-serif;
		font-size: 18px;
		font-style: normal;
		font-weight: 300;
		color: #CCC;
		background-color: #191919;
	}

	a {
		font-size: 20px;
		font-weight: 500;
		text-decoration: none;
		color: #A7A7A7;

		&:hover {
			color: #e70faa;
		}
	}

	ul,
	li {
		list-style: none;
	}
`;

export default GlobalStyles;
