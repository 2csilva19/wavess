 
      
/* Gabriel Silva Ferreira 3c 27/08/2025*/
      
      // Acessibilidade
        document.getElementById('botao-acessibilidade').addEventListener('click', function() {
            const opcoes = document.getElementById('opcoes-acessibilidade');
            opcoes.classList.toggle('apresenta-lista');
        });

        // Aumentar fonte
        document.getElementById('aumentar-fonte').addEventListener('click', function() {
            alterarTamanhoFonte(1);
        });

        // Diminuir fonte
        document.getElementById('diminuir-fonte').addEventListener('click', function() {
            alterarTamanhoFonte(-1);
        });

        // Alternar contraste
        document.getElementById('alterna-contraste').addEventListener('click', function() {
            document.body.classList.toggle('alto-contraste');
        });

        function alterarTamanhoFonte(direcao) {
            const elementosTexto = document.querySelectorAll('body, p, span, a, li');
            elementosTexto.forEach(el => {
                const tamanhoAtual = window.getComputedStyle(el, null).getPropertyValue('font-size');
                const tamanhoNumerico = parseFloat(tamanhoAtual);
                el.style.fontSize = (tamanhoNumerico + direcao) + 'px';
            });
        }

        // Suavizar rolagem para âncoras
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });