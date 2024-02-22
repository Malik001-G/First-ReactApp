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
  return (
    <section className="bookList">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};
const EventExamples = () => {
  const handleFormInput = () => {
    console.log("Handle form input");
  };
  const handleButtonClick = () => {
    alert("Handle button click");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
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
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
