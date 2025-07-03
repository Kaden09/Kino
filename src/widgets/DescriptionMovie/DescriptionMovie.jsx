import InfoMovie from '../InfoMovie/InfoMovie';
import PlotMovie from '../PlotMovie/PlotMovie';
import cl from './DescriptionMovie.module.css';

const DescriptionMovie = ({ movieData }) => {
	return (
		<div className={cl.container}>
			<PlotMovie>{movieData?.plot}</PlotMovie>
			<InfoMovie
				country={movieData?.country}
				categories={movieData?.categories}
			/>
		</div>
	);
};

export default DescriptionMovie;
