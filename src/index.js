//a simple list of books demonstrating nested components
//project idea from the John Smilga React 2024 course

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
const author = 'Jordan Moore'
const title = 'Interesting facts for Curious Minds'
const img =
  'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'

//props only renders what we pass, so author will not be displayed in the second Book
function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book title={title} img={img} />
    </section>
  )
}

//Book component is used in BookList, className "book" used for CSS
const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
