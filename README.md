# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Click here](https://your-solution-url.com)
- Live Site URL: [Click here](https://michuux.github.io/social-proof-section/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

In this project I learned how to create an html object in javascript and use it to add multiple star images depending on how many the user specifies


```js

  ratings.forEach(element => {
    let numberOfStars = element.dataset.numberofstars;
    let starsDiv = element.children[0]; //stars div


    for(i = 1; i <= numberOfStars; i++){        

        let starImg = document.createElement('img');
        starImg.src = '../images/icon-star.svg';
        starImg.setAttribute('alt','');
        starImg.setAttribute('aria-hidden','true');
        starsDiv.appendChild(starImg);
    }

});
```

## Author
- Frontend Mentor - [@michuux](https://www.frontendmentor.io/profile/michuux)
