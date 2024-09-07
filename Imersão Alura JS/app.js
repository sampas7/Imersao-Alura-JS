function buscar() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa === "") {
        // Se estiver vazio, exibe uma mensagem indicando que nada foi encontrado
        section.innerHTML = "<s1>Nada foi encontrado.</s1>";
        return; // Encerra a função
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        // Converte as propriedades de cada objeto para minúsculas para facilitar a comparação
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Verifica se o termo de pesquisa está presente no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se encontrar uma correspondência, adiciona um novo elemento HTML com os detalhes do dado à string de resultados
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.instagram}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">${dado.definicao}</a>
                </div>
            `;
        }
    }

    // Verifica se foram encontrados resultados
    if (!resultados) {
        // Se não houver resultados, exibe uma mensagem mais específica, indicando que o Sampas não fornece o serviço
        section.innerHTML = "<s1>Nada foi encontrado, o Sampas não fornece esse serviço.</s1>";
    } else {
        // Se houver resultados, atualiza o conteúdo da seção com os resultados construídos
        section.innerHTML = resultados;
    }
}