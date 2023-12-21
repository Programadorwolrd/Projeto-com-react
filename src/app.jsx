// poderia mudar de app.jsx mas melhor deixar app por questao semantica
import { useState } from "react"
//acimma esta a importação da ferramenta que possibilita a alteraçaõ de estado das variaveis 





function app(){
    //aqui voce coloca o nome da variavel mais SETnomedavariavel abaixo se cria uma const
        const [tasks,setTasks] = useState(  ['comprar pão','Comprar agua'])
        const [inputValue,setInputValue] = useState('')
        

     
    function inputChange(event){
        setInputValue(event.target.value)
    }

    function buttonCLick(){
        //  so se usa o set task da const tasks
        setTasks([...tasks,inputValue])
    }


    // olhar no f12 a varianvel funcinando e vendo oque foi digitado
    return(
        <div>
            {/* abaixo podemos ver que o on change chama a funcção que foi criada acima  */}
            <input placeholder="Digite sua tarefa" onChange={inputChange} /> 
            <button onClick={buttonCLick}>Adicionar</button>
            <ul>
              {
                //aqui oque a gnt fez foi o map pra deixar os itens da string como itens separatos e fazer linhas 
                tasks.map(item=>(
                    <li>{item}</li>
                ))
              }
            </ul>
<p>{inputValue}</p>
        </div>
    )
    
}
export default app