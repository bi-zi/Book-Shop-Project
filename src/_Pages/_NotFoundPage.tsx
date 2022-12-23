import React from 'react';
import { Link } from 'react-router-dom';
import './_Style.css';

export const NotFoundPage = () => {
  return (
    <>
      <div className="not-found-page-container">
        <div>Страница не найдена</div>
        <Link to="/" className="not-found-page-container-redirect">
          Перейти на главную страницу
        </Link>
      </div>
    </>
  );
};
