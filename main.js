document.addEventListener("DOMContentLoaded", function () {
    const username = "luanwitch";
    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar os dados do GitHub");
            }
            return response.json();
        })
        .then(data => {
            // Preenche os dados na página
            document.getElementById("avatar").src = data.avatar_url || "./imagens/default-avatar.jpg";
            document.querySelector(".profile-name").textContent = data.name || "Nome não disponível";
            document.querySelector(".profile-username").textContent = `@${data.login}`;
            document.getElementById("repos").textContent = data.public_repos;
            document.getElementById("followers").textContent = data.followers;
            document.getElementById("following").textContent = data.following;
            document.getElementById("github-link").href = data.html_url;
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao carregar os dados do GitHub. Tente novamente mais tarde.");
        });
});