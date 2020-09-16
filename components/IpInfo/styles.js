import css from 'styled-jsx/css'

export default css`
      .Info-Container{
        top:40px;
        width:80%;
        z-index:3000;
        max-width:715px;
        min-width:510px;
        overflow:hidden;
        font-weight:700;
        background:#fff;
        border-radius:16px;
        color:hsl(0, 0%, 17%);
        position: relative;

      }
      .Info-Container > div{
        display:flex;
        position:relative;
        justify-content:space-around;
        height: 120px;
      }

      .Info-Container > div > div{
        padding-top:1rem;
        position:relative;       
      }

      .Info-Border {
        height:50%;
        position:relative;
        top: 25px;
        border: 1px solid  rgba(0, 0, 0, 0.1);
      }
      .Info-CountryFlag{
        margin:auto;
        width: 70px;
      }

      img{
        width:100%;
        object-fit:cover;
      }

      .Info-Title{
        padding-bottom:10px;
        font-weight:600;
        color: hsl(0, 0%, 59%);
        font-size: 0.6rem;
        text-transform:uppercase;
  
      }

      @media(max-width:520px){
        .Info-Container{
          top:10px;
          width:70%;
          min-width:265px;
          overflow:visible;
        }
        .Info-Container > div{
          height:auto;
          text-align:center;
          align-items:center;
          flex-direction:column;
        }
        .Info-Border{
          display:none;
        }
        br{
          display:none;
        }

      }


`
