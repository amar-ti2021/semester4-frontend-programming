/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import styles from "./Footer.module.css";
import FooterStyled from "./FooterStyled";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <FooterStyled>
      <footer className="footer">
        <h2 className="footer__title">Movie App</h2>
        <p className="footer__author">Created by aufaroot18</p>
      </footer>
    </FooterStyled>
  );
}

export default Footer;
