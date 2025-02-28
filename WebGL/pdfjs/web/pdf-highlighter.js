function highlightPDFText(searchText) {
    const pdfIframe = document.getElementById("pdf-viewer");
    if (!pdfIframe) {
        console.error("PDF viewer iframe not found.");
        return;
    }

    // Clear previous highlight first (in case new highlight is unrelated)
    pdfIframe.contentWindow.postMessage({ type: "clearHighlight" }, "*");

    // Now send the new highlight request
    pdfIframe.contentWindow.postMessage({ type: "highlight", text: searchText }, "*");
}

window.unityHighlightPDF = highlightPDFText;
