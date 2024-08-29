//props destructured
//Book component will display a single Book formated in our BookList
const Book = (props) => {
  const { img, title, author, getBook, id } = props
  // console.log(props);

  //get single book returns using the getBook(id). This prevents immediate use if we just called getBook()
  //in the onClick. However, this is clunky. Will update later with state.
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>display title</button>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
