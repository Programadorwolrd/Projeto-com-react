// poderia mudar de app.jsx mas melhor deixar app por questao semantica
import { useState } from "react";
import { Item, Container, TodoList,Input,Button,List} from "./styles";

//acimma esta a importação da ferramenta que possibilita a alteraçaõ de estado das variaveis e

function app() {
  //aqui voce coloca o nome da variavel mais SETnomedavariavel abaixo se cria uma const
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function inputChange(event) {
    setInputValue(event.target.value);
  }

  function buttonCLick() {
    //  so se usa o set task da const tasks
    setTasks([...tasks, inputValue]);
  }

  // olhar no f12 a varianvel funcinando e vendo oque foi digitado
  return (
   
    <Container>
      <TodoList>
      <p>LISTA DE AFAZERES</p>
        {/* abaixo podemos ver que o on change chama a funcção que foi criada acima  */}
        <Input placeholder="Digite sua tarefa" onChange={inputChange} />
        <Button onClick={buttonCLick}>Adicionar</Button>
        <List>
          {
            //aqui oque a gnt fez foi o map pra deixar os itens da string como itens separatos e fazer linhas
            tasks.map(
              (
                item,
                index //a frente fizemos task.map ai pedimos item que pé um nome aletatorioq ue colocamos para chmar oque foi colocado no input e , index que tambem é um  nom e aleatorio pra dizer a posição do item dentro do array ou seja essa logica faz com quem cada vez qye seja criada uma li o numero da poisção da li fique guardado na variavel index e depois na linmha de baixo voce chama ela e passa como chave unica a sua proporia posição
              ) => (
                <Item key={index}>{item}</Item> //basicamente aqui cria as li  com o import do item do app ,js porem tem o key ali que é o index que foi criado acima , nao precisava se chamar index
              )
            )
          }
        </List>
        <p>{inputValue}</p>
        </TodoList>
    </Container>
    
  );
}
export default app;
