const ratings = document.querySelectorAll('.rating');
const stars = document.querySelectorAll('.stars');


ratings.forEach(element => {
    let numberOfStars = element.dataset.numberofstars;
    let starsDiv = element.children[0]; //stars div


    for(i = 1; i <= numberOfStars; i++){        

        let starImg = document.createElement('img');
        starImg.src = '../images/icon-star.svg';
        starImg.setAttribute('width','17px');
        starImg.setAttribute('height','16px');
        starImg.setAttribute('alt','');
        starImg.setAttribute('aria-hidden','true');
        starsDiv.appendChild(starImg);
    }

});

