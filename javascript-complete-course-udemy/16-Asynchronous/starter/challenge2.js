// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// PART 1
// 1.
const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {
        const newImage = document.createElement('img');
        newImage.src = imgPath;

        newImage.addEventListener('load', function () {
            const images = document.querySelector('.images');
            images.insertAdjacentElement('beforeend', newImage);
            resolve(newImage);
        })
        newImage.addEventListener('error', function () {
            reject(new Error('Error downloading image.'))
        })
    })
};

// PART 2
// 3.
const wait = function (seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000*seconds);
    })
};
let globalImg;
// 2.
createImage(`img/img-1.jpg`)
.then(result => {
    // 3.
    globalImg = result;
    return wait(2);
})
.then(() => {
    // 4.
    globalImg.style.display = 'none'
    return createImage(`img/img-2.jpg`);
})
.then(result => {
    // 5.
    globalImg = result;
    return wait(2);
})
// 6.
.then(() => globalImg.style.display = 'none')
.catch(err => console.error(err));