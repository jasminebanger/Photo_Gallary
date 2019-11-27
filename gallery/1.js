//*** mouseover and mouseout effects on photoo gallary *** 
const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(portfolioItem => {
            portfolioItem.addEventListener('mouseover', () => {
              console.log(portfolioItem.childNodes[1].classList);
                portfolioItem.childNodes[1].classList.add('img-darken');
            });
            
             portfolioItem.addEventListener('mouseout', () => {
              console.log(portfolioItem.childNodes[1].classList);
                portfolioItem.childNodes[1].classList.remove('img-darken');
            });
        }); 
