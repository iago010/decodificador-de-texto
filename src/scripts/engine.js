// Função para obter o texto criptografado ou descriptografado
function obterTextoCriptografado(texto) {
    const criptografia = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Verifica se o texto contém as palavras reservadas "enter", "imes", "ai", "ober" ou "ufat" e substitui pelas letras correspondentes
    const textoCriptografado = texto.replace(/\b(enter|imes|ai|ober|ufat)\b/g, match => {
        return criptografia[match];
    });

    return textoCriptografado;
}

// Função para criptografar o texto
function criptografar() {
    const entrada = document.getElementById("entradaTexto").value.toLowerCase();
    if (entrada) {
        // Criptografar o texto
        let textoCriptografado = "";
        for (let i = 0; i < entrada.length; i++) {
            switch (entrada[i]) {
                case 'e':
                    textoCriptografado += "enter";
                    break;
                case 'i':
                    textoCriptografado += "imes";
                    break;
                case 'a':
                    textoCriptografado += "ai";
                    break;
                case 'o':
                    textoCriptografado += "ober";
                    break;
                case 'u':
                    textoCriptografado += "ufat";
                    break;
                default:
                    textoCriptografado += entrada[i];
            }
        }
        // Exibir o texto criptografado
        document.getElementById("resultadoText").textContent = textoCriptografado;
        document.getElementById("textoImagem").style.display = "none"; // Ocultar imagem
    } else {
        // Limpar texto e mostrar a imagem
        document.getElementById("resultadoText").textContent = "";
        document.getElementById("textoImagem").style.display = "block";
    }
}

function descriptografar() {
    const entrada = document.getElementById("entradaTexto").value.toLowerCase();
    if (entrada) {
        // Descriptografar o texto
        let textoDescriptografado = "";
        for (let i = 0; i < entrada.length; i++) {
            switch (entrada.substring(i, i + 5)) {
                case 'enter':
                    textoDescriptografado += "e";
                    i += 4;
                    break;
                case 'imes':
                    textoDescriptografado += "i";
                    i += 3;
                    break;
                case 'ai':
                    textoDescriptografado += "a";
                    i += 1;
                    break;
                case 'ober':
                    textoDescriptografado += "o";
                    i += 3;
                    break;
                case 'ufat':
                    textoDescriptografado += "u";
                    i += 3;
                    break;
                default:
                    textoDescriptografado += entrada[i];
            }
        }
        // Exibir o texto descriptografado
        document.getElementById("resultadoText").textContent = textoDescriptografado;
        document.getElementById("textoImagem").style.display = "none"; // Ocultar imagem
    } else {
        // Limpar texto e mostrar a imagem
        document.getElementById("resultadoText").textContent = "";
        document.getElementById("textoImagem").style.display = "block";
    }
}


// Função para copiar o texto criptografado ou descriptografado para a área de transferência
function copiarTexto() {
    const resultado = document.getElementById("resultadoText");
    const texto = resultado.textContent;

    // Criar uma área de transferência temporária
    const textarea = document.createElement("textarea");
    textarea.value = texto;
    document.body.appendChild(textarea);

    // Selecionar e copiar o texto
    textarea.select();
    document.execCommand("copy");

    // Remover a área de transferência temporária
    document.body.removeChild(textarea);

    // Exibir feedback para o usuário
    alert("Texto copiado para a área de transferência!");
}

// Configuração dos eventos de clique nos botões
document.getElementById("botaoCriptografar").addEventListener("click", criptografar);
document.getElementById("botaoDescriptografar").addEventListener("click", descriptografar);
// Configuração do evento de clique no botão "Copiar texto"
document.getElementById("copiarTexto").addEventListener("click", copiarTexto);
