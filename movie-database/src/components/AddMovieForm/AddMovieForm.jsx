import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
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
          <form action="" className={styles.addMovieForm__form}>
            <h2 className={styles.addMovieForm__title}>Add Movie</h2>
            <label className={styles.addMovieForm__label}>Title</label>
            <input type="text" className={styles.addMovieForm__input} />
            <label className={styles.addMovieForm__label}>Year</label>
            <input type="text" className={styles.addMovieForm__input} />
            <button className={styles.addMovieForm__button}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
