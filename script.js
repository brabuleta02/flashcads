// script.js

// Definir os flashcards de animais
const animals = [
    { name: "Leão", description: "O leão é conhecido como o 'rei da selva', mas na verdade vive em savanas e florestas abertas." },
    { name: "Girafa", description: "A girafa é o animal terrestre mais alto, podendo atingir até 5,5 metros de altura!" },
    { name: "Elefante", description: "Os elefantes são conhecidos por sua memória impressionante e pela sua grande inteligência." },
    { name: "Orangotango", description: "Os orangotangos são nativos das florestas tropicais de Sumatra e Bornéu e estão em perigo de extinção." },
    { name: "Tigre", description: "Os tigres são os maiores felinos do mundo e têm um padrão único de listras em seu pelo." },
];

// Variáveis para controle de acertos e erros
let correct = 0;
let incorrect = 0;

// Função para criar os flashcards
function createFlashcards() {
    const container = document.getElementById('flashcards');
    container.innerHTML = '';

    animals.forEach((animal, index) => {
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');
        flashcard.setAttribute('data-id', index);

        // Frente do flashcard
        const front = document.createElement('div');
        front.classList.add('front');
        front.innerHTML = `<p>${animal.name}</p>`;

        // Verso do flashcard
        const back = document.createElement('div');
        back.classList.add('back');
        back.innerHTML = `<p>${animal.description}</p>`;

        flashcard.appendChild(front);
        flashcard.appendChild(back);
        container.appendChild(flashcard);

        // Adicionar evento de click para virar o cartão
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });
    });
}

// Função para embaralhar os flashcards
function shuffleCards() {
    animals.sort(() => Math.random() - 0.5); // Algoritmo de embaralhamento simples
    createFlashcards(); // Recria os flashcards com a nova ordem
}

// Função para mostrar os flashcards seguintes
function nextCard() {
    // Reinicia todos os flashcards para o estado inicial
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => card.classList.remove('flipped'));
    
    // Vai para o próximo flashcard
    let currentIndex = 0;
    const totalCards = flashcards.length;
    
    function showNextCard() {
        flashcards[currentIndex].classList.add('flipped');
        currentIndex = (currentIndex + 1) % totalCards;
    }

    showNextCard(); // Chama a função para exibir o primeiro
}

// Função para atualizar os pontos
function updateScore(isCorrect) {
    if (isCorrect) {
        correct++;
        document.getElementById('correct').textContent = correct;
    } else {
        incorrect++;
        document.getElementById('incorrect').textContent = incorrect;
    }
}

// Inicialização
document.getElementById('shuffleCards').addEventListener('click', shuffleCards);
document.getElementById('nextCard').addEventListener('click', nextCard);

// Chama a função para criar os flashcards inicialmente
createFlashcards();
