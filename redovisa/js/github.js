/* global menu */
"usc strict";

var github = (function() {
    const showGithub = () => {
        window.mainContainer.innerHTML = "";

        fetch("https://api.github.com/users/jomi19/repos")
            .then(function(response) {
                return response.json();
            }).then(function(data) {
                data.forEach(function(repo) {
                    let repoElement = document.createElement("p");

                    repoElement.addEventListener("click", function() {
                        window.location.href = repo.html_url;
                    });

                    repoElement.textContent = repo.name;
                    window.mainContainer.appendChild(repoElement);
                });
                window.rootElement.appendChild(window.mainContainer);
            }).catch(function(error) {
                console.log("Fetch operation failed due to the following error:", error.message);
            });
        menu.showMenu("Github");
    };

    return {
        showGithub: showGithub
    };
})(github);
