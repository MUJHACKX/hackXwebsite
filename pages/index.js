import Heading from '../components/LandingPage/Heading.jsx'
import Cards from '../components/LandingPage/Cards.jsx'
import Sponsor from '../components/LandingPage/Sponsor.jsx'
import Teaser from '../components/LandingPage/Teaser.jsx'
import Footer from '../components/LandingPage/Footer.jsx'

const Home = () => {
 

  return (
 
<div className='w-full h-full' style={{ backgroundColor: '#010113' }}>
<Heading /> 
<Cards/>
<Sponsor/>
<Teaser />
<Footer />

    </div>
    
  );
};

export default Home;
