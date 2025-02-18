import styled from "styled-components";

const FooterStyled = styled.div`
  /* Small Screen */

  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;

  .footer__title {
    margin-bottom: 1rem;
  }

  .footer__author {
    margin-bottom: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
   * Nothing TODO here.
   * We dont change styling footer. 
   */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /*
   * Nothing TODO here.
   * We dont change styling footer. 
   */
  }
`;

export default FooterStyled;
