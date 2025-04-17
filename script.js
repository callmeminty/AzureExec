const editor = document.querySelector('.editor');
const lineNumbers = document.querySelector('.line-numbers');

function updateLineNumbers() {
    const lines = editor.value.split('\n');
    lineNumbers.innerHTML = lines.map((_, i) => `<div>${i + 1}</div>`).join('');
}

editor.addEventListener('input', () => {
    updateLineNumbers();
});

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
