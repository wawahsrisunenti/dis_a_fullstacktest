import { useState } from "react";

const BookForm = ({ onSubmit, buttonText, initialData }) => {
  const [formData, setFormData] = useState({
    isbn: initialData ? initialData.isbn : "",
    title: initialData ? initialData.title : "",
    subtitle: initialData ? initialData.subtitle : "",
    author: initialData ? initialData.author : "",
    published: initialData ? initialData.published : "",
    publisher: initialData ? initialData.publisher : "",
    pages: initialData ? initialData.pages : "",
    description: initialData ? initialData.description : "",
    website: initialData ? initialData.website : "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="subtitle">Subtitle:</label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="published">Published:</label>
        <input
          type="text"
          id="published"
          name="published"
          value={formData.published}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="publisher">Publisher:</label>
        <input
          type="text"
          id="publisher"
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="pages">Pages:</label>
        <input
          type="number"
          id="pages"
          name="pages"
          value={formData.pages}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="website">Website:</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
};

export default BookForm;
