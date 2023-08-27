const htmlCodeInput = document.getElementById('html-code');
const cssCodeInput = document.getElementById('css-code');
const outputFrame = document.getElementById('output');

htmlCodeInput.addEventListener('input', updateOutput);
cssCodeInput.addEventListener('input', updateOutput);

function updateOutput() {
    const htmlCode = htmlCodeInput.value;
    const cssCode = `<style>${cssCodeInput.value}</style>`;
    const combinedCode = `${htmlCode} ${cssCode}`;
    outputFrame.contentDocument.body.innerHTML = combinedCode;
}

updateOutput(); // Initialize output