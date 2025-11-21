document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click', e=>{
    const href = link.getAttribute('href');
    if(href && href.startsWith('#') && document.querySelector(href)){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  });
});
