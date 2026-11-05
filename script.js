// Dados locais usados para montar o catálogo e os detalhes de cada obra.
const obras = [
{id:1,titulo:"Interestelar",tipo:"filme",ano:2014,genero:"Ficção científica",descricao:"Um grupo de astronautas viaja pelo espaço em busca de um planeta habitável para garantir a sobrevivência da humanidade.",imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSr9YIYeUuoHVxfp_HBODbgcNVNCg72_0J67vH2o2Pw&s=10",trailer:"https://www.youtube.com/results?search_query=trailer+Interestelar",ganhouOscar:true,indicadoOscar:true},
{id:2,titulo:"Barbie",tipo:"filme",ano:2023,genero:"Comédia e fantasia",descricao:"Barbie começa a questionar sua vida perfeita e parte para o mundo real em busca de respostas sobre si mesma.",imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dYF5Ger5WxMEGMpJlgorZRFUL-J253-SMU6VkxQJFw&s=10",trailer:"https://www.youtube.com/results?search_query=trailer+Barbie+2023",ganhouOscar:true,indicadoOscar:true},
{id:3,titulo:"Meninas Malvadas",tipo:"filme",ano:2004,genero:"Comédia adolescente",descricao:"Cady entra em uma escola nova e conhece um grupo popular de garotas, descobrindo as dificuldades das amizades e da popularidade.",imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuA7yOb3C6e4wgkkSwe96kcswEqdl9W4RwPxBuLnZGw&s",trailer:"https://www.youtube.com/results?search_query=trailer+Meninas+Malvadas+2004",ganhouOscar:false,indicadoOscar:false},
{id:4,titulo:"Homem-Aranha: Um Novo Dia",tipo:"filme",ano:2026,genero:"Ação e aventura",descricao:"Uma nova aventura do Homem-Aranha no universo cinematográfico da Marvel.",imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPzSXLosDiqWPmg2qIsQEd4AXLKu_LK5rt4XTJzDYnw&s=10",trailer:"https://www.youtube.com/results?search_query=Homem-Aranha+Um+Novo+Dia+trailer",ganhouOscar:false,indicadoOscar:false},
{id:5,titulo:"Stranger Things",tipo:"serie",ano:2016,genero:"Mistério e ficção científica",descricao:"Um grupo de amigos enfrenta acontecimentos sobrenaturais e segredos ligados a um mundo misterioso em sua cidade.",imagem:"https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",trailer:"https://www.youtube.com/results?search_query=trailer+Stranger+Things",ganhouOscar:false,indicadoOscar:false},
{id:6,titulo:"WandaVision",tipo:"serie",ano:2021,genero:"Mistério, drama e romance",descricao:"Wanda e Visão vivem em realidades inspiradas em diferentes épocas da televisão, enquanto acontecimentos estranhos começam a surgir.",imagem:"https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg",trailer:"https://www.youtube.com/results?search_query=trailer+WandaVision",ganhouOscar:false,indicadoOscar:false},
{id:7,titulo:"Loki",tipo:"serie",ano:2021,genero:"Aventura e ação",descricao:"Após escapar com o Tesseract, Loki é levado a uma organização que controla as linhas do tempo e precisa enfrentar novas escolhas.",imagem:"https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",trailer:"https://www.youtube.com/results?search_query=trailer+Loki+Marvel",ganhouOscar:false,indicadoOscar:false},
{id:8,titulo:"Anne with an E",tipo:"serie",ano:2017,genero:"Drama",descricao:"Anne, uma menina órfã imaginativa e determinada, chega a uma nova casa e transforma a vida das pessoas ao seu redor.",imagem:"https://image.tmdb.org/t/p/w500/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg",trailer:"https://www.youtube.com/results?search_query=trailer+Anne+with+an+E",ganhouOscar:false,indicadoOscar:false},
{id:9,titulo:"Amor Teoricamente",tipo:"livro",ano:2023,genero:"Romance",descricao:"Elsie Hannaway é uma física teórica que aceita trabalhar para um pesquisador que pode ameaçar sua carreira, mas acaba descobrindo sentimentos inesperados.",imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_G2JylaGL9SYwlJ_LL22oP-5fPsRMpDkTyc6BNymYA&s",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:10,titulo:"A Hipótese do Amor",tipo:"livro",ano:2022,genero:"Romance e comédia",descricao:"Olive Smith finge namorar o professor Adam Carlsen para convencer sua amiga de que está seguindo em frente, mas o acordo fica mais complicado.",imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6egOOpQprsAn4mNxy82MI8W-J-CjL97BGmcOBcMyNA&s=10",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:11,titulo:"Noites Brancas",tipo:"livro",ano:1848,genero:"Romance e literatura clássica",descricao:"Durante quatro noites em São Petersburgo, um jovem solitário conhece uma mulher e compartilha com ela sonhos, esperanças e sentimentos.",imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQ0hk6whQ4JpcAaxdeVLfqn61rBdzB9wKPkUAMZcLUg&s",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:12,titulo:"A Culpa é das Estrelas",tipo:"livro",ano:2012,genero:"Romance e drama",descricao:"Hazel e Augustus se conhecem em um grupo de apoio e desenvolvem uma relação que transforma a maneira como enxergam a vida.",imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX__68WVL0iw9uBruLDp7FaI1LvLlNbQ_VV4IzJqKYyw&s=10",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:13,titulo:"Duna: Parte Dois",tipo:"filme",ano:2024,genero:"Ficção científica e aventura",descricao:"Paul Atreides se une aos Fremen e enfrenta grandes desafios enquanto busca vingança e tenta mudar o destino de Arrakis.",imagem:"https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",trailer:"https://www.youtube.com/results?search_query=Duna+Parte+Dois+trailer",ganhouOscar:false,indicadoOscar:true},
{id:14,titulo:"La La Land",tipo:"filme",ano:2016,genero:"Musical e romance",descricao:"Uma atriz e um pianista de jazz se apaixonam enquanto tentam realizar seus sonhos em Los Angeles.",imagem:"https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",trailer:"https://www.youtube.com/results?search_query=La+La+Land+trailer",ganhouOscar:true,indicadoOscar:true},
{id:15,titulo:"Cisne Negro",tipo:"filme",ano:2010,genero:"Suspense e drama",descricao:"Uma bailarina conquista o papel principal em um espetáculo e passa a enfrentar uma intensa pressão artística e pessoal.",imagem:"https://image.tmdb.org/t/p/w500/viWheBd44bouiLCHgNMvahLThqx.jpg",trailer:"https://www.youtube.com/results?search_query=Cisne+Negro+trailer",ganhouOscar:true,indicadoOscar:true},
{id:16,titulo:"Corra!",tipo:"filme",ano:2017,genero:"Terror e suspense",descricao:"Um jovem visita a família de sua namorada e percebe que há algo muito estranho por trás da aparente simpatia de todos.",imagem:"https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",trailer:"https://www.youtube.com/results?search_query=Corra+2017+trailer",ganhouOscar:true,indicadoOscar:true},
{id:17,titulo:"O Diabo Veste Prada",tipo:"filme",ano:2006,genero:"Comédia e drama",descricao:"Uma jovem jornalista consegue emprego em uma revista de moda e precisa lidar com uma chefe exigente e um ambiente competitivo.",imagem:"https://image.tmdb.org/t/p/w500/8912AsVuS7Sj915apArUFbv6F9L.jpg",trailer:"https://www.youtube.com/results?search_query=O+Diabo+Veste+Prada+trailer",ganhouOscar:false,indicadoOscar:true},
{id:18,titulo:"Shrek",tipo:"filme",ano:2001,genero:"Animação e comédia",descricao:"Um ogro parte em uma missão para resgatar uma princesa e acaba descobrindo que a amizade pode surgir onde menos se espera.",imagem:"https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",trailer:"https://www.youtube.com/results?search_query=Shrek+trailer",ganhouOscar:true,indicadoOscar:true},
{id:19,titulo:"The Vampire Diaries",tipo:"serie",ano:2009,genero:"Fantasia e romance",descricao:"Elena Gilbert conhece os irmãos vampiros Stefan e Damon, entrando em um mundo de mistérios, romances e conflitos sobrenaturais.",imagem:"https://images.justwatch.com/poster/181451675/s718/The-Vampire-Diaries.jpg",trailer:"https://www.youtube.com/results?search_query=The+Vampire+Diaries+trailer",ganhouOscar:false,indicadoOscar:false},
{id:20,titulo:"Euphoria",tipo:"serie",ano:2019,genero:"Drama",descricao:"Um grupo de adolescentes enfrenta conflitos relacionados a relacionamentos, identidade, amizades e escolhas pessoais.",imagem:"https://www.prints4u.net/wp-content/uploads/2025/03/Euphoria-001.jpg",trailer:"https://www.youtube.com/results?search_query=Euphoria+serie+trailer",ganhouOscar:false,indicadoOscar:false},
{id:21,titulo:"The Bear",tipo:"serie",ano:2022,genero:"Drama e comédia",descricao:"Um jovem chef volta para Chicago para administrar a lanchonete da família e tenta transformar o negócio enquanto enfrenta dificuldades pessoais.",imagem:"https://cdn.tatlerasia.com/tatlerasia/i/2022/08/10151719-the-bear-poster_cover_1200x1500.jpg",trailer:"https://www.youtube.com/results?search_query=The+Bear+serie+trailer",ganhouOscar:false,indicadoOscar:false},
{id:22,titulo:"Round 6",tipo:"serie",ano:2021,genero:"Suspense e drama",descricao:"Pessoas endividadas participam de jogos misteriosos em busca de um prêmio milionário, sem conhecer todas as consequências.",imagem:"https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg",trailer:"https://www.youtube.com/results?search_query=Round+6+trailer",ganhouOscar:false,indicadoOscar:false},
{id:23,titulo:"Heartstopper",tipo:"serie",ano:2022,genero:"Romance e drama",descricao:"Charlie e Nick desenvolvem uma amizade que aos poucos se transforma em sentimentos mais profundos, enquanto descobrem mais sobre si mesmos.",imagem:"https://images.justwatch.com/poster/321076012/s718/heartstopper.jpg",trailer:"https://www.youtube.com/results?search_query=Heartstopper+trailer",ganhouOscar:false,indicadoOscar:false},
{id:24,titulo:"A Rainha Vermelha",tipo:"livro",ano:2015,genero:"Fantasia e romance",descricao:"Mare Barrow vive em uma sociedade dividida pelo sangue e descobre um poder inesperado que pode ameaçar a ordem do reino.",imagem:"https://covers.openlibrary.org/b/isbn/9780062310637-L.jpg",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:25,titulo:"É Assim que Acaba",tipo:"livro",ano:2016,genero:"Romance e drama",descricao:"Lily Bloom tenta construir uma nova vida e precisa refletir sobre amor, escolhas difíceis e os padrões que deseja romper.",imagem:"https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:26,titulo:"Verity",tipo:"livro",ano:2018,genero:"Suspense psicológico",descricao:"Uma escritora aceita terminar a série de livros de uma autora famosa e encontra informações perturbadoras durante sua pesquisa.",imagem:"https://covers.openlibrary.org/b/isbn/9781538724736-L.jpg",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:27,titulo:"Os Sete Maridos de Evelyn Hugo",tipo:"livro",ano:2017,genero:"Drama e romance",descricao:"Uma estrela de Hollywood decide contar a história de sua vida e revelar os segredos por trás de seus sete casamentos.",imagem:"https://covers.openlibrary.org/b/isbn/9781501161933-L.jpg",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:28,titulo:"O Iluminado",tipo:"livro",ano:1977,genero:"Terror psicológico",descricao:"Uma família passa o inverno em um hotel isolado, onde acontecimentos assustadores começam a ameaçar sua tranquilidade.",imagem:"https://covers.openlibrary.org/b/isbn/9780307743657-L.jpg",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:30,titulo:"Forrest Gump",tipo:"filme",ano:1994,genero:"Drama e romance",descricao:"Forrest relembra sua vida extraordinária e os acontecimentos históricos dos quais participou sem perceber.",imagem:"https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",trailer:"https://www.youtube.com/results?search_query=Forrest+Gump+trailer",ganhouOscar:true,indicadoOscar:true},
{id:31,titulo:"Clube da Luta",tipo:"filme",ano:1999,genero:"Drama e suspense",descricao:"Um homem insatisfeito com a própria vida conhece Tyler Durden e acaba envolvido em um clube clandestino de luta.",imagem:"https://image.tmdb.org/t/p/w500/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",trailer:"https://www.youtube.com/results?search_query=Clube+da+Luta+trailer",ganhouOscar:false,indicadoOscar:true},
{id:32,titulo:"O Show de Truman",tipo:"filme",ano:1998,genero:"Drama e ficção científica",descricao:"Truman começa a desconfiar de sua realidade e tenta descobrir a verdade sobre o mundo em que vive.",imagem:"https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg",trailer:"https://www.youtube.com/results?search_query=O+Show+de+Truman+trailer",ganhouOscar:false,indicadoOscar:true},
{id:34,titulo:"Whiplash: Em Busca da Perfeição",tipo:"filme",ano:2014,genero:"Drama e música",descricao:"Um jovem baterista enfrenta um professor extremamente exigente enquanto tenta alcançar a excelência musical.",imagem:"https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",trailer:"https://www.youtube.com/results?search_query=Whiplash+trailer",ganhouOscar:true,indicadoOscar:true},
{id:38,titulo:"Friends",tipo:"serie",ano:1994,genero:"Comédia",descricao:"Seis amigos compartilham relacionamentos, problemas profissionais e momentos engraçados enquanto vivem em Nova York.",imagem:"https://image.tmdb.org/t/p/w500/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",trailer:"https://www.youtube.com/results?search_query=Friends+serie+trailer",ganhouOscar:false,indicadoOscar:false},
{id:39,titulo:"The Office",tipo:"serie",ano:2005,genero:"Comédia",descricao:"O cotidiano de funcionários de uma empresa de papel é mostrado em um falso documentário cheio de situações constrangedoras.",imagem:"https://image.tmdb.org/t/p/w500/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg",trailer:"https://www.youtube.com/results?search_query=The+Office+serie+trailer",ganhouOscar:false,indicadoOscar:false},
{id:40,titulo:"Game of Thrones",tipo:"serie",ano:2011,genero:"Fantasia e drama",descricao:"Famílias poderosas disputam o controle de Westeros enquanto ameaças misteriosas surgem além do reino.",imagem:"https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",trailer:"https://www.youtube.com/results?search_query=Game+of+Thrones+trailer",ganhouOscar:false,indicadoOscar:false},
{id:41,titulo:"The Good Place",tipo:"serie",ano:2016,genero:"Comédia e fantasia",descricao:"Uma mulher chega ao que acredita ser o lugar perfeito após a morte e tenta entender como se tornar uma pessoa melhor.",imagem:"https://image.tmdb.org/t/p/w500/qIhsuhoIYR5yTnDta0IL4senbeN.jpg",trailer:"https://www.youtube.com/results?search_query=The+Good+Place+trailer",ganhouOscar:false,indicadoOscar:false},
{id:43,titulo:"A Empregada",tipo:"livro",ano:2022,genero:"Suspense psicológico",descricao:"Millie consegue um emprego na casa de uma família rica, mas logo percebe que aquele lar esconde segredos perigosos.",imagem:"https://covers.openlibrary.org/b/isbn/9781538742570-L.jpg",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:44,titulo:"Teto para Dois",tipo:"livro",ano:2019,genero:"Romance e comédia",descricao:"Tiffy e Leon dividem o mesmo apartamento em horários diferentes e começam a se conhecer por meio de bilhetes.",imagem:"https://covers.openlibrary.org/b/isbn/9781984806758-L.jpg",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:45,titulo:"O Pequeno Príncipe",tipo:"livro",ano:1943,genero:"Literatura e fantasia",descricao:"Um piloto conhece um pequeno príncipe que conta histórias de suas viagens e ensina lições sobre amizade e vida.",imagem:"https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:46,titulo:"Crime e Castigo",tipo:"livro",ano:1866,genero:"Romance psicológico e clássico",descricao:"Raskólnikov enfrenta as consequências morais e psicológicas de um crime que comete em São Petersburgo.",imagem:"https://covers.openlibrary.org/b/isbn/9780486415871-L.jpg",trailer:"",ganhouOscar:false,indicadoOscar:false},
{id:47,titulo:"O Morro dos Ventos Uivantes",tipo:"livro",ano:1847,genero:"Romance e drama",descricao:"A relação intensa entre Catherine e Heathcliff desencadeia conflitos, ressentimentos e consequências que atravessam gerações.",imagem:"https://covers.openlibrary.org/b/isbn/9780141439556-L.jpg",trailer:"",ganhouOscar:false,indicadoOscar:false}
]

const id = elemento => document.getElementById(elemento);
let selecionada = null;
let usuario = null;
let resenhas = [];

// Cria os cards do catálogo; por padrão, mostra todas as obras.
function mostrarCatalogo(lista = obras) {
    id("resultados").innerHTML = "";
    lista.forEach(obra => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img class="imagem-obra" src="${obra.imagem}" alt="${obra.titulo}">
            <div class="card-conteudo">
                <h3>${obra.titulo}</h3>
                <p>${obra.ano} • ${obra.tipo}</p>
                <button class="detalhes">Ver detalhes e avaliar</button>
                <button class="favorito">${obra.favorito ? "♥ Favorito" : "♡ Favoritar"}</button>
            </div>`;
        card.querySelector("img").onerror = function() {
            this.onerror = null;
            this.src = "https://placehold.co/400x600/17121f/ffffff?text=Plot+Twist";
        };
        card.querySelector(".detalhes").onclick = () => mostrarDetalhes(obra);
        card.querySelector(".favorito").onclick = () => {
            obra.favorito = !obra.favorito;
            atualizarFavoritos();
            pesquisar();
            if (selecionada?.id === obra.id) mostrarDetalhes(obra);
        };
        id("resultados").appendChild(card);
    });
    if (!lista.length) id("resultados").innerHTML = "<p>Nenhuma obra encontrada.</p>";
}

function pesquisar(event) {
    if (event) event.preventDefault();
    const texto = id("campoPesquisa").value.toLowerCase().trim();
    const tipo = id("tipoPesquisa").value;
    // O resultado precisa corresponder ao texto e, se escolhido, à categoria.
    mostrarCatalogo(obras.filter(obra =>
        obra.titulo.toLowerCase().includes(texto) &&
        (tipo === "todos" || obra.tipo === tipo)
    ));
}

id("formPesquisa").addEventListener("submit", pesquisar);
id("tipoPesquisa").addEventListener("change", pesquisar);

function mostrarDetalhes(obra) {
    // Guarda a seleção para associar a ela as resenhas enviadas.
    selecionada = obra;
    const tipo = { filme: "Filme", serie: "Série", livro: "Livro" }[obra.tipo];
    const oscar = obra.tipo === "filme"
        ? `<p><strong>Oscar:</strong> ${obra.indicadoOscar ? "Indicado" : "Sem indicação cadastrada"}${obra.venceuOscar ? " • Vencedor" : ""}</p>`
        : "";
    id("detalhesObra").innerHTML = `
        <div class="detalhes-container">
            <img class="imagem-detalhes" src="${obra.imagem}" alt="${obra.titulo}">
            <div>
                <h3>${obra.titulo}</h3>
                <p><strong>Categoria:</strong> ${tipo}</p>
                <p><strong>Ano:</strong> ${obra.ano}</p>
                <p><strong>Gênero:</strong> ${obra.genero}</p>
                <p>${obra.descricao}</p>
                ${oscar}
                ${obra.trailer ? `<p><a href="${obra.trailer}" target="_blank" rel="noopener noreferrer">Ver trailer</a></p>` : ""}
                <button id="favoritarDetalhe">${obra.favorito ? "♥ Remover favorito" : "♡ Adicionar favorito"}</button>
            </div>
        </div>`;
    id("detalhesObra").querySelector("img").onerror = function() {
        this.onerror = null;
        this.src = "https://placehold.co/400x600/17121f/ffffff?text=Plot+Twist";
    };
    id("favoritarDetalhe").onclick = () => {
        obra.favorito = !obra.favorito;
        atualizarFavoritos();
        pesquisar();
        mostrarDetalhes(obra);
    };
    if (id("obraSelecionadaMensagem")) {
        id("obraSelecionadaMensagem").textContent = "Avaliação para: " + obra.titulo;
    }
    mostrarResenhas();
    id("detalhesObra").scrollIntoView({
        behavior: "instant",
        block: "start"

        
    });
}
// Descer automaticamente até a área de avaliações
    id("resenhas").scrollIntoView({
    behavior: "smooth",
    block: "start"
});

function atualizarFavoritos() {
    id("listaFavoritos").innerHTML = "";
    // A propriedade favorito é alternada nos próprios objetos de obra.
    const favoritos = obras.filter(obra => obra.favorito);
    if (!favoritos.length) {
        id("listaFavoritos").innerHTML = "<p>Nenhum favorito adicionado.</p>";
        return;
    }
    favoritos.forEach(obra => {
        const botao = document.createElement("button");
        botao.textContent = obra.titulo;
        botao.onclick = () => mostrarDetalhes(obra);
        id("listaFavoritos").appendChild(botao);
    });
}

id("formResenha").addEventListener("submit", event => {
    event.preventDefault();
    if (!selecionada) {
        alert("Escolha uma obra antes de avaliar.");
        return;
    }
    // Cada resenha guarda o ID da obra para ser exibida no contexto correto.
    resenhas.push({
        obraId: selecionada.id,
        nome: id("nomeUsuario").value.trim(),
        nota: id("notaUsuario").value,
        texto: id("textoResenha").value.trim()
    });
    id("formResenha").reset();
    if (usuario) id("nomeUsuario").value = usuario.nome;
    mostrarResenhas();
});

function mostrarResenhas() {
    id("listaResenhas").innerHTML = "";
    if (!selecionada) {
        id("listaResenhas").innerHTML = "<p>Selecione uma obra para ver as avaliações.</p>";
        return;
    }
    // Mostra somente as avaliações relacionadas à obra atualmente selecionada.
    const lista = resenhas.filter(r => r.obraId === selecionada.id);
    if (!lista.length) {
        id("listaResenhas").innerHTML = "<p>Esta obra ainda não tem avaliações.</p>";
        return;
    }
    lista.forEach(r => {
        const artigo = document.createElement("article");
        artigo.className = "resenha";
        const nome = document.createElement("h4");
        nome.textContent = `${r.nome} • Nota: ${r.nota}/5`;
        const texto = document.createElement("p");
        texto.textContent = r.texto;
        artigo.append(nome, texto);
        id("listaResenhas").appendChild(artigo);
    });
}


// CADASTRO DE USUÁRIO

// O cadastro libera o formulário de resenhas e atualiza os dados do perfil.
if (id("formCadastro")) {
    id("formCadastro").addEventListener("submit", event => {
        event.preventDefault();

        const nome = id("cadastroNome").value.trim();
        const email = id("cadastroEmail").value.trim();
        const senha = id("cadastroSenha").value;

        if (!nome || !email || !senha) {
            alert("Preencha todos os campos!");
            return;
        }

        // Criando o usuário
        usuario = {
            nome: nome,
            email: email
        };

        // Atualizando as informações do perfil
        id("nomePerfil").textContent = usuario.nome;
        id("emailPerfil").textContent = usuario.email;

        // Escondendo o cadastro e mostrando o perfil
        id("cadastroUsuario").hidden = true;
        id("perfilUsuario").hidden = false;

        // Habilitando o formulário de resenhas
        id("nomeUsuario").disabled = false;
        id("notaUsuario").disabled = false;
        id("textoResenha").disabled = false;
        id("botaoPublicar").disabled = false;

        // Preenchendo o nome automaticamente
        id("nomeUsuario").value = usuario.nome;

        id("obraSelecionadaMensagem").textContent =
            "Agora você pode publicar suas resenhas!";

        alert("Conta criada com sucesso!");
    });
}

// BOTÃO SAIR

// Ao sair, limpa o estado do usuário e volta a bloquear o envio de resenhas.
if (id("botaoSair")) {
    id("botaoSair").onclick = () => {

        usuario = null;

        // Escondendo o perfil
        id("perfilUsuario").hidden = true;

        // Mostrando novamente o cadastro
        id("cadastroUsuario").hidden = false;

        // Limpando os campos do cadastro
        id("formCadastro").reset();

        // Desabilitando as resenhas
        id("nomeUsuario").disabled = true;
        id("notaUsuario").disabled = true;
        id("textoResenha").disabled = true;
        id("botaoPublicar").disabled = true;

        id("formResenha").reset();

        alert("Você saiu da sua conta!");
    };
}


// Estado inicial da página: catálogo, favoritos e resenhas vazias.
mostrarCatalogo();
atualizarFavoritos();
mostrarResenhas();
