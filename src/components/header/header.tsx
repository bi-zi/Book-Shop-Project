import React from 'react';
import { Link } from 'react-router-dom';
import { Resolution } from './Resolution/Resolution';
import './Style.css';

export const Header = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <div className="header">
      <Link to="/" className="header-web-site-name">
        Book Shop
      </Link>

      <form action="" method="get">
        <input className="header-input" placeholder="Найти книгу..." type="text" />
      </form>

      <input id="header__toggle" type="checkbox" hidden />
      <label className="header__burger" htmlFor="header__toggle">
        <span></span>
      </label>

      {windowWidth > 768 ? (
        <Resolution />
      ) : (
        <ul className="header__box">
          <Resolution />
        </ul>
      )}
    </div>
  );
};
