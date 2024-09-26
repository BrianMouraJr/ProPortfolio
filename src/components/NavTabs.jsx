function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" id="navigate">
      <h1 id="title">Brian Moura</h1>
      <li className="nav-item" id="navi">
        <a href="#About Me" onClick={() => handlePageChange('About Me')} className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}>
          About
        </a>
      </li>
      <li className="nav-item" id="navi">
        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </a>
      </li>
      <li className="nav-item" id="navi">
        <a href="#Contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </a>
      </li>
      <li className="nav-item" id="navi">
        <a href="#Resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
