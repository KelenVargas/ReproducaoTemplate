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