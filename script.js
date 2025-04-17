const editor = document.querySelector('.editor');
const lineNumbers = document.querySelector('.line-numbers');

function updateLineNumbers() {
    const lines = editor.value.split('\n');
    const currentPosition = editor.selectionStart;
    const currentLine = editor.value.substr(0, currentPosition).split('\n').length;
    lineNumbers.innerHTML = lines.map((_, i) => `<div class="${i + 1 === currentLine ? 'current-line' : ''}">${i + 1}</div>`).join('');
}

editor.addEventListener('input', updateLineNumbers);
editor.addEventListener('click', updateLineNumbers);
editor.addEventListener('keyup', updateLineNumbers);
editor.addEventListener('select', updateLineNumbers);

// Typing effect
let typingTimeout;

editor.addEventListener('keydown', (e) => {
    clearTimeout(typingTimeout);
    editor.classList.add('typing');
    typingTimeout = setTimeout(() => {
        editor.classList.remove('typing');
    }, 100);
});

updateLineNumbers();
