import bgImg from "../../shared/assets/bgImg.jpg";
import cl from './Header.module.css';
import InfoAboutSubscribe from '../InfoAboutSubscribe/InfoAboutSubscribe';

const Header = () => {
	localStorage.setItem('bgImg', bgImg);

	return (
		<header className={cl.header}>
			<img
				src={localStorage.getItem('bgImg')}
				alt="bgImg"
				className={cl.bgImg}
			/>
			<InfoAboutSubscribe />
		</header>
	);
};

export default Header;
