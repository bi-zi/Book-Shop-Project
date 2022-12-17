import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { setSortBooks } from '../../store/Books/Slice';
import { Link } from 'react-router-dom';
import { HighResolution } from './HighResolution/HighResolution';
import './Style.css';
import { SmallResolution } from './SmallResolution/SmallResolution';

export const Header = () => {
  const dispatch = useAppDispatch();

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
        <input name="s" placeholder="Найти книгу..." className="seacrch_input" type="text" />
      </form>

      {windowWidth > 768 ? <HighResolution /> : <SmallResolution />}
    </div>
  );
};
