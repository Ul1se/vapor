// script.js
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(user => user.username === username && user.password === password);

    if (user) {
        // Guardar sesión
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Inicio de sesión exitoso.");
        // Redirigir o cargar contenido
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

// Al cargar la página, verifica si hay un usuario conectado
window.onload = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        // Cargar contenido para el usuario
        // Ejemplo: mostrar el nombre del usuario en la interfaz
        const user = JSON.parse(loggedInUser);
        document.getElementById("welcome-message").innerText = `Bienvenido, ${user.username}!`;
    }
};

document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenido a Vapor");

    // Interactividad: selecciona juegos de la biblioteca
    const gameLists = document.querySelectorAll(".game-list");
    
    gameLists.forEach(game => {
        game.addEventListener("click", () => {
            game.classList.toggle("selected");
        });
    });
});
// script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenido a Vapor");

    // Carrito de compras
    let cart = [];
    
    window.addToCart = function(event, gameName) {
        event.stopPropagation();  // Evita que se abra el modal al añadir al carrito
        cart.push(gameName);
        updateCartCount();
        updateCartItems();
        console.log(cart);
    };

    function updateCartCount() {
        document.getElementById("cart-count").innerText = cart.length;
    }

    function updateCartItems() {
        const cartItemsContainer = document.getElementById("cart-items");
        cartItemsContainer.innerHTML = '';  // Limpiar el contenido previo
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>No tienes juegos en tu carrito.</p>';
        } else {
            cart.forEach(game => {
                let cartItem = document.createElement("p");
                cartItem.textContent = game;
                cartItemsContainer.appendChild(cartItem);
            });
        }
    }

    // Ventana Modal para los detalles de los juegos
    let modal = document.getElementById("gameModal");

    window.openModal = function(gameName) {
        modal.style.display = "block";
        document.getElementById("modal-title").innerText = gameName;
        document.getElementById("modal-description").innerText = "Descripción completa del " + gameName;
        document.getElementById("modal-price").innerText = "Precio: $59.99";  // Ejemplo de precio
    };

    window.closeModal = function() {
        modal.style.display = "none";
    };

    // Cerrar el modal si se hace clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

// script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenido a Vapor");

    // Carrito de compras
    let cart = [];
    
    window.addToCart = function(event, gameName) {
        event.stopPropagation();  // Evita que se abra el modal al añadir al carrito
        if (!cart.includes(gameName)) { // Evita duplicados
            cart.push(gameName);
            updateCartCount();
            updateCartItems();
            console.log(cart);
        }
    };

    function updateCartCount() {
        document.getElementById("cart-count").innerText = cart.length;
    }

    function updateCartItems() {
        const cartItemsContainer = document.getElementById("cart-items");
        cartItemsContainer.innerHTML = '';  // Limpiar el contenido previo
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>No tienes juegos en tu carrito.</p>';
        } else {
            cart.forEach((game, index) => {
                let cartItem = document.createElement("div");
                cartItem.className = 'cart-item';
                cartItem.textContent = game;

                // Botón para eliminar juego del carrito
                let removeButton = document.createElement("button");
                removeButton.innerText = "Eliminar";
                removeButton.onclick = function() {
                    removeFromCart(index);
                };

                cartItem.appendChild(removeButton);
                cartItemsContainer.appendChild(cartItem);
            });
        }
    }

    function removeFromCart(index) {
        cart.splice(index, 1); // Elimina el juego del carrito
        updateCartCount();
        updateCartItems();
    }

    // Ventana Modal para los detalles de los juegos
    let modal = document.getElementById("gameModal");

    window.openModal = function(gameName) {
        modal.style.display = "block";
        document.getElementById("modal-title").innerText = gameName;
        document.getElementById("modal-description").innerText = "Descripción completa del " + gameName;
        document.getElementById("modal-price").innerText = "Precio: $59.99";  // Ejemplo de precio
    };

    window.closeModal = function() {
        modal.style.display = "none";
    };

    // Cerrar el modal si se hace clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
// script.js

function checkout() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Añade juegos para proceder a la compra.");
    } else {
        alert("Compra finalizada con éxito. ¡Gracias por tu compra!");
        cart = [];  // Vaciar el carrito después de la compra
        updateCartCount();
        updateCartItems();
    }
}
// script.js

// Autenticación de Usuario
let users = []; // Arreglo para almacenar los usuarios registrados

function register() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    // Verifica si el usuario ya existe
    if (users.some(user => user.username === newUsername)) {
        alert("El nombre de usuario ya está en uso. Intenta con otro.");
    } else {
        users.push({ username: newUsername, password: newPassword });
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
    }

    // Limpiar los campos
    document.getElementById("register-form").reset();
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert("Inicio de sesión exitoso. Bienvenido, " + username + "!");
        // Aquí puedes redirigir al usuario a su perfil o a otra sección
    } else {
        alert("Credenciales incorrectas. Intenta nuevamente.");
    }

    // Limpiar los campos
    document.getElementById("login-form").reset();
}
// script.js

window.openModal = function(gameName) {
    modal.style.display = "block";
    document.getElementById("modal-title").innerText = gameName;
    document.getElementById("modal-description").innerText = "Descripción completa del " + gameName;
    document.getElementById("modal-price").innerText = "Precio: $59.99";  // Ejemplo de precio
    
    // Añadir botón "Añadir al Carrito" en el modal
    const addToCartButton = document.createElement("button");
    addToCartButton.innerText = "Añadir al Carrito";
    addToCartButton.onclick = function(event) {
        addToCart(event, gameName);
        closeModal(); // Cerrar modal después de añadir
    };

    modal.querySelector('.modal-content').appendChild(addToCartButton);
};
// script.js

let reviews = {};  // Objeto para almacenar reseñas por juego

function submitReview() {
    const gameName = document.getElementById("modal-title").innerText;
    const reviewText = document.getElementById("review-text").value;

    if (!reviews[gameName]) {
        reviews[gameName] = [];
    }
    reviews[gameName].push(reviewText);  // Añadir la reseña al juego

    // Actualizar la lista de reseñas
    updateReviewsList(gameName);
    document.getElementById("review-text").value = ''; // Limpiar el campo de texto
}

function updateReviewsList(gameName) {
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.innerHTML = ''; // Limpiar la lista anterior

    if (reviews[gameName] && reviews[gameName].length > 0) {
        reviews[gameName].forEach(review => {
            const reviewItem = document.createElement("p");
            reviewItem.innerText = review;
            reviewsList.appendChild(reviewItem);
        });
    } else {
        reviewsList.innerHTML = '<p>No hay reseñas para este juego.</p>';
    }
}
// script.js

function displayUserProfile(username) {
    document.getElementById("username-display").innerText = username;

    // Mostrar juegos comprados
    const purchasedGames = cart.join(", ") || "No has comprado ningún juego.";
    document.getElementById("purchased-games").innerText = purchasedGames;

    // Mostrar reseñas
    displayUserReviews();
}

function displayUserReviews() {
    const userReviewsDiv = document.getElementById("user-reviews");
    userReviewsDiv.innerHTML = ''; // Limpiar reseñas anteriores

    for (let game in reviews) {
        if (reviews[game].length > 0) {
            const gameReviews = document.createElement("div");
            gameReviews.innerHTML = `<h4>Reseñas de ${game}:</h4>`;
            reviews[game].forEach(review => {
                const reviewItem = document.createElement("p");
                reviewItem.innerText = review;
                gameReviews.appendChild(reviewItem);
            });
            userReviewsDiv.appendChild(gameReviews);
        }
    }
}
// script.js

let notifications = [];  // Array para almacenar notificaciones

function addNotification(message) {
    notifications.push(message);
    updateNotificationList();
}

function updateNotificationList() {
    const notificationList = document.getElementById("notification-list");
    notificationList.innerHTML = ''; // Limpiar la lista anterior

    notifications.forEach(notification => {
        const notificationItem = document.createElement("p");
        notificationItem.innerText = notification;
        notificationList.appendChild(notificationItem);
    });
}

// Actualizar la función de compra
function checkout() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Añade juegos para proceder a la compra.");
    } else {
        addNotification("Compra finalizada con éxito. Juegos: " + cart.join(", "));
        alert("Compra finalizada con éxito. ¡Gracias por tu compra!");
        cart = [];  // Vaciar el carrito después de la compra
        updateCartCount();
        updateCartItems();
        displayUserProfile(document.getElementById("username").value); // Actualiza el perfil
    }
}
// script.js

function searchGames() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const gameItems = document.querySelectorAll(".game-item");

    gameItems.forEach(item => {
        const gameName = item.querySelector("h3").innerText.toLowerCase();
        if (gameName.includes(searchTerm)) {
            item.style.display = "block"; // Mostrar el juego si coincide con la búsqueda
        } else {
            item.style.display = "none"; // Ocultar si no coincide
        }
    });
}
// script.js

let favorites = [];  // Array para almacenar juegos favoritos

function toggleFavorite(icon) {
    const gameName = icon.parentElement.querySelector("h3").innerText;

    if (favorites.includes(gameName)) {
        favorites = favorites.filter(fav => fav !== gameName); // Eliminar de favoritos
        icon.style.color = "black"; // Cambiar color del icono
    } else {
        favorites.push(gameName); // Añadir a favoritos
        icon.style.color = "gold"; // Cambiar color del icono a dorado
    }

    alert(favorites.includes(gameName) ? `${gameName} añadido a favoritos` : `${gameName} eliminado de favoritos`);
}

// Mostrar favoritos en el perfil de usuario
function displayUserProfile(username) {
    document.getElementById("username-display").innerText = username;

    // Mostrar juegos comprados
    const purchasedGames = cart.join(", ") || "No has comprado ningún juego.";
    document.getElementById("purchased-games").innerText = purchasedGames;

    // Mostrar reseñas
    displayUserReviews();

    // Mostrar juegos favoritos
    displayFavorites();
}

function displayFavorites() {
    const favoritesDiv = document.getElementById("user-favorites");
    favoritesDiv.innerHTML = ''; // Limpiar favoritos anteriores

    if (favorites.length > 0) {
        favorites.forEach(game => {
            const gameItem = document.createElement("p");
            gameItem.innerText = game;
            favoritesDiv.appendChild(gameItem);
        });
    } else {
        favoritesDiv.innerHTML = '<p>No tienes juegos favoritos.</p>';
    }
}

  // Almacenar usuarios registrados
let currentUser = null;  // Usuario actualmente conectado

function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario ya existe
    if (users.find(user => user.username === username)) {
        alert("El usuario ya existe. Intenta con otro nombre.");
        return;
    }

    users.push({ username, password });  // Añadir nuevo usuario
    alert("Usuario registrado exitosamente.");
    document.getElementById("registration-form").reset();
}

function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        currentUser = user;  // Establecer el usuario actual
        alert("Inicio de sesión exitoso.");
        displayUserProfile(currentUser.username);  // Mostrar perfil del usuario
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }
}
// script.js



function submitReview(event) {
    event.preventDefault();
    const game = document.getElementById("review-game").value;
    const reviewText = document.getElementById("review-text").value;
    const rating = document.getElementById("review-rating").value;

    const review = {
        user: currentUser.username,
        game,
        reviewText,
        rating,
        date: new Date().toLocaleString()
    };

    reviews.push(review);  // Añadir reseña al array
    alert("Reseña enviada exitosamente.");
    document.getElementById("review-form").reset();
    displayReviews(game);  // Mostrar reseñas del juego
}

function displayReviews(game) {
    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = '';  // Limpiar reseñas anteriores

    const gameReviews = reviews.filter(review => review.game === game);
    if (gameReviews.length > 0) {
        gameReviews.forEach(review => {
            const reviewItem = document.createElement("div");
            reviewItem.innerHTML = `<strong>${review.user}</strong> (${review.rating}/5): ${review.reviewText} <em>${review.date}</em>`;
            reviewList.appendChild(reviewItem);
        });
    } else {
        reviewList.innerHTML = '<p>No hay reseñas para este juego.</p>';
    }
}
// script.js


function toggleFavorite(game) {
    const index = favorites.indexOf(game);
    if (index === -1) {
        favorites.push(game);  // Añadir a favoritos
        alert(`${game} añadido a favoritos.`);
    } else {
        favorites.splice(index, 1);  // Eliminar de favoritos
        alert(`${game} eliminado de favoritos.`);
    }
}
function displayUserProfile(username) {
    document.getElementById("user-name").innerText = username;

    const favoritesList = document.getElementById("favorites-list");
    favoritesList.innerHTML = '';  // Limpiar lista anterior

    if (favorites.length > 0) {
        favorites.forEach(game => {
            const gameItem = document.createElement("div");
            gameItem.innerText = game;
            favoritesList.appendChild(gameItem);
        });
    } else {
        favoritesList.innerHTML = '<p>No tienes juegos favoritos.</p>';
    }
}
function updateProfile(event) {
    event.preventDefault();
    const newPassword = document.getElementById("new-password").value;

    if (currentUser) {
        const userIndex = users.findIndex(user => user.username === currentUser.username);
        if (userIndex !== -1) {
            users[userIndex].password = newPassword;  // Actualizar contraseña
            alert("Contraseña actualizada exitosamente.");
            document.getElementById("profile-settings").reset();
        }
    }
}

function addNotification(message) {
    notifications.push(message);
    displayNotifications();
}

function displayNotifications() {
    const notificationList = document.getElementById("notification-list");
    notificationList.innerHTML = '';  // Limpiar lista anterior

    notifications.forEach(notification => {
        const notificationItem = document.createElement("div");
        notificationItem.innerText = notification;
        notificationList.appendChild(notificationItem);
    });
}
function submitReview(event) {
    event.preventDefault();
    // ... (lógica existente)

    addNotification(`Has dejado una reseña para ${game}.`);
}
// script.js

const allGames = [
    { name: 'Juego 1', genre: 'Aventura' },
    { name: 'Juego 2', genre: 'Acción' },
    { name: 'Juego 3', genre: 'Deportes' },
    // Agrega más juegos aquí
];

function searchGames() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const filteredGames = allGames.filter(game => game.name.toLowerCase().includes(searchTerm));

    displaySearchResults(filteredGames);
}

function displaySearchResults(games) {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores

    if (games.length > 0) {
        games.forEach(game => {
            const gameItem = document.createElement("div");
            gameItem.classList.add("game-item");
            gameItem.innerHTML = `
                <h3>${game.name}</h3>
                <button onclick="toggleFavorite('${game.name}')">Agregar a Favoritos</button>
            `;
            resultsContainer.appendChild(gameItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No se encontraron juegos.</p>';
    }
}

function submitReview(event) {
    event.preventDefault();
    const reviewText = document.getElementById("review-text").value;
    const reviewRating = document.getElementById("review-rating").value;
    const gameName = currentGame;  // Suponiendo que tienes una variable que guarda el juego actual

    const review = {
        text: reviewText,
        rating: reviewRating,
        game: gameName,
        date: new Date().toLocaleDateString()
    };

    reviews.push(review);  // Añadir reseña a la lista
    displayReviews();  // Mostrar todas las reseñas
    document.querySelector(".reviews form").reset();  // Limpiar el formulario
}

function displayReviews() {
    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = '';  // Limpiar reseñas anteriores

    reviews.forEach(review => {
        const reviewItem = document.createElement("div");
        reviewItem.innerHTML = `
            <p><strong>${review.game}</strong> (Calificación: ${review.rating}): ${review.text} <em>${review.date}</em></p>
        `;
        reviewList.appendChild(reviewItem);
    });
}
let followedUsers = [];  // Almacenar usuarios seguidos

function followUser() {
    const usernameToFollow = document.getElementById("follow-username").value;
    
    if (!followedUsers.includes(usernameToFollow)) {
        followedUsers.push(usernameToFollow);
        alert(`Siguiendo a ${usernameToFollow}`);
        displayFollowedUsers();
    } else {
        alert(`Ya sigues a ${usernameToFollow}`);
    }
}

function displayFollowedUsers() {
    const followedList = document.getElementById("followed-list");
    followedList.innerHTML = '';  // Limpiar lista anterior

    followedUsers.forEach(user => {
        const userItem = document.createElement("div");
        userItem.innerText = user;
        followedList.appendChild(userItem);
    });
}

function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Comprobar si el usuario ya existe
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        alert("Este nombre de usuario ya está en uso. Intenta con otro.");
        return;
    }

    // Agregar nuevo usuario al array
    users.push({ username, password });
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    document.querySelector(".register form").reset(); // Limpiar el formulario
}
function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Verificar las credenciales
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        alert(`Bienvenido, ${username}!`);
        // Aquí podrías redirigir a la página principal o a la biblioteca de juegos
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
}

function toggleFavorite(gameName) {
    if (favorites.includes(gameName)) {
        favorites = favorites.filter(game => game !== gameName);
        alert(`${gameName} ha sido eliminado de tus favoritos.`);
    } else {
        favorites.push(gameName);
        alert(`${gameName} ha sido agregado a tus favoritos.`);
    }
}
function displayFavorites() {
    const favoriteList = document.getElementById("favorite-list");
    favoriteList.innerHTML = '';  // Limpiar lista anterior

    if (favorites.length > 0) {
        favorites.forEach(game => {
            const gameItem = document.createElement("div");
            gameItem.innerText = game;
            favoriteList.appendChild(gameItem);
        });
    } else {
        favoriteList.innerHTML = '<p>No tienes juegos favoritos.</p>';
    }
}

function submitReview(event) {
    event.preventDefault();
    const username = document.getElementById("review-username").value;
    const reviewText = document.getElementById("review-text").value;

    // Agregar la reseña al array
    reviews.push({ username, reviewText });
    alert("Tu reseña ha sido enviada.");
    document.querySelector(".reviews form").reset(); // Limpiar el formulario
    displayReviews(); // Mostrar las reseñas actualizadas
}

function displayReviews() {
    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = ''; // Limpiar lista anterior

    reviews.forEach(review => {
        const reviewItem = document.createElement("div");
        reviewItem.className = "review-item";
        reviewItem.innerHTML = `<strong>${review.username}:</strong> <p>${review.reviewText}</p>`;
        reviewList.appendChild(reviewItem);
    });
}
let games = ["Juego 1", "Juego 2", "Juego 3"]; // Ejemplo de juegos disponibles

function searchGames() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const results = games.filter(game => game.toLowerCase().includes(query));
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores

    if (results.length > 0) {
        results.forEach(game => {
            const gameItem = document.createElement("div");
            gameItem.className = "game-item";
            gameItem.innerText = game;
            resultsContainer.appendChild(gameItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No se encontraron juegos.</p>';
    }
}
// Al registrar un usuario
function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Verificar si el usuario ya existe
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some(user => user.username === username);

    if (userExists) {
        alert("El usuario ya existe. Elige otro nombre de usuario.");
        return;
    }

    // Agregar el nuevo usuario
    existingUsers.push({ username, password });
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Registro exitoso. Puedes iniciar sesión.");
    document.querySelector(".register-form").reset(); // Limpiar el formulario
}

// Al iniciar sesión
function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Inicio de sesión exitoso. Bienvenido " + username + "!");
        // Redirigir al usuario a la página principal o a su biblioteca
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}
let friends = []; // Lista de amigos

function addFriend() {
    const friendUsername = document.getElementById("friend-username").value;
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    // Verificar si el usuario existe
    const friend = existingUsers.find(user => user.username === friendUsername);

    if (friend && !friends.includes(friendUsername)) {
        friends.push(friendUsername);
        alert("Amigo agregado.");
        displayFriends();
        document.getElementById("friend-username").value = ''; // Limpiar campo
    } else {
        alert("El usuario no existe o ya es tu amigo.");
    }
}

function displayFriends() {
    const friendList = document.getElementById("friend-list");
    friendList.innerHTML = ''; // Limpiar lista anterior

    if (friends.length > 0) {
        friends.forEach(friend => {
            const friendItem = document.createElement("div");
            friendItem.className = "friend-item";
            friendItem.innerText = friend;
            friendList.appendChild(friendItem);
        });
    } else {
        friendList.innerHTML = '<p>No tienes amigos.</p>';
    }
}
async function fetchGames() {
    const response = await fetch('https://api.rawg.io/api/games?key=YOUR_API_KEY');
    const data = await response.json();
    console.log(data); // Procesar los datos como se requiera
}

// Llama a la función para obtener juegos al cargar la página
window.onload = fetchGames;

function addNotification(message) {
    notifications.push(message);
    displayNotifications();
}

function displayNotifications() {
    const notificationList = document.getElementById("notification-list");
    notificationList.innerHTML = ''; // Limpiar lista anterior

    if (notifications.length > 0) {
        notifications.forEach(notification => {
            const notificationItem = document.createElement("div");
            notificationItem.className = "notification-item";
            notificationItem.innerText = notification;
            notificationList.appendChild(notificationItem);
        });
    } else {
        notificationList.innerHTML = '<p>No tienes notificaciones.</p>';
    }
}
function addFriend() {
    const friendUsername = document.getElementById("friend-username").value;
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    const friend = existingUsers.find(user => user.username === friendUsername);

    if (friend && !friends.includes(friendUsername)) {
        friends.push(friendUsername);
        alert("Amigo agregado.");
        addNotification(`${friendUsername} ha sido agregado a tus amigos.`);
        displayFriends();
        document.getElementById("friend-username").value = ''; // Limpiar campo
    } else {
        alert("El usuario no existe o ya es tu amigo.");
    }
}
const apiKey = '762c359ad876456690876b837fe137cd'; // Reemplaza con tu clave API

async function fetchGames() {
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);
    const data = await response.json();
    displayGames(data.results); // Mostrar juegos en la interfaz
}

function displayGames(games) {
    const gamesSection = document.getElementById('featured-games'); // Asegúrate de tener esta sección en tu HTML
    gamesSection.innerHTML = ''; // Limpiar sección anterior

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.className = 'game-item';
        gameItem.innerHTML = `
            <img src="${game.background_image}" alt="${game.name}">
            <h4>${game.name}</h4>
            <p>${game.rating ? `Calificación: ${game.rating}` : 'Sin calificación'}</p>
        `;
        gamesSection.appendChild(gameItem);
    });
}

// Llama a la función fetchGames cuando cargue la página
window.onload = fetchGames;
async function fetchFictionalGames() {
    const response = await fetch('/game.json'); // URL del JSON
    const data = await response.json();
    displayGames(data); // Muestra los juegos
}
document.getElementById("review-form").onsubmit = function(e) {
    e.preventDefault();
    const reviewText = document.getElementById("review-text").value;
    const reviewsList = document.getElementById("reviews-list");

    const reviewItem = document.createElement('p');
    reviewItem.textContent = reviewText;
    reviewsList.appendChild(reviewItem);

    document.getElementById("review-text").value = ''; // Limpiar el campo
};
function addToHistory(game) {
    const history = JSON.parse(localStorage.getItem("gameHistory")) || [];
    history.push(game);
    localStorage.setItem("gameHistory", JSON.stringify(history));
}
function displayRecommendations() {
    const history = JSON.parse(localStorage.getItem("gameHistory")) || [];
    // Lógica para filtrar juegos recomendados según el historial
}
async function fetchGames() {
    const response = await fetch('/juegos.json'); // Asegúrate de cambiar a la ruta correcta
    const games = await response.json();
    displayGames(games);
}

function displayGames(games) {
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos juegos

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');

        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.name}" class="game-image">
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <p>Calificación: ${game.rating}</p>
        `;

        gamesList.appendChild(gameItem);
    });
}

// Llamar a la función para cargar juegos al iniciar la página
fetchGames();
async function fetchGames() {
    const response = await fetch('C:\Users\MI PC\Desktop\Nueva carpeta\juegos.json'); // Asegúrate de cambiar a la ruta correcta
    const games = await response.json();
    displayGames(games);
}

function displayGames(games) {
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos juegos

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');

        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.name}" class="game-image">
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <p>Calificación: ${game.rating}</p>
        `;

        gamesList.appendChild(gameItem);
    });
}

// Llamar a la función para cargar juegos al iniciar la página
fetchGames();
