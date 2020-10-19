import axios from 'axios'
import Thumbnail from '../../components/Thumbnail';
import Link from 'next/link'

const Home = ({ shows }) => {

    const renderShows = () => {
        return shows.map((showItem, index) => {
            const { show } = showItem;
            return (
                <li key={index} >
                    <Thumbnail 
                        imageUrl={(show.image && show.image.medium || undefined)} 
                        caption={show.name}  
                    />
                </li>
            )
        })
    }

    return (
        <div className="home">
        <ul className="tvshows-grid">
            {renderShows()}

            <style jsx>{`
                .tvshows-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }
            `}</style>
        </ul>
    </div>
    )
}

Home.getInitialProps = async context => {
    //console.log(context)
    const country = context.query.country || 'us';

    const response = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)

    return {
        shows: response.data
    }
}

export default Home;