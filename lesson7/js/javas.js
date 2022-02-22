function handleLoad() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: .8,
  };
  const handleIntersect = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src; 
        image.classList.remove('img.lazy-load');
        observer.unobserve(image);
      }  
    });
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  const elements = document.querySelectorAll('img.lazy-load');
  elements.forEach(element => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', handleLoad);
