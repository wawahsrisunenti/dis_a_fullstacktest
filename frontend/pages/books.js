import { useState, useEffect } from "react";
import axios from "axios";
import BookForm from "../components/BookForm";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    // Fetch books from API or your data source
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("/api/books");
      setBooks(response.data.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleAddBook = async (formData) => {
    try {
      await axios.post("/api/books/add", formData);
      // Refetch books after adding a new one
      fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleEditBook = async (formData) => {
    try {
      await axios.put(`/api/books/${editingBook.id}/edit`, formData);
      // Refetch books after editing
      fetchBooks();
      setEditingBook(null);
    } catch (error) {
      console.error("Error editing book:", error);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`/api/books/${bookId}`);
      // Refetch books after deleting
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleEditButtonClick = (book) => {
    setEditingBook(book);
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
  };

  return (
    <div>
      <h1>Books</h1>

      {editingBook ? (
        <div>
          <h2>Edit Book</h2>
          <BookForm
            onSubmit={handleEditBook}
            buttonText="Update Book"
            initialData={editingBook}
          />
          <button onClick={handleCancelEdit}>Cancel Edit</button>
        </div>
      ) : (
        <div>
          <h2>Add New Book</h2>
          <BookForm onSubmit={handleAddBook} buttonText="Add Book" />
        </div>
      )}

      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}{" "}
            <button onClick={() => handleEditButtonClick(book)}>Edit</button>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
