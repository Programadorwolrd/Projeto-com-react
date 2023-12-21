//abaixo importação do styled componets
import styled from 'styled-components';


//Abaixo vou criar um componente ( atalho sc) se usas craze e nao aspas
//abaixo um otimo exempolo de um componente css
export const Item = styled.li`
  color:black;
  font-size:15;
  background-color: bisque;
  box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
  border-radius: 5px;
  height: 60px;
  list-style-type: none;
  margin-bottom: 10px;
 display: flex;
  align-items: center;
  justify-content:center
  
`;
//cabaixo componente sobre o container da pagina
export const Container = styled.div`//aqui .div se identifica o tipo do componente
  width: 100vh;
  height: 100vh;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`//aqui .div se identifica o tipo do componente
 border: 2px solid;
 border-radius:5px ;
 font-family: 'Roboto', sans-serif;
 outline:none;
 padding-left: 10px;
 border-radius: 5px;
 height: 35px;

`;


export const TodoList = styled.div`//aqui .div se identifica o tipo do componente
 background-color: white;
 padding: 20px;
 border-radius: 20PX;
 
`;


export const Button = styled.button`//aqui .div se identifica o tipo do componente
 background-color: brown;
 border-radius: 5px;
 height: 40px;
 border: none;
 cursor:pointer;
 margin-left:10px;
 color: white;


 
`;



export const List = styled.ul`//aqui .div se identifica o tipo do componente
padding: 0;
margin-top: 30px;
`;