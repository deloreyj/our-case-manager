import React, { FC } from 'react';

import './Header.css';
import { Flex, Image } from '@adobe/react-spectrum';

import Logo from '../../assets/OUR-logo.png';

export interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
	return (
		<Flex gridArea="header" justifyContent="space-between" alignItems="center">
			<Image src={Logo} alt="Operation Underground Railroad logo" objectFit="none" />
			<span>Search content</span>
			<span>Right content</span>
		</Flex>
	);
};

export default Header;
