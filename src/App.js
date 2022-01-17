import './App.css';
import { Routes, Route } from "react-router-dom";

// Pages
import Main from './pages/main/main';
  // Store
import Api from './pages/api/api';
import AirportTools from './pages/airport-tools/airport-tools'
import DataAnalyticsReports from './pages/data-analytics-reports/data-analytics-reports'
import GetReceiver from './pages/get-receiver/get-receiver'
  // Subscription plans
import SubscriptionPlans from './pages/subscription-plans/subscription-plans';
  // Share Data
import ShareYourData from './pages/share-your-data/share-your-data';
import SharePhotosVideos from './pages/share-photos-videos/share-photos-videos';
import ShareInformation from './pages/share-information/share-information';
  // Data / History
import Aircraft from './pages/aircraft/aircraft';
import Airports from './pages/airports/airports';
import Airlines from './pages/airlines/airlines';
import Flights from './pages/flights/flights';
import Statistics from './pages/statistics/statistics';
  // About us
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Faq from './pages/faq/faq';
import TermsAndConditions from './pages/terms-and-conditions/terms-and-conditions';
import Forums from './pages/forums/forums';
  // Account
import MyAccount from './pages/my-account/my-account';

// Components
import Header from './layouts/header/header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route exact path='/api' element={<Api />} />
        <Route exact path='/airport-tools' element={<AirportTools />} />
        <Route exact path='/data-analytics-reports' element={<DataAnalyticsReports />} />
        <Route exact path='/get-receiver' element={<GetReceiver />} />

        <Route exact path='/subscription-plans' element={<SubscriptionPlans />} />

        <Route exact path='/share-your-data' element={<ShareYourData />} />
        <Route exact path='/share-photos-videos' element={<SharePhotosVideos />} />
        <Route exact path='/share-information' element={<ShareInformation />} />

        <Route exact path='/aircraft' element={<Aircraft />} />
        <Route exact path='/airports' element={<Airports />} />
        <Route exact path='/airlines' element={<Airlines />} />
        <Route exact path='/flights' element={<Flights />} />
        <Route exact path='/statistics' element={<Statistics />} />

        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/faq' element={<Faq />} />
        <Route exact path='/terms' element={<TermsAndConditions />} />
        <Route exact path='/forums' element={<Forums />} />

        <Route exact path='/my-account' element={<MyAccount />} />
      </Routes>
    </>
  );
}

export default App;
