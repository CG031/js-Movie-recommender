// The Lion King (1994),                                 LIVRE, aventura, drama;
// Snow White and the Seven Dwarfs (1937),               LIVRE, fantasia;
// Jurassic Park (1993),                                 LIVRE,ficção cientifca;
// Lord of the Rings: The Fellowship of the Ring (2001), 12, aventura, drama, fantasia;
// Chinatown (1974),                                     12, Drama, Mistério 
// The Searchers (1956),                                 12, aventura, drama, faroeste;
// Lawrence of Arabia (1962),                            12, guerra, drama, aventura;
// Titanic (1997),                                       12, romance, drama;
// Rocky (1976),                                         12, Luta;
// The Godfather (1972),                                 14, Suspense, Mistério
// Blade Runner (1982),                                  14, ação, drama, ficção cientifica;
// Vertigo (1958 ),                                      14, romance, suspense; mistério;
// Raging Bull (1980),                                   16, drama, ação;




let campoIdade;
let campoFantasia;
let campoDrama;
let campoFicção;
let campoGuerra;
let campoSuspense;
let campoAventura;
let campoFaroeste;
let campoMisterio;
let campoRomance;
let campoAcao;
let campoLuta;


function setup() {
  createCanvas(700, 300);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput();
  campoLuta = createCheckbox ("Você gosta de Luta?")
  campoFaroeste = createCheckbox("você gosta de Faroeste?");
  campoAcao = createCheckbox("Você gosta de Ação?");
  campoRomance = createCheckbox("Você gosta de Romance?");
  campoMisterio = createCheckbox("você gosta de Mistério?");
  campoAventura = createCheckbox("Você gosta de Aventura?");
  campoFantasia = createCheckbox("Você gosta de Fantasia?");
  campoDrama = createCheckbox("Você gosta de Drama?");
  campoFicção = createCheckbox("Você gosta de Ficção Científica?");
  campoGuerra = createCheckbox("Você gosta de Guerra?");
  campoSuspense = createCheckbox("Você gosta de Suspense?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeLuta = campoLuta.checked();
  let gostaDeAcao = campoAcao.checked();
  let gostaDeRomance = campoRomance.checked();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeMisterio = campoMisterio.checked();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeFicção = campoFicção.checked();
  let gostaDeGuerra = campoGuerra.checked();
  let gostaDeSuspense = campoSuspense.checked();
  let gostaDeFaroeste = campoFaroeste.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeDrama, gostaDeFicção, gostaDeGuerra, gostaDeSuspense, gostaDeAventura, gostaDeFaroeste, gostaDeMisterio, gostaDeRomance, gostaDeAcao, gostaDeLuta);
  
  text(recomendacao, width/2, height/2)
  textSize(18);
  textAlign(CENTER,CENTER);
  fill (color(0,0,100));
 

  
}




function geraRecomendacao(idade, gostaDeFantasia, gostaDeDrama, gostaDeFicção, gostaDeGuerra,      gostaDeSuspense, gostaDeAventura, gostaDeFaroeste, gostaDeMisterio, gostaDeRomance, gostaDeAcao,  gostaDeLuta){
    if (idade >= 16 ) {
      if (gostaDeDrama && gostaDeAcao) {
        return "Raging Bull (1980)"
      }
    }                             
          
               
    if (idade >= 14 ) {
      if (gostaDeAcao &&  gostaDeFicção) {
        return "Blade Runner (1982)"
      } else if(gostaDeSuspense && gostaDeMisterio){
        return "The Godfather (1972)"
      } else if(gostaDeRomance && gostaDeSuspense){
        return "Vertigo (1958)"
      }
    }        
          
    if (idade >= 12 ) {
      if(gostaDeAventura && gostaDeFantasia && gostaDeDrama){
        return "Lord of the Rings: The Fellowship of the Ring (2001)"
      } else if (gostaDeDrama && gostaDeMisterio) {
        return "Chinatown (1974)"
      } else if (gostaDeFaroeste) {
        return "The Searchers (1956)"
      } else if (gostaDeRomance && gostaDeDrama) {
        return "Titanic (1997)"
      } else if(gostaDeGuerra){
        return "Lawrence of Arabia (1962)"
      } else if (gostaDeLuta){
        return "Rocky (1976)"
      }
    }
    
    if (idade >= 0 ) {
      if(gostaDeFantasia && gostaDeAventura){
        return "Snow White and the Seven Dwarfs (1937)"
      } else if  (gostaDeAventura && gostaDeDrama){
        return "The Lion King (1994)" 
      } else if (gostaDeFicção && gostaDeFantasia){
        return "Jurassic Park (1993)"
      }
        
    }
    return "Nenhuma recomendação encontrada para suas preferências.";
}
