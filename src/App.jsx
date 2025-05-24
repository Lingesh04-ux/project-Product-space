import './styles/Global.scss';
import Header from "./components/Header";
import './styles/Header.scss'
import HeroSection from './components/HeroSection';
import './styles/HeroSection.scss';
import Slider3 from './components/Slider3';
import './styles/Slider3.scss';
import Career from './components/Career';
import './styles/Career.scss';
import Brands from './components/Brands';
import './styles/Brands.scss';
import ProductspaceSlider from './components/ProductspaceSlider';
import ProductspaceSliderMobile from './components/MobileView/ProductspaceSliderMobile';
import './styles/MobileView/ProductspaceSliderMobile.scss'
import ProgramsOffer from './components/ProgramsOffer';
import './styles/ProgramsOffer.scss';
import StudentsCaseStudies from './components/StudentsCaseStudies';
import './styles/StudentsCaseStudies.scss';
import RealSuccess from './components/RealSuccess';
import './styles/RealSuccess.scss';
import LearnBest from './components/LearnBest';
import './styles/LearnBest.scss';
import Events from './components/Events';
import './styles/Events.scss';
import PastEvents from './components/PastEvents';
import './styles/PastEvents.scss';
import FaqSection from './components/FaqSection';
import './styles/FaqSection.scss';
import Footer from './components/Footer';
import './styles/Footer.scss';

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Slider3/>
      <Career/>
      <Brands/>
      <ProductspaceSlider/>
      <ProductspaceSliderMobile/>
      <ProgramsOffer/>
      <StudentsCaseStudies/>
      <RealSuccess/>
      <LearnBest/>
      <Events/>
      <PastEvents/>
      <FaqSection/>
      <Footer/>
    </>
  )
}

export default App
