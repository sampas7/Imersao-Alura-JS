function buscar() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == ""){
        section.innerHTML = "<s1>Nada foi encontrado.</s1>"
        return             
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = ""
    let titulo = ""
    let descricao = ""
    let tags = ""

    // Para cada item de dados, constrói o HTML dos resultados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.instagram}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">${dado.definicao}</a>
            </div>
            `
        }
    }

    // Caso não tenha encontrado nada, 
    if (!resultados){
        resultados = section.innerHTML = "<s1>Nada foi encontrado, o Sampas não fornece esse serviço.</s1>"       
    }

    // Atualiza o conteúdo do elemento HTML com os resultados construídos
    section.innerHTML = resultados

}