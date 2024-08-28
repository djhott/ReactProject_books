//a simple list of books demonstrating nested components
//project idea from the John Smilga React 2024 course

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

//Book component is used in BookList, className "book" used for CSS
const author = 'Jordan Moore'
const Book = () => {
  const title = 'Interesting Facts For Curious Mindssssss'
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
        alt="Interesting Facts For Curious Minds"
      />
      <h2>{title}</h2>

      <h4>{author.toUpperCase()} </h4>
      {/* <p>{let x = 6}</p> //statements don't work, only expressions, see next line*/}
      {/*<p>{6 + 6}</p> //expressions because we need to return something, not statements*/}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
