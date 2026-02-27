function calcular() {
    let rep = parseFloat(document.getElementById('repeticao').value);
    let emp = parseFloat(document.getElementById('empatia').value);
    let risco = parseFloat(document.getElementById('risco').value);

    // Cálculo McKinsey Simplificado
    let eixoY = (rep + (6 - risco)) / 2; 
    let eixoX = emp;

    // Posição no Gráfico
    let porcentagemBaixo = ((eixoY - 1) / 4) * 100;
    let porcentagemEsquerda = ((eixoX - 1) / 4) * 100;

    let bolinha = document.getElementById('bolinha');
    bolinha.style.bottom = porcentagemBaixo + "%";
    bolinha.style.left = porcentagemEsquerda + "%";

    // Resultado
    let titulo = "";
    let texto = "";

    if(eixoY > 3.5 && eixoX < 2.5) {
        titulo = "Robô (Automação Total)";
        texto = "Tarefa repetitiva e segura. A IA pode fazer 90% sozinha.";
    }else if (eixoY > 3 && eixoX >= 2.5) {
        titulo = " Co-Piloto (Superagência)";
        texto = "O Funcionário precisa supervisionar, mas a IA cria o rascunho.";
    }else if (eixoY < 2.5 && eixoX > 3.5) {
        titulo = "Apenas Humano";
        texto = "Muito complexo ou arriscado para IA agora.";
    }else {
        titulo = "🛠️ Assistente Básico";
        texto = "Use ferramentas simples, não gaste tempo desenvolvendo agentes complexos.";
    }

    document.getElementById('resultado-titulo').innerText = titulo;
    document.getElementById('resultado-texto').innerText = texto;
}
