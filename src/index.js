//a simple list of books demonstrating nested components
//project idea from the John Smilga React 2024 course

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

//added id for key, always set the key where the iteration is occuring
//only use index if the list will never change, otherwise, use id
const books = [
  {
    author: 'Kristin Hannah',
    title: 'The Women: A Novel',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Lisa Jewell',
    title: 'Then She Was Gone: A Novel',
    img: './images/book-2.jpg',
    id: 2,
  },
]

//BookList example using map() function to update array since React will not just render objects
//the map() function takes an arrow function that returns the component with destructured props
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book)
        const { img, title, author, id } = book //destructure a single book
        return <Book img={img} title={title} author={author} key={id} /> //call Book component and return the destructured props
      })}
    </section>
  )
}

//Book component is used in BookList, className "book" used for CSS
//props not destructured

/*
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
*/

//props destructured
//Book component will display a single Book formated in our BookList
const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
