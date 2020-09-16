import css from 'styled-jsx/css'

export default css` 
div{
    width:60%;
    max-width:600px;
  }
  form{
    height: 40px;
    display:flex;
    justify-content:center;

  }

  input{
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    border:none;
    padding:1rem;
    font-size:16px;
    width:60%;
  }

  button{
    width:35px;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    border:none;
    position:relative;
    cursor:pointer;
    background:#000;
  }

  button[disabled]{
    cursor:default;
    opacity:0.6;
  }

  button:after{
    content:'${'\\003E'}';
    font-size:1rem;
    color:#fff;
  }

`
