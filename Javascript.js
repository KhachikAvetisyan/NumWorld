// Պահպանում ենք գրանցվող օգտագործողի համարը (հաշվառման համար)
let userCount = 0;

// Վերադարձնում է անուն կամ թիվ՝ ըստ գրանցման հերթականության
function generateUserId() {
    userCount++;
    return userCount;  // Ավելացնում ենք 1 և վերադարձնում հաջորդ համարը
}

// Գրանցման ֆունկցիա
function signUp() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ստուգում ենք, արդյոք բոլոր դաշտերը լրացված են
    if (username === '' || password === '') {
        alert('Խնդրում ենք լրացնել բոլոր դաշտերը!');
        return;
    }

    // Ստեղծում ենք օգտատիրոջ ID
    const userId = generateUserId();

    // Ստեղծում ենք ընդունելի հաղորդագրություն
    alert(`Գրանցումը հաջողությամբ ավարտվեց։ Ձեր ID-ն է: ${userId}`);
    
    // Գրանցվելուց հետո արդիականացնում ենք ինտերֆեյսը
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('welcomeMessage').innerText = `Բարի գալուստ, օգտատեր #${userId}!`;
    document.getElementById('chatBox').style.display = 'block';  // Չատը ցույց տալու համար
}

// Չատը բացելու համար ֆունկցիա
function openChat() {
    const message = document.getElementById('chatMessage').value;
    if (message !== '') {
        const chatWindow = document.getElementById('chatWindow');
        const newMessage = document.createElement('div');
        newMessage.classList.add('chat-message');
        newMessage.innerText = message;
        chatWindow.appendChild(newMessage);
        document.getElementById('chatMessage').value = '';  // Մաքրել տողը
    }
}
