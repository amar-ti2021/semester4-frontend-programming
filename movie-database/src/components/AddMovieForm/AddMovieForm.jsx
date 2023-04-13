import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
  const { movies, setMovies } = props;

  const [input, setInput] = useState({
    title: { value: "", error: false },
    date: { value: "", error: false },
    type: { value: "", error: false },
    image: { value: "", error: false },
  });
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: { value: e.target.value, error: false },
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let inputX = input;
    for (const key in input) {
      if (input[key].value === "") {
        inputX = { ...inputX, [key]: { value: "", error: true } };
        valid = false;
      }
    }
    console.log(inputX);
    setInput(inputX);
    if (valid === true) {
      const movie = {
        id: nanoid(),
        title: input.title.value,
        year: input.date.value,
        type: input.type.value,
        poster: input.image.value,
      };
      setMovies([...movies, movie]);
    }
  };
  return (
    <div className={styles.container}>
      <section className={styles.addMovieForm}>
        <div className="addMovieForm__left">
          <img
            className={styles.addMovieForm__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
        <div className={styles.addMovieForm__right}>
          <form
            onSubmit={handleFormSubmit}
            className={styles.addMovieForm__form}
          >
            <h2 className={styles.addMovieForm__title}>Add Movie</h2>
            <label className={styles.addMovieForm__label}>Title</label>
            <input
              type="text"
              name="title"
              onChange={handleInputChange}
              className={styles.addMovieForm__input}
              value={input.title.value}
            />
            {input.title.error && <Alert>title tidak boleh kosong!</Alert>}
            <label className={styles.addMovieForm__label}>Year</label>
            <input
              type="text"
              className={styles.addMovieForm__input}
              name="date"
              onChange={handleInputChange}
              value={input.date.value}
            />
            {input.date.error && <Alert>year tidak boleh kosong!</Alert>}
            <label className={styles.addMovieForm__label}>Link Cover</label>
            <input
              type="text"
              className={styles.addMovieForm__input}
              name="image"
              onChange={handleInputChange}
              value={input.image.value}
            />
            {input.image.error && <Alert>Link Cover tidak boleh kosong!</Alert>}
            <label className={styles.addMovieForm__label}>Type</label>
            <select
              className={styles.addMovieForm__input}
              name="type"
              onChange={handleInputChange}
              value={input.type.value}
            >
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Drama">Drama</option>
            </select>
            {input.type.error && <Alert>Type harus dipilih!</Alert>}
            <button className={styles.addMovieForm__button}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
