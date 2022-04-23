import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import uniqid from 'uniqid';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addItem } from '../../store2/actions/cart';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { useGlobalEvent } from 'beautiful-react-hooks';
import './productCard.css';
import SingleComment from './singleComment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface Foo {
  items: any[];
  addItem: any;
}

//      ⠀⠀⣶⣦⠀⣶⡆⢠⣴⠶⣶⣄⠀⠀⠀⢠⣴⠶⠶ ⢀⣴⠶⢶⣄ ⣠⡴⠶⣶⡄ ⣶⠶⣶⣄⠀⠀ ⢀⣴⠶⠶⠄⢠⡴⠶⢶⡄⠀⣶⠶⣶⣄⢰⡶⠶⠖⢠⠶⢶⡄⠀
//       ⢠⣿⢻⡄⣿⢠⣿⠃⠀⢸⣿⠀⠀⢰⣿⠁⢠⣤⠀⣿⡇⠀⠀⣿⢸⣿⠁⠀⣿⡇⢰⣿⠀⢸⣿⠀⠀⠀⣿⠁⠀⠀⢰⣿⠁⠀⢸⡟⢰⣿⠀⢸⣿ ⣿⣷⢶⠀⠀⣤⠟⠁⠀
//   ⠀⠀⠀⠼⠏⠀⠿⠇⠈⠻⢧⡤⠿⠃⠀⠀⠘⠿⣦⡤⠿⠀⠻⢧⣤⠾⠃⠘⠿⣤⡴⠟⠀⠿⠧⠴⠾⠃⠀⠀⠀⠿⣦⣤⠴⠘⠿⣦⡤⠟ ⠾⠧⠤⠾ ⠸⠿⠤⠤⠀⠠⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡂⡢⢂⠢⢂⠢⢂⠢⢂⠢⢂⢂⢂⢂⢰⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢠⢂⢂⠢⢂⢂⠆⡊⠔⡐⢌⢐⠔⡨⢐⢐⠌⠔⡐⢌⢐⠔⡐⠔⡐⠔⡐⠔⡐⢔⠨⡐⡐⢔⠨⡐⡐⠌⢔⠠⠡⢊⠄⢅⠕⡨⠢⡑⢅⠢⢂⠢⢸⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠨⢂⠢⡡⡑⡐⠅⢌⢂⠪⡐⡐⠌⠔⡡⢂⠪⡈⡢⢁⢂⢊⠔⠡⡊⠌⢔⠡⢊⢐⠌⡐⢌⢐⠔⡐⠌⢌⠂⢅⠅⢕⢈⢂⠪⡐⢕⠸⡐⠅⢕⠨⢸⠀⠀⠀⠀⠀
//           ⡇⢅⠕⡐⢌⢌⢊⢢⠡⡑⡐⢌⠪⡈⡢⢑⠌⡢⠨⡂⢕⠠⡡⡑⡐⡑⡐⢅⢑⠄⢕⠨⢂⠢⡁⡪⢈⠢⠡⠡⢊⠔⡨⠢⡑⡌⡪⡘⢌⢊⢂⠪⣸⠀⠀⠀⠀⠀
//           ⢇⠢⡑⢅⠕⡐⡅⢕⢑⠌⡌⡢⡑⡰⡈⡢⡑⢌⢌⢌⠢⡑⡰⡈⡢⢊⢌⢂⠢⡡⡑⢌⠢⡑⡐⢌⢂⠅⢕⠡⠡⡊⠔⡑⡌⢆⢕⢘⠔⡑⢌⠢⠺⠀⠀⠀⠀⠀
//            ⢑⢌⢌⢢⢑⢕⠜⢌⠢⡑⠔⠔⢔⠔⢌⢂⠪⡰⠰⡐⡑⢌⠢⡂⣊⠢⠢⡡⡑⠔⢌⠢⠡⡂⡪⢐⠄⢕⠐⠅⢕⢐⢅⠕⢜⠰⡡⡡⢱⠨⠢⡑⡅⠀⠀⠀⠀⠀
//           ⢕⠰⡨⡢⡣⡑⡅⡣⢑⢌⠪⡑⡑⡌⣊⢢⠱⡨⠪⡨⢊⠢⡑⡌⡢⡑⡱⡐⠜⢌⠢⡑⡑⠔⢌⠢⠡⡑⢌⢊⠢⡑⡔⢕⢅⠣⠪⡨⠢⡑⡅⡣⠇⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢀⡊⡢⡱⡱⡑⠕⢌⠢⡊⠔⠔⢅⢕⢑⢌⠢⡢⡃⢎⠪⡨⡂⡣⡑⡌⡢⡊⡢⡊⡪⡨⡊⡢⡑⢅⠕⢌⠪⡈⡢⢡⠱⡨⡊⢆⢕⢑⢕⢘⢌⠪⡂⣳⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠸⡨⡊⢎⢢⢑⢑⠅⢕⠨⡘⢌⠢⡑⢕⢌⠪⡢⡊⢆⠣⡊⢆⠕⡌⢆⢕⢌⢆⢎⢢⢢⠱⡐⡌⡢⡡⡡⡑⢌⢌⠢⡱⡐⡅⢇⠪⡢⡑⡌⢆⢣⠱⡅⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢠⢣⠱⡘⢌⠢⡑⢌⢌⠢⡑⠌⠢⡑⢌⢆⢣⠱⡨⢪⢘⢌⠪⡂⢇⠪⡢⢱⠨⡢⢣⢱⢑⢕⢕⠜⡔⢌⢆⠪⡢⡡⡃⢎⢌⢎⠪⡊⢆⢕⠸⡨⡢⡫⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢈⠆⠕⢌⠢⡑⢌⢂⠢⠁⠂⡁⠅⡊⡢⠂⠕⡅⡣⡱⢨⠢⢣⢑⢅⠣⡊⡢⡱⡘⡌⡪⡊⢎⢆⢇⢇⠇⡎⡪⢢⢪⠸⡨⡢⡃⡇⡣⡱⡨⢪⠸⣬⠃⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⡁⠅⠡⠈⠐⠀⠄⠀⠄⠡⠠⡑⠔⢌⠪⢀⠊⠢⡊⢆⠣⡱⡐⢅⠕⢌⠢⡊⡢⢱⠨⡊⡪⢢⠣⡱⡑⡕⡜⢜⢔⢕⢕⢜⢌⠪⡢⡑⢜⢸⡸⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢀⠀⠠⠀⢈⠀⡁⠄⡁⡊⢌⠪⡨⢊⠢⡑⢅⢂⠐⠈⠄⠕⠰⠨⠢⡑⠅⢕⠑⢌⠆⡣⡑⢜⠰⡑⡅⢇⢎⢎⢎⢎⢎⢆⢣⢊⠪⢢⢑⢕⠵⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠈⠒⢂⠔⡐⡰⢐⠅⡪⡈⡢⡑⢌⠢⡑⢌⠢⡑⢌⠔⡠⠈⠈⡈⠐⠀⡁⠐⠈⠠⠈⢐⠈⠢⡑⢌⠪⡘⡔⡕⡕⡕⡕⢅⢣⢑⢑⢕⢸⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠈⠑⢬⡂⢕⠨⡂⢌⢂⢊⠢⡑⢌⢢⢑⢌⠢⡑⡐⢅⠅⢄⠄⡁⢀⠈⠀⠂⠈⢀⠠⠁⠌⠢⡑⢅⢣⢣⢣⢣⠣⡣⡑⢌⢢⢱⠕⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠢⡕⡨⢂⠅⠅⠕⢌⠢⡑⢔⢐⠅⡊⢌⠢⡑⢅⠪⡐⡡⠨⡂⠢⡈⡀⠀⠐⢀⠡⢈⠢⡃⡇⡇⡇⡣⡒⢌⠢⡵⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠪⠐⡈⡈⠈⠄⡑⢌⠢⡑⠌⢌⢂⠅⡊⠄⠕⡐⠌⢌⠌⢌⠢⡨⢨⢐⠠⠀⡂⢑⢜⢜⢜⢌⠆⣊⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡳⡱⡀⠂⢀⠀⠢⡑⢌⠌⡂⡢⠡⠨⢈⠂⠌⠌⠄⠅⠅⢕⠨⡂⡢⡑⠅⡂⠢⡑⡕⡕⢔⠵⢅⢒⠦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⡪⡊⠀⠀⠐⠁⠨⢌⢂⢊⠔⡠⢁⠡⡐⡄⠂⡀⠀⠈⠈⠐⡨⢐⠔⡨⠨⢨⠨⡪⡪⢊⠂⡑⠌⢂⠍⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⢄⠑⠕⠨⠐⡀⠁⡌⢆⠢⡂⢅⢂⢐⢸⢸⠂⠁⠠⡐⠀⡀⠄⠐⠠⡑⡨⠨⠢⡱⡱⢑⠐⢌⠐⡌⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠣⡨⠈⠌⢐⠠⡑⡜⠄⢕⠠⠡⢂⠠⢣⠣⠐⠀⠁⠈⠀⠠⢪⠀⢅⠲⡨⡪⡪⡪⡊⠄⡊⢴⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⡠⠄⡀⠀⠀⠀⠀⠀⠀⠡⡃⡪⢨⠨⡢⢪⢘⠌⢌⠢⠡⢑⠠⠂⡑⢝⢄⠡⢂⠐⡈⢌⠆⠅⡆⣇⢧⢣⢇⢇⡢⠵⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠪⡀⢂⠉⠒⢂⠂⠌⠉⠡⡑⢌⠢⡣⡱⡑⠅⠅⢅⢊⠌⡢⠨⢐⢀⠢⠈⠌⡀⡂⠔⡐⢌⢎⢎⢎⡎⣇⢗⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⡊⠀⠀⠈⠄⠂⡈⢀⠑⠀⠪⡐⡕⢜⢔⠡⡑⡡⠡⢂⠅⡢⢑⢐⠔⡨⠨⡐⡐⢄⠕⢌⠆⡇⢇⢇⢇⠝⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⡄⠀⠂⠀⠠⠀⠄⡀⠄⠠⡑⢕⠜⡌⡢⡑⢔⢌⢌⠢⡑⡈⡢⢑⠨⡂⠕⡐⢌⠢⠡⡡⢑⢌⢊⢢⠡⠀⠡⡐⠉⡂⢄⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠑⠄⠐⠀⠀⠂⡐⢀⠂⢌⢎⢪⢊⢆⢕⢜⢔⢕⢜⢌⠢⡪⢐⠡⡂⡊⠌⠔⡡⠨⠨⡂⡑⠔⡅⡃⢆⢐⢐⠀⠅⡀⡂⢉⠢⠔⠃⡜⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠈⢢⠈⠀⠠⠐⠠⢈⢆⢇⢕⢜⢔⡕⡵⣕⢵⢱⢑⢕⢜⢌⢂⠢⠨⡨⠨⡐⡡⢑⠌⢜⢸⠈⠀⠅⠅⢂⠌⡂⡐⢐⠠⠀⠁⠠⠃⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠡⡐⠀⡈⡐⡜⡜⡜⡜⣜⢜⡎⣗⢵⢱⢱⢱⠱⠨⢂⠂⢅⢑⠐⢅⢂⠪⡐⢕⢱⠑⠀⠀⡈⠠⠐⠀⢂⠐⡀⢂⠁⠡⠈⠄⡂⢑⠠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠱⡆⠐⢕⠜⡜⡜⣜⢎⢧⢫⢎⢎⢎⢊⢢⢡⢑⢅⠪⢐⠄⠅⢕⢐⢕⢱⠱⡑⠀⠀⠀⠀⠀⠀⠀⠄⠂⠀⠂⢈⠀⡁⠂⡐⢀⠂⡈⠑⢄⣀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠌⠂⠈⠔⡡⢃⢇⢇⢗⢕⠕⢕⢱⢰⢱⢱⢱⡑⡆⡕⡡⠨⠨⠢⡱⡘⡌⡎⠀⠀⠀⢀⠠⠀⠀⠄⠀⠀⠁⠈⠀⠀⡀⠂⡀⠂⡐⠀⠅⡀⠍⠢⢀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⡜⠀⠀⠂⢈⠠⠡⠂⢕⢈⢂⢑⠑⢕⠱⡱⠱⡣⡣⡣⡣⡪⡈⠪⡨⡢⡣⢃⠀⡀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠁⠀⠄⠀⠄⠠⠈⡀⠄⠠⠀⠀⠑⠠⡀⠀⠀⠀
// ⠀⠀⠀⠀⠀⡐⠠⠀⠁⠠⠀⠀⠄⠨⡂⡂⠐⠐⠨⢐⢑⢌⢓⢆⢖⢌⢊⠎⠌⢌⢢⠪⠨⠀⢀⠀⠀⠂⠀⠐⠀⠀⠂⠀⠀⠀⠀⡀⠄⠀⠀⡀⠄⠀⠀⡀⠄⠂⠀⠁⠀⠁⠈⠐⢄⠀
// ⠀⠀⠀⠠⠊⠀⠠⠐⠀⠠⠀⢁⠠⠨⡐⠀⠂⢁⠨⢐⠐⢄⢑⠌⡢⡑⡑⡌⡊⢢⢑⠡⠁⡐⠀⠄⠁⠀⠂⠀⠂⠁⠀⠀⠂⠈⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠈

function ProductCard({ items, addItem }: Foo) {
  const { books, error, loading } = useTypedSelector((state) => state.book);
  const comments = useTypedSelector((state) => state.comment.comments);
  const { fetchBooks, addComment } = useActions();
  const { id } = useParams<{ id: number | any }>();
  let book = books[id];
  let checkId = items?.find((x: any) => x.id === +id);
  let bookRecommended = books.filter((x) => Object.values(x)[8] === Object.values(book)[8]);
  let reviews = comments?.filter((x) => x.bookId === id);

  const [nameComment, setNameComment] = useState('');
  const [titleComment, setTitleComment] = useState('');
  const [textComment, setTextComment] = useState('');
  const [writeСomment, setWriteСomment] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useGlobalEvent('resize', (e: any) => {
    setWindowWidth(window.innerWidth);
  });

  const [comId, setComId] = useState(id);
  // console.log('comm->', comments);
  // console.log(
  //   'a->',
  //   comments.flat().filter((x) => x.bookId === id),
  // );

  const handleInput1 = (e: any) => {
    setNameComment(e.target.value);
    setComId(id);
  };
  const handleInput2 = (e: any) => {
    setTitleComment(e.target.value);
    setComId(id);
  };

  const handleInput3 = (e: any) => {
    setTextComment(e.target.value);
    setComId(id);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (textComment.length > 1) {
      const id = uniqid();
      addComment(textComment, id, comId, nameComment, titleComment);
      setTextComment('');
      setNameComment('');
      setTitleComment('');
      setWriteСomment(0);
    }
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    addItem(book);
  };

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
  };

  const handlerScrollUp = () => {
    setTextComment('');
    setNameComment('');
    setTitleComment('');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="book_page_container">
      <img className="main_image" src={book?.imageUrl} alt="" />

      <div className="social_media">
        <div className="vk"></div>
        <div className="instagram"></div>
        <div className="facebook"></div>
        <div className="odnoklassniki"></div>
        <div className="twitter"></div>
      </div>

      <div className="book_description">
        <div className="book_name">
          {book?.bookName}
          <div className="book_author">{book?.authorName}</div>
        </div>
        <div className="book_description_container">
          <div className="star">★</div>
          <div className="book_rating">{book?.bookRating}</div>
          <div className="reviews_number">1337 оценок</div>

          <div className="rating_area">
            <input type="radio" id="star-5" name="rating" value="5" />
            <label htmlFor="star-5" title="Оценка «5»"></label>
            <input type="radio" id="star-4" name="rating" value="4" />
            <label htmlFor="star-4" title="Оценка «4»"></label>
            <input type="radio" id="star-3" name="rating" value="3" />
            <label htmlFor="star-3" title="Оценка «3»"></label>
            <input type="radio" id="star-2" name="rating" value="2" />
            <label htmlFor="star-2" title="Оценка «2»"></label>
            <input type="radio" id="star-1" name="rating" value="1" />
            <label htmlFor="star-1" title="Оценка «1»"></label>
          </div>
        </div>
      </div>

      <div className="trade_container">
        <div className="book_price">
          {book?.price} ₽ <div className="availability">В наличии</div>
        </div>
        {checkId?.id === +id ? (
          <Link to="/Basket" className="book_buy">
            <button>Перейти в корзину</button>
          </Link>
        ) : (
          <div className="book_buy">
            <button onClick={handleClick}>Купить</button>
          </div>
        )}

        <div className="book_marks">
          <button>В закладки</button>
        </div>
      </div>

      <div className="delivery">
        <div className="shipping_methods">
          Способы доставки в <span className="city_name">Город "--":</span>
        </div>

        <div className="book_shop">
          В магазины сети
          <span className="city_name"> Адреса</span>
          <span className="shipping_cost"> Бесплатно</span>
          <br />
          <span className="delivery_date">Завтра</span>
        </div>

        <div className="place_receipt">
          В пункты выдачи
          <span className="city_name"> Адреса</span>
          <span className="shipping_cost">Бесплатно</span>
          <br />
          <span className="delivery_date">Завтра</span>
        </div>

        <div className="сourier">
          Курьером
          <span className="сourier_cost"> 322 ₽</span>
          <br />
          <span className="сourier_cost_over">Бесплатно</span>
          <span className="orders_over"> при заказе от 3000₽</span>
        </div>
      </div>

      <div className="annotation">
        <div className="annotation_name">Описание</div>
        <div className="annotation_text">{book?.description}</div>
        <div className="annotation_report">Сообщить об ошибке</div>
      </div>

      {windowWidth > 460 ? (
        <div className="recommendations">
          <h2 className="slider_name">{books[id]?.categoryRu}</h2>
          <Slider {...settings}>
            {bookRecommended.map((book) => {
              let i = 0;
              if (i < 16) {
                i++;
                return (
                  <Link
                    className="slider_link"
                    key={book.id}
                    to={`/Book/${book.id}`}
                    onClick={handlerScrollUp}>
                    <div className={`slider_book ${i}`} key={book?.id}>
                      <div className="slider_card_settings">
                        <img
                          className="slider_img"
                          height="250px"
                          width="150px"
                          src={book?.imageUrl}
                          alt=""
                        />
                        <div className="slider_card_info">
                          <div className="slider_rating">★{book?.bookRating}★</div>
                          <div className="slider_price">{book?.price} ₽</div>
                        </div>
                      </div>
                      <div className="slider_book_author">{book?.authorName}</div>
                      <div className="slider_book_name">{book?.bookName}</div>
                    </div>
                  </Link>
                );
              }
            })}
          </Slider>
          )
        </div>
      ) : (
        ''
      )}

      <div className="reviews">
        <div className="reviews_count">Отзывы {reviews.length}</div>
        {writeСomment === 0 ? (
          <button className="recall_button" onClick={() => setWriteСomment(1)}>
            Оставить отзыв
          </button>
        ) : (
          <div className="write_review_box">
            <form className="comment_generate" onSubmit={handleSubmit}>
              <div className="close_write_box" onClick={() => setWriteСomment(0)}>
                <FontAwesomeIcon icon={faXmark} />
              </div>

              <div className="write_review_name">
                <label className="writer_review_name">Имя или псевдоним</label>
                <input
                  type="text"
                  value={nameComment}
                  placeholder="От 2 символов"
                  onChange={handleInput1}
                  className="write_name_input"
                  minLength={2}
                />
              </div>

              <div className="text_title">
                <label className="text_title_name">Заголовок</label>
                <input
                  type="text"
                  value={titleComment}
                  onChange={handleInput2}
                  placeholder="От 2 символов"
                  className="text_title_input"
                  minLength={2}
                />
              </div>

              <div className="comment">
                <label className="comment_name">Комментарий</label>
                <textarea
                  placeholder=" От 2 символов"
                  value={textComment}
                  onChange={handleInput3}
                  className="comment_name_area"
                />
              </div>

              {nameComment.length < 2 || titleComment.length < 2 || textComment.length < 2 ? (
                <div className="input_check">Заполните все поля</div>
              ) : (
                <button onSubmit={handleSubmit} className="submit_button">
                  Добавить отзыв
                </button>
              )}

              <div className="total_characters">Всего символов: {textComment.length}</div>
            </form>
          </div>
        )}
        {!!reviews?.length &&
          reviews?.map((res: any) => {
            return <SingleComment key={res.stat.id} data={res} />;
          })}
      </div>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems = [] } }) => ({
  items: cartItems,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: any) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
