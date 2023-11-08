document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navLink');

    links.forEach(link => {
      link.addEventListener('click', (event) => {
        
        links.forEach(link => link.classList.remove('active'));

        
        event.target.classList.add('active');
        
      
        localStorage.setItem('activeLink', event.target.href);
      });
    });

    
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
      links.forEach(link => {
        if (link.href === activeLink) {
          link.classList.add('active');
        }
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    var itensNavegacao = document.querySelectorAll('.item-navegacao');
    
    itensNavegacao.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove a classe 'active' de todos os itens de navegação
            itensNavegacao.forEach(function(item) {
                item.classList.remove('active');
            });

            // Adiciona a classe 'active' ao item de navegação clicado
            this.classList.add('active');
        });
    });
});