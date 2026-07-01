# pmg-subextractor

O PMG Subdomain Extractor é uma ferramenta de automação desenvolvida especificamente para administradores do Proxmox Mail Gateway (PMG)
Sua função principal é extrair listas de subdomínios de forma rápida e precisa, eliminando o trabalho manual de copiar dados de grids extensos.

<img width="432" height="184" alt="image" src="https://github.com/user-attachments/assets/dc9e261d-7924-456f-8e14-0014ac17e3eb" />
<br>
<img width="321" height="364" alt="image" src="https://github.com/user-attachments/assets/77ccf9fc-9019-4ad0-b013-ce53502b88e9" />
<br>
<b>Como a Extensão Funciona</b>

Injeção de Interface (Overlay): Ao ser ativada, a extensão cria um painel de controle flutuante diretamente na página do Proxmox. Isso permite que você navegue ou visualize os dados enquanto a ferramenta trabalha, sem que o popup feche sozinho.

Rolagem Automática Inteligente: O Proxmox utiliza "Buffered Rendering" (carrega apenas o que aparece na tela). A extensão simula a rolagem do mouse automaticamente, percorrendo todo o grid do início ao fim para garantir que 100% dos itens sejam lidos.

Filtragem Rigorosa de Subdomínios: Diferente de capturas simples, esta ferramenta utiliza uma lógica avançada para distinguir domínios principais de subdomínios.
Captura: @sub.empresa.com.br, @vendas.dominio.com.

Ignora: @empresa.com.br, @dominio.com (mesmo com extensões compostas).

Exportação de Dados: Após a conclusão, a extensão remove duplicatas, ordena a lista alfabeticamente e oferece botões para copiar tudo para a área de transferência ou baixar como um arquivo .txt.


<b>Guia de Instalação (Passo a Passo)</b>

Como esta é uma extensão personalizada (não está na Chrome Web Store), a instalação é feita via "Modo do Desenvolvedor":

Extração dos Arquivos:

Baixe o arquivo .zip da extensão e extraia-o em uma pasta permanente no seu computador (ex: Documentos/Extensao-PMG).

Acesso às Extensões do Chrome:

Abra o Google Chrome e digite chrome://extensions/ na barra de endereços.

Ativação do Modo do Desenvolvedor:

No canto superior direito da página, ative a chave "Modo do desenvolvedor".

Carregamento da Extensão:

Clique no botão "Carregar sem compactação" que apareceu no canto superior esquerdo.
Selecione a pasta onde você extraiu os arquivos da extensão (a pasta que contém o arquivo manifest.json).

Uso no Proxmox:

Acesse seu painel do Proxmox Mail Gateway.
Clique no ícone de quebra-cabeça (Extensões) no Chrome e fixe o PMG Extractor.
Clique no botão da extensão e selecione "Abrir Extrator" para iniciar a coleta.
