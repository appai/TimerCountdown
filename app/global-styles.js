import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    font-family: Avenir, Helvetica, sans-serif;
    background: #FFF3F1;
    padding: 40px 0;
  }
  body.fontLoaded {
  }
  #app {
  }
  p,
  label {
    font-family: Avenir, Helvetica, sans-serif;
    line-height: 1.5em;
  }
  #container {
    width: 70%;
    max-width: 300px;
    margin: 0 auto;
  }
  .form-group {
      margin-bottom: 20px;
  }
  label {
      display: block;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 5px;
  }
  input {
      width: 100%;
      border: 2px solid #FFDAD4;
      border-radius: 4px;
      padding: 12px 8px;
      outline: none;
      transition: all 300ms;
      box-sizing : border-box;
  }
  input.invalid {
      border-color: red
  }
  input.valid {
      border-color: green
  }
  .timer-display {
      font-size: 48px;
      font-weight: bold;
      display: flex;
      text-align: center;
      width: 100%;
      margin: 30px 0;
      justify-content: space-between
  }
  .box {
      display: inline-block;
      border-radius: 12px;
      padding: 12px 20px;
      text-align: center;
      box-shadow: 1px 8px 35px #DDD;
      background-color: #fff;
      width: 100%
  }
  button {
      width: 100%;
      background: green;
      border: 0;
      color: #ffffff;
      padding: 12px 8px;
      border-radius: 4px;
      outline: 0;
      transition: all 100ms;
  }
  button:active {
      background: rgb(29, 51, 10);
  }
  button.disabled {
      background: #EEEEEE
  }
  .form-container {
      padding: 30px;
      background: #FFFFFF;
      box-shadow: 1px 8px 35px #DDD;
      border-radius: 12px
  }
  h1 {
      margin: 0 0 20px 0;
      font-size: 30px;
      font-weight: 900;
  }
`;
