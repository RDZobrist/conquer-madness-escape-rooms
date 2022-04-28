import React, {lazy, Suspense} from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
//Pages

const Footer = lazy(()=>import('./components/Footer/Footer'));
const Home = lazy(() => import('./screens/Home')); 
const Gallery = lazy(() => import('./screens/Gallery/Gallery.screen'));
const BirthdayParties = lazy(() => import('./screens/BirthdayParties/BirthdayParties.screen'));
const FAQs = lazy(() => import('./screens/FAQ/FAQ.screen'));
const CorporateEvents = lazy(() => import('./screens/CorporateEvents/CorporateEvents.screen'));
const Contact = lazy(() => import('./screens/Contact/Contact.screen'));
const SpecialEvents = lazy(() => import('./screens/SpecialEvents/SpecialEvents.screen'));

function App() {
	return (
		

		<Router>


			<GlobalStyle />


			<Navbar />
			<Switch>

				<Route exact path='/' component={Home } />
				<Route exact path='/gallery' component={Gallery} />

				<Route exact path='/birthday-parties' component={BirthdayParties } />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/corporate-events' component={CorporateEvents} />
				<Route exact path='/faq' component={FAQs} />
				<Route exact path='/special-events' component={SpecialEvents} />
			</Switch>
			<Footer />

		</Router>
		
	);
}

export default App;
