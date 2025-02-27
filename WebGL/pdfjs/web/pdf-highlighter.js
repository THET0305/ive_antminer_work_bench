window.addEventListener("message", function(event) {
    if (event.data.type === "highlight") {
        highlightText(event.data.text);
    }
}, false);

function highlightText(text) {
    let pdfViewer = document.querySelector("div.textLayer");
    if (!pdfViewer) return;

    let spans = pdfViewer.querySelectorAll("span");
    spans.forEach(span => {
        if (span.innerText.includes(text)) {
            span.style.backgroundColor = "yellow"; // Highlight in yellow
            span.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
}
