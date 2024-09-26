import { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/About Me';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main id='main'>{renderPage()}</main>
      
      <footer id='footer'>
        <a href= "https://github.com/BrianMouraJr" id='link'> Github</a><br></br><a href= "https://www.linkedin.com/in/brian-moura-a232322b4/" id='link'> Linkedin</a><br></br><a href= "mailto:brian.capitaltrader@gmail.com" id='link'> Brian.capitaltrader@gmail.com</a>
      </footer>
    </div>
  );
}
