(function() {
    console.log("PMG Sub-Extractor - Subdomain Validation Loaded");

    let overlay = null;
    let isExtracting = false;

    window.addEventListener("message", function(event) {
        if (event.data.type && event.data.type === "START_PMG_EXTRACTION") {
            createOverlay();
            if (!isExtracting) {
                extractSubdomains();
            }
        }
    });

    function createOverlay() {
        if (overlay) return;
        overlay = document.createElement('div');
        overlay.id = 'pmg-extractor-overlay';
        overlay.innerHTML = `
            <div style="background: white; border: 2px solid #333; border-radius: 8px; width: 320px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); font-family: sans-serif; position: fixed; top: 20px; right: 20px; z-index: 999999;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <h3 style="margin: 0; font-size: 16px;">PMG Sub-Extractor 1.2</h3>
                    <button id="pmg-close-btn" style="background: #ff4444; color: white; border: none; border-radius: 4px; padding: 2px 8px; cursor: pointer; font-weight: bold;">X</button>
                </div>
                <div id="pmg-status" style="font-size: 14px; margin-bottom: 10px; color: #333;">Iniciando Extração...</div>
                <textarea id="pmg-result" readonly style="display:none; width: 100%; height: 150px; font-size: 12px; margin-bottom: 10px;"></textarea>
                <div style="display: flex; gap: 5px;">
                    <button id="pmg-copy-btn" style="display:none; flex: 1; padding: 8px; cursor: pointer; background: #2196F3; color: white; border: none; border-radius: 4px;">Clipboard</button>
                    <button id="pmg-download-btn" style="display:none; flex: 1; padding: 8px; cursor: pointer; background: #4CAF50; color: white; border: none; border-radius: 4px;">Baixar em TXT</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        document.getElementById('pmg-close-btn').onclick = () => { overlay.remove(); overlay = null; };
        document.getElementById('pmg-copy-btn').onclick = () => {
            const resultArea = document.getElementById('pmg-result');
            resultArea.select();
            document.execCommand('copy');
            alert('Copiado!');
        };
        document.getElementById('pmg-download-btn').onclick = () => {
            const resultArea = document.getElementById('pmg-result');
            const blob = new Blob([resultArea.value], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'subextraidos_pmg.txt';
            a.click();
            URL.revokeObjectURL(url);
        };
    }

    /**
     * Valida se uma string é um subdomínio real.
     * Ignora domínios principais como @exemplo.com ou @exemplo.com.br
     */
    function isValidSubdomain(text) {
        if (!text.startsWith('@')) return false;
        const domain = text.substring(1).toLowerCase();
        const parts = domain.split('.');
        
        // Se tiver menos de 3 partes, não pode ser subdomínio (ex: exemplo.com.br tem 3 partes)
        // No entanto, exemplo.com.br é um domínio principal.
        // Precisamos verificar se a última parte é um TLD comum ou se a penúltima é um SLD (com, net, org, gov, etc)
        
        const slds = ['com', 'net', 'org', 'gov', 'edu', 'mil', 'art', 'inf', 'adm', 'ind'];
        
        if (parts.length < 3) return false; // ex: @exemplo.com (2 partes) -> descartado

        if (parts.length === 3) {
            // Se tiver 3 partes, só é subdomínio se a penúltima parte NÃO for um SLD conhecido
            // ex: @sub.exemplo.com -> 3 partes, penúltima é 'exemplo' (não é SLD) -> OK
            // ex: @exemplo.com.br -> 3 partes, penúltima é 'com' (é SLD) -> DESCARTADO
            if (slds.includes(parts[1])) {
                return false;
            }
            return true;
        }

        // Se tiver 4 ou mais partes, quase certamente é um subdomínio
        // ex: @sub.exemplo.com.br -> 4 partes -> OK
        return true;
    }

    async function extractSubdomains() {
        isExtracting = true;
        const subdomains = new Set();
        const gridView = document.querySelector('.x-grid-view');
        
        if (!gridView) {
            const status = document.getElementById('pmg-status');
            if (status) status.innerText = "Erro: Grid não Encontrado.";
            isExtracting = false;
            return;
        }

        const scrollContainer = gridView;
        let lastScrollTop = -1;
        
        while (scrollContainer.scrollTop !== lastScrollTop) {
            lastScrollTop = scrollContainer.scrollTop;
            
            const cells = document.querySelectorAll('.x-grid-cell');
            cells.forEach(cell => {
                const text = cell.innerText.trim();
                // Captura inicial ampla para filtrar depois
                const match = text.match(/@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
                if (match && isValidSubdomain(match[0])) {
                    subdomains.add(match[0]);
                }
            });

            const status = document.getElementById('pmg-status');
            if (status) status.innerText = `Extraindo -> Encontrados: ${subdomains.size}`;

            scrollContainer.scrollTop += 500;
            await new Promise(resolve => setTimeout(resolve, 800));
        }

        const status = document.getElementById('pmg-status');
        const resultArea = document.getElementById('pmg-result');
        const copyBtn = document.getElementById('pmg-copy-btn');
        const downloadBtn = document.getElementById('pmg-download-btn');

        if (status) status.innerText = `Concluído! Total: ${subdomains.size}`;
        if (resultArea) {
            resultArea.value = Array.from(subdomains).sort().join('\n');
            resultArea.style.display = 'block';
        }
        if (copyBtn) copyBtn.style.display = 'block';
        if (downloadBtn) downloadBtn.style.display = 'block';
        
        isExtracting = false;
    }
})();
