import { createGlobalStyle } from 'styled-components';
import 'react-activity/dist/react-activity.css';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  button {
    background: none;
    border: 0;
    padding: 0;
  }

  img {
    display: block;
  	height: auto;
  	max-width: 100%;
  }

  svg {
    fill: currentColor;
  }

  .small,
  small {
    font-size: .8em;
  }

  html {
    font-size: 10px;
    -moz-osx-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

  b, strong {
    font-weight: 600;
  }

  i, em {
    font-style: italic;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  *::placeholder {
    color: var(--secondary-text);
  }

  *::-webkit-input-placeholder {
    color: var(--secondary-text);
  }

  body {
    background-color: var(--bg);
    color: var(--primary-text);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 2rem;
    min-height: calc(100vh);
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    will-change: background-color;
  }

  #root {
    --black: #111;
    --white: #fff;
    --gray-1: #f5f5f5;
    --gray-2: #d8d8d8;
    --gray-3: #9b9b9b;
    --gray-4: #4a4a4a;
    --blue-1: #daf0ff;
    --blue-2: #007fd8;
    --blue-3: #0060a7;
    --green-1: #7ed321;
    --orange-1: #ff7d00;
    --red-1: #dc3545;
    --red-2:  #f74f63;

    --default-color: var(--gray-4);
    --default-color-lighten: #5c5c5c;
    --default-color-contrast: var(--white);
    --disabled-color: var(--gray-3);
    --disabled-color-contrast: var(--gray-1);
    --primary-color: var(--blue-2);
    --primary-color-lighten: #0090f5;
    --primary-color-contrast: var(--white);
    --secondary-color: var(--orange-1);
    --secondary-color-lighten: #ff9834;
    --secondary-color-contrast: var(--white);
    --success-color: var(--green-1);
    --success-color-lighten: #8bde2f;
    --success-color-contrast: var(--white);
    --danger-color: var(--red-1);
    --danger-color-lighten: var(--red-2);
    --danger-color-contrast: var(--white);

    --bg: #18191a;
    --surface-background: #242526;
    --primary-text:#e4e6eb;
    --secondary-text: #b0b3b8;
    --input-background: #3a3b3c;
    --shadow: rgba(0, 0, 0, 0.2);
  }



`;

export default GlobalStyles;
