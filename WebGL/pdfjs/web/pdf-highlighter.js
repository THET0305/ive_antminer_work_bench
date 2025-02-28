// Automatically detect and set worker source path dynamically
// This works regardless of whether your Unity build is hosted at the root, in a subfolder, or on Netlify.

(function() {
    // Find the base path for pdfjs
    const scriptTags = document.getElementsByTagName("script");
    let pdfJsBaseUrl = "";

    for (let script of scriptTags) {
        if (script.src.includes("pdf-helper.js")) { // Adjust to match your filename
            const scriptPath = script.src;
            const folderPath = scriptPath.substring(0, scriptPath.lastIndexOf("/") + 1);
            pdfJsBaseUrl = folderPath + "pdfjs/build/";
            break;
        }
    }

    if (pdfJsBaseUrl === "") {
        console.warn("Failed to detect pdfjs base URL. Using fallback.");
        pdfJsBaseUrl = "pdfjs/build/";
    }

    // Set the worker source path
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfJsBaseUrl + 'pdf.worker.mjs';

    console.log("PDF.js Worker Source set to: ", pdfjsLib.GlobalWorkerOptions.workerSrc);
})();

// Listen for messages from Unity or parent window (depending on embedding)
window.addEventListener("message", function(event) {
    if (event.data.type === "highlight") {
        highlightText(event.data.text);
    }
}, false);

// Highlights the requested text inside the currently loaded PDF
function highlightText(text) {
    let pdfViewer = document.querySelector("div.textLayer");
    if (!pdfViewer) {
        console.warn("Text layer not found in PDF viewer.");
        return;
    }

    let spans = pdfViewer.querySelectorAll("span");
    let found = false;

    spans.forEach(span => {
        if (span.innerText.includes(text)) {
            span.style.backgroundColor = "yellow"; // Highlight match
            span.scrollIntoView({ behavior: "smooth", block: "center" });
            found = true;
        }
    });

    if (!found) {
        console.warn(`Text "${text}" not found in PDF.`);
    }
}
