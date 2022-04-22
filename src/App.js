import React, { lazy, Suspense } from 'react';
import Header from './components/Header/Header.component';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.component';
import Spinner from './components/Spinner/Spinner.component';

import HomePageScreen from './screens/HomePage/HomePage.screen';
const EscapeRooms = lazy(() => import('./screens/EscapeRooms/EscapeRooms.screen'));
const BirthdayParties = lazy(() => import('./screens/BirthdayParties/BirthdayParties.screen'));
const FAQs = lazy(() => import('./screens/FAQ/FAQ.screen'));
const Gallery = lazy(() => import('./screens/Gallery/Gallery.screen'));
const Hours = lazy(() => import('./screens/Hours/Hours.screen'));
const Reviews = lazy(() => import('./screens/Reviews/Reviews.screen'));
const CorporateEvents = lazy(() => import('./screens/CorporateEvents/CorporateEvents.screen'));
const Contact = lazy(() => import('./screens/Contact/Contact.screen'));
function App() {
  return (
    <Router>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route exact path='/' element={<HomePageScreen />} />
            <Route exact path='/escape-rooms' element={<EscapeRooms />} />
            <Route exact path='/birthday-parties' element={<BirthdayParties />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/corporate-events' element={<CorporateEvents />} />
            <Route exact path='/faq' element={<FAQs />} />
            <Route exact path='/reviews' element={<Reviews />} />
            <Route exact path='/hours' element={<Hours />} />
            <Route exact path='/gallery' element={<Gallery />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}





export default App;

