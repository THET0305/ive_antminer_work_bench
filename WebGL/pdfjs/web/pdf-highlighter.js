function highlightPDFText(searchText) {
    const pdfIframe = document.getElementById("pdf-viewer");
    if (!pdfIframe) {
        console.error("PDF viewer iframe not found.");
        return;
    }

    pdfIframe.contentWindow.postMessage({ type: "clearHighlight" }, "*");
    pdfIframe.contentWindow.postMessage({ type: "highlight", text: searchText }, "*");
}

window.unityHighlightPDF = highlightPDFText;
