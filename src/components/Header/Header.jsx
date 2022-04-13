import React from "react"
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg' />
		</header>
	);
}

export default Header;