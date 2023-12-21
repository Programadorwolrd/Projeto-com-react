import { createGlobalStyle } from 'styled-components';

// essa pagina muda o css global de todas as paginas do site


const GlobalStyle = createGlobalStyle`//aqui .div se identifica o tipo do componente
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;//esse css foi puxado do goole fonts a linkagem ta na index.html
    
  }
`;
// a cor so ta em rosa azul igual no css por causa da extenção do styled-components
export default GlobalStyle
