import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Kristin Hannah",
    title: "The Women: A Novel",
    img: "./images/book1.jpg",
    id: 1,
  },
  {
    author: " James Clear ",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const someValue = 'shakeAndBake'
  const displayValue = () => {
    console.log(someValue);
  }
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue = {displayValue} />;
      })}
     
    </section>
  );
};

// const Book = ({ img, title, author }) => {
//   return <article className="book">
//     <img src= {img} alt={title} />
//     <h2>{title}</h2>
//     <h4>{author}</h4>
//   </article>
// }

//Another way to do the props destructuring
const Book = (props) => {
  const { img, title, author, displayValue } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>Click me</button>
      <h4>{author}</h4>

    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
