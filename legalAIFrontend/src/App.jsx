  import { useEffect, useState } from 'react'
  import './App.css'
  /*Fazendo o importe dos hooks do react, e do css */
  function App() {
    const [nome, setnome] = useState("")
    const [nomedata, setnomedata] = useState([])
    /*Declarando as variaveis de nome do usuario e o nome das sugestões */
    const [nomeerro, setnomeerro] = useState(false)
    const [nomeerro2, setnomeerro2] = useState(false)
    /*Variaveis para definir se a declaração está com erro de escrita ou sendo utilizado por outra pessoa */
    const [generoerro, setgeneroerro] = useState(false)
    const [descerro, setdescerro] = useState(false)
    /*Variaveis para definir se o genero e descrição foram ou não inseridos */
    const regex = /^[A-Za-zÀ-ÿ\s]{2,40}$/
    /*Expressão regular para validar o nome */
    const [desc, setdesc] = useState("")
    const [descdata, setdescdata] = useState([])
    /*Declarando as variaveis para a descrição do usuario e a descrição das sugestões */
    const [area, setarea] = useState([])
    const [areadata, setareadata] = useState([])
    /*Declarando as variaveis para as âreas de interesses do usuário e a âreas de interesses das sugestões */
    const [similaridadedata, setsimilaridadedata] = useState("")
    /*Declara a similaridade do usuario com a sugestão */
    const [genero, setgenero] = useState("")
    const [generodata, setgenerodata] = useState([])
    /*Declarando as variaveis para o gênero do usuario e o gênero das sugestões */
    const [width, setwidth] = useState(window.innerWidth)
    useEffect(()=>{
      const NovoWidth = ()=>{
          setwidth(window.innerWidth)
      }
      window.addEventListener("resize",NovoWidth)
      return ()=> {window.removeEventListener("resize",NovoWidth)}

    },[])
    /*Armazena o width da página */

    return (
      <>
        <div id='bodyreact' style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"}}>
        <div id='LadoDI' >
        <span style={{display:"flex",justifyContent:"center",alignItems:"center"}}>     
        </span>
        <div style={{ marginTop: "1vh", display: "flex", flexDirection: "row", justifyContent:"center", flexWrap: "wrap", gap: "20px" }}>
              {/*Cria a parte direita do site com a logo  */}

  {nomedata != "" && nomedata.map((e,index)=>(
    <div style={{display:"flex",flexDirection:"row", justifyContent:"center"}}>
      <ul id='AreasDoUsuario' key={index}   style={{
    backgroundColor: "#D91E36",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "10px",
    color: "white",
    textAlign: "center"
  }}>
        <span  style={{display:"flex",flexDirection:"row", justifyContent:"center"}}>Nome:{e}</span>
        <span  style={{display:"flex",flexDirection:"row", justifyContent:"center",alignItems:"center"}}>Descrição:{descdata[index]}</span>
        <span  style={{display:"flex",flexDirection:"row", justifyContent:"center"}}>Genero:{generodata[index]}</span>
        <span  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>Interesses:{areadata[index].map((e,i)=>( <span>{e +", "}</span> ))}</span>
        <span style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>Similaridade:{Math.floor(similaridadedata[index]*100)}</span>
        </ul>
    </div>
  ))}
  </div>
{/*Inseri os cards das sugestões com os dados de cada e similaridade */}
  </div>
  <article  style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <span style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <span className='labelForm'>Insira seu nome</span>
          <input type="text"id='nomeIn' value={nome} onChange={(e)=>{setnome(e.target.value)}}/>
          {nomeerro == true && <span className='labelForm'>Digite um nome válido</span>}
          {(nomeerro==false && nomeerro2 == true) &&  <span className='labelForm'> Nome já está sendo utilizado</span>}
      </span>
{/*Input para o usuário inserir o seu nome, possui uma parte que valida erros de digitação e se o nome já está sendo utilizado*/}

      <span style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <span className='labelForm'>Insira uma descrição</span>
          <span><textarea name="" id="descIn" value={desc}  onChange={(e)=>{setdesc(e.target.value)}}></textarea></span>
      </span>
      <span style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <span className='labelForm'>Insira seu genero</span>
          <span><select name="" id="generoIn" value={genero}  onChange={(e)=>{setgenero(e.target.value)}}>
            <option value="">Selecione seu gênero</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outros">Outros</option></select>
            </span>
      </span>
      {/*Inputs para o usuário inserir descrição e gênero */}
      <span style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <span className='labelForm'>Selecione seus interesses</span>
          <select name="" id="areasIn" value={area[0]}  onChange={(e)=>{const NovaArea = e.target.value
          if(NovaArea && !area.includes(NovaArea) && area.length<=3){
            setarea([...area,NovaArea])
            console.log(width)
          }
          }}>
          <option value="">Selecione suas areas</option>

            <option value="Matematica">Matematica</option>
            <option value="Programacao">Programação</option>
            <option value="Xadrez">Xadrez</option>
            <option value="Trilhas">Trilhas</option>
            <option value="Futebol">Futebol</option>
            <option value="Video games">Video games</option>
            <option value="Geopolitica">Geopolitica</option>
            <option value="Volei">Volei</option>
            <option value="Basquete">Basquete</option>
            <option value="Quadrinhos">Quadrinhos</option>
            <option value="Robotica">Robotica</option>

            <option value="Ficcao">Ficção</option>
            <option value="Carros">Carros</option>
            <option value="Academia">Academia</option>
          </select>
          {/*Input para o usuário inserir área(s) de interesse */}
          <span style={{marginTop:"20px"}}>
          {area.length <1 && <span className='labelForm'>Insira uma área de interesse</span>}
          {area.length >3 && <span className='labelForm'>Máximo de interreses atingidos</span>} 
          </span>
          {/*Valida se o usuário selecionou uma área de interesse ou se ele atingiu o máximo de áreas de interesse no caso 4 */}
      </span>
      <span style={{display:"flex",flexDirection:"row"}}>

        <ul style={{display:"flex",flexDirection:"row", listStyle:"none"}}>


        {area.map((e, index)=>(<li style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} key={index}>{e}</li>))}
          
       
  {(width<950 &&area.length==3) &&<>
    <span style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", gap:"20px"}}>          
    <li style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} key={1}>{area[0]}</li>
    <li style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} key={1}>{area[1]}</li>
    </span>
    <span>
    <li style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} key={1}>{area[2]}</li>
  
    </span>
    </>}

  {(width<950 &&area.length==4) &&<>
    <span style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", gap:"20px"}}>          
    <li style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} key={0}>{area[0]}</li>
    <li style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} key={1}>{area[1]}</li>
    </span>

    <span style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", gap:"20px"}}>
          <li style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} key={2}>{area[2]}</li>
    <li style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} key={3}>{area[3]}</li>
  
    </span>
    </>}
{/* Mostra as áreas selecionadas pelo usuário, se ajusta para se adptar larguras menores  */}
        </ul>
      </span>
      {(nomeerro==true || generoerro==true|| descerro==true) && <span className='labelForm'>Insira todas as informações corretas</span>}
      <span><button id='btnBuscar' onClick={()=>{
        console.log(areadata)
        if (!regex.test(nome)) {
          setnomeerro(true);
          return;
        }
        if(genero==""){
          setgeneroerro(true)
          return
        }
        if(desc==""){
          setdescerro(true)
          return
        }
        if(area == []){
        setnomeerro(false)
        return
        }
        /*Verifica os valores inseridos se algum estiver vazio ele envia um erro e finaliza a função */
                        fetch('http://127.0.0.1:8000/api/add/', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            Nome: nome,
                            Descrição: desc,
                            Genero: genero,
                            Areas: area
                          }),
                        })
                          .then(async (res) => {
                            console.log(res)
                            if (!res.ok) {
                              const errorText = await res.text();
                              throw new Error(errorText);
                            }
                            return res.json();
                          })
                          .then(json => {
                            console.log(json)
                            setgenerodata(Object.values(JSON.parse(json.Dados).Genero))
                            setareadata(Object.values(JSON.parse(json.Dados).Areas))
                            setnomedata(Object.values(JSON.parse(json.Dados).Nome))
                            setdescdata(Object.values(JSON.parse(json.Dados).Descricao))
                            setsimilaridadedata(Object.values(JSON.parse(json.Dados).Similaridade))
                          })
                          .catch((err) => {console.error("Erro:", err)
                            
                            if (err.message.includes("Nome ja esta sendo utilizado")) {
                              console.log("fa")
                              setnomeerro2(true)
                            }
                          });
                        /*Envia os dados inseridos do usuario a API via json, no retorno dessa request a API envia os dados das sugestões também via json,
                         se os dados estiverem ok o código armazena um array para cada característica o que gera os cards, se não ele printa um erro e se a mensagem do erro for 
                         "Nome ja esta sendo utilizado" ele manda um erro  */
                                
      }}>Conectar</button></span>
  </article>
        </div>
      </>
    )
  }

  export default App
