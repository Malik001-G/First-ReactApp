import React from "react";
import ReactDOM from "react-dom/client";


import './index.css'

// function Greeting() {
//   return <div>
//     <Person />
//     <Message/>
//   </div>
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>this is a message</p>
// }
const title = 'The Women: A Novel'
const author = 'Kristin Hannah'
const img = './images/book1.jpg'


const BookList = () => {
  return <section className="bookList">
    <Book author={author} title={title} img={img} />
    <Book author={author} title={title} img={img} />
  </section>
}

const Book = (props) => {
  console.log(props);
  return <article className="book">
    <img src= {props.img} alt={props.title} />
    <h2>{props.title}</h2>
    <h4>{props.author}</h4>
  </article>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
