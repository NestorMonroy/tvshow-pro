import Router from 'next/router';
import styles from '../styles/Home.module.css'

const Home = () => null;

Home.getInitialProps = (context) => {
  console.log(process.browser)
  const country = context.query.country || 'us';
  
  process.browser ? 
    Router.replace('/[country]', `${country}`) :
    context.res.writeHead(302, { Location: `/${country}` });

  context.res.end();
}

export default Home;