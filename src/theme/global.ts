import { createGlobalStyle } from 'styled-components';
import theme from './index';
import fonts from './fonts';

const global = createGlobalStyle`
  ${fonts}
  html,
  body {
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    font-size: ${theme.font.size.body};
  }

  body {
    font-family: ${theme.font.family.default};
    font-size: ${theme.font.size.body};
    line-height: ${theme.lineHeight.default};
    color: ${theme.color.text.default};
    background-color: ${theme.color.background.body};
    text-align: center;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.color.text.headings};
    margin: 0 0 ${theme.spacing[3]} 0;
    font-family: ${theme.font.family.headings};
    font-weight: ${theme.font.weight.bold};
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  form,
  table,
  pre {
    display: block;
    margin: 0 0 ${theme.marginBottom.default} 0;
  }

  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  ul,
  ol,
  dl {
    padding: 0;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul,
  dd {
    margin: 0;
  }

  li {
    margin: 0 0 0 ${theme.spacing[3]};
    padding: 0;
    display: list-item;
    list-style-position: outside;
  }

  dd {
    padding: 0 0 0 ${theme.spacing[3]};
  }

  pre,
  code,
  samp,
  kbd,
  var {
    font: .9em Monaco, "Courier New", monospace;
  }

  code {
    color: inherit;
    background: rgba(0,0,0,.05);
    padding: 0 5px;
  }

  pre {
    overflow: auto;
  }

  abbr,
  acronym {
    text-transform: uppercase;
    border-bottom: 1px dotted #000;
    letter-spacing: .01em;
  }

  abbr[title],
  acronym[title] {
    cursor: help;
  }

  small {
    font-size: .9rem;
  }

  sup{
    font-size: .8rem;
    vertical-align: top;
    position: relative;
    top: -.5rem;
  }
  sub {
    font-size: .8rem;
    vertical-align: bottom;
    position: relative;
    bottom: -.5rem;
  }

  em,
  cite,
  q {
    font-style: italic;
  }

  ins {
    text-decoration: none;
    font-style: italic;
  }

  img {
    border: none;
    max-width: 100%;
  }

  figure {
    margin: 0 0 .5em 0;
    display: table;
  }

  meter,
  progress,
  audio,
  video {
    width: 100%;
  }

  hr {
    display: block;
    clear: both;
    height: 1px;
    border: 0;
    border-top: ${theme.border.default};
    margin: -1px 0 ${theme.spacing[3]} 0;
    padding: 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    display: table;
  }

  th,
  caption {
    text-align: left;
  }

  label {
    display: block;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  legend {
    font-weight: ${theme.font.weight.bold};
  }

  input,
  select {
    vertical-align: middle;
  }

  input[type="radio"],
  input[type="checkbox"],
  .radio,
  .checkbox {
    margin: 0 .25rem 0 0;
  }

  ::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  ::-moz-selection {
    background: #555;
    color: #fff;
  }

  ::selection {
    background: #555;
    color: #fff;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  table,
  input,
  textarea,
  select,
  li,
  button,
  p {
    font-family: inherit;
    line-height: inherit;
  }

  a,
  a:visited {
    color: ${theme.anchor.default.color};
  }

  a:hover {
    color: ${theme.anchor.hover.color};
  }

  pre {
    padding: ${theme.spacing[3]};
    border: ${theme.border.default};
    line-height: inherit;
  }

  blockquote {
    padding: 0;
    margin-left: ${theme.spacing[3]};
    font-style: italic;
  }

  dt {
    font-weight: ${theme.font.weight.bold};
  }

  figcaption {
    font-style: italic;
    margin: .25em 0;
    text-align: center;
    font-size: .9em;
    line-height: 1.5em;
  }
`;

export default global;
