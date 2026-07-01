document.getElementById('extractBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      window.postMessage({ type: "START_PMG_EXTRACTION" }, "*");
    }
  });
  
  // Fecha o popup do Chrome automaticamente para não atrapalhar a visualização da Overlay
  window.close();
});
