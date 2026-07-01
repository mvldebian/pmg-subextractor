<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PMG Subdomain Extractor - Documentação</title>
    <style>
        :root {
            --primary: #2196F3;
            --secondary: #4CAF50;
            --dark: #333;
            --light: #f4f4f9;
            --white: #ffffff;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--dark);
            background-color: var(--light);
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 40px auto;
            background: var(--white);
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        header {
            text-align: center;
            border-bottom: 2px solid var(--light);
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        h1 { color: var(--primary); margin: 0; }
        h2 { color: var(--primary); border-left: 5px solid var(--primary); padding-left: 15px; margin-top: 30px; }
        .feature-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
        }
        .feature-item {
            background: var(--light);
            padding: 15px;
            border-radius: 8px;
            border-top: 3px solid var(--secondary);
        }
        .feature-item strong { color: var(--dark); display: block; margin-bottom: 5px; }
        .steps {
            background: #fff8e1;
            padding: 20px;
            border-radius: 8px;
            border-left: 5px solid #ffc107;
        }
        ol { padding-left: 20px; }
        li { margin-bottom: 10px; }
        code {
            background: #eee;
            padding: 2px 5px;
            border-radius: 4px;
            font-family: monospace;
        }
        footer {
            text-align: center;
            margin-top: 40px;
            font-size: 0.9em;
            color: #777;
        }
        .btn-download {
            display: inline-block;
            background: var(--primary);
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>PMG Subdomain Extractor</h1>
        <p>Extrator Inteligente de Subdomínios para Proxmox Mail Gateway</p>
    </header>

    <section>
        <h2>O que é?</h2>
        <p>Uma extensão para Google Chrome desenvolvida para automatizar a coleta de subdomínios (<code>@sub.exemplo.com.br</code>) diretamente da interface do Proxmox Mail Gateway. Ela resolve o desafio de copiar dados de grids que carregam conteúdo sob demanda (Lazy Loading).</p>
    </section>

    <section>
        <h2>Funcionalidades Principais</h2>
        <div class="feature-grid">
            <div class="feature-item">
                <strong>Rolagem Automática</strong>
                Percorre todo o grid automaticamente para capturar itens que ainda não foram renderizados na tela.
            </div>
            <div class="feature-item">
                <strong>Filtragem Rigorosa</strong>
                Algoritmo que diferencia subdomínios de domínios principais, ignorando endereços como <code>@empresa.com.br</code>.
            </div>
            <div class="feature-item">
                <strong>Interface Persistente</strong>
                Painel flutuante (Overlay) que não fecha ao clicar fora, permitindo acompanhar o progresso em tempo real.
            </div>
            <div class="feature-item">
                <strong>Exportação Rápida</strong>
                Botões dedicados para copiar a lista limpa para o clipboard ou baixar como arquivo <code>.txt</code>.
            </div>
        </div>
    </section>

    <section>
        <h2>Como Instalar</h2>
        <div class="steps">
            <ol>
                <li><strong>Baixe o ZIP:</strong> Obtenha o arquivo da extensão e extraia-o em uma pasta no seu computador.</li>
                <li><strong>Modo do Desenvolvedor:</strong> No Chrome, acesse <code>chrome://extensions/</code> e ative o "Modo do desenvolvedor" no canto superior direito.</li>
                <li><strong>Carregar Extensão:</strong> Clique em "Carregar sem compactação" e selecione a pasta onde os arquivos foram extraídos.</li>
                <li><strong>Fixar Extensão:</strong> Clique no ícone de quebra-cabeça do Chrome e fixe o ícone do PMG Extractor para fácil acesso.</li>
            </ol>
        </div>
    </section>

    <section>
        <h2>Como Usar</h2>
        <p>Abra o painel do seu Proxmox Mail Gateway na tela de domínios. Clique no ícone da extensão e depois em <strong>"Abrir Extrator"</strong>. O painel flutuante aparecerá e a extração começará imediatamente conforme você aciona os comandos no painel.</p>
    </section>

    <footer>
        <p>Desenvolvido para otimização de fluxos de trabalho no Proxmox Mail Gateway.</p>
    </footer>
</div>

</body>
</html>
