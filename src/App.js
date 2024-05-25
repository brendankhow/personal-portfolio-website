// import logo from './logo.svg';
// import './App.css';
// import Header from './components/header/Header';
// import Home from './components/home/Home';
// import About from './components/about/About';
// import Skills from './components/skills/Skills';
// import Qualification from './components/qualification/Qualification';
// import Experience from './components/experience/Experience';
// import Testimonials from './components/testimonials/Testimonials';
// import Project from './components/project/Project';
// import Certifications from './components/certifications/Certifications';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
// import ScrollUp from './components/scrollup/ScrollUp';

// function App() {
//   return (
//     <>
//     <Header />

//     <main className='main'>
//       <Home />
//       <About />
//       <Skills />
//       <Qualification />      
//       <Experience />  
//       <Testimonials />   
//       <Project />  
//       <Certifications />  
//       <Contact />    
      
//     </main>
//       <Footer />  
//       <ScrollUp /> 

//     </>
//   );
// }

// export default App;
import React, { Suspense, lazy } from 'react';
// import logo from './logo.svg';
import Spinner from './components/Spinner';
import './App.css';
const Header = lazy(() => import('./components/header/Header'));
const Home = lazy(() => import('./components/home/Home'));
const About = lazy(() => import('./components/about/About'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Qualification = lazy(() => import('./components/qualification/Qualification'));
const Experience = lazy(() => import('./components/experience/Experience'));
const Testimonials = lazy(() => import('./components/testimonials/Testimonials'));
const Project = lazy(() => import('./components/project/Project'));
const Certifications = lazy(() => import('./components/certifications/Certifications'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));
const ScrollUp = lazy(() => import('./components/scrollup/ScrollUp'));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
      </Suspense>

      <main className='main'>
        <Suspense fallback={<Spinner />}>
          <Home />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Qualification />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Project />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<Spinner />}>
        <Footer />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ScrollUp />
      </Suspense>
    </>
  );
}

export default App;