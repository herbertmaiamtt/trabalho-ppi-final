document.getElementById('logoffBtn').addEventListener('click', function() {
    alert("Você foi deslogado.");
    window.location.href = "login.html";  // Redireciona para a página de login
});

document.getElementById('form-anuncio').addEventListener('submit', function(event) {
    event.preventDefault();

    const fotos = document.getElementById('fotos').files;
    if (fotos.length < 3) {
        alert("Por favor, selecione pelo menos 3 fotos do veículo.");
        return;
    }

    alert("Anúncio criado com sucesso!");
    // Aqui você pode fazer o processamento dos dados ou enviar para o servidor
});
