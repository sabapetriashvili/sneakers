/* Hamburger Menu */

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const wrap = document.querySelector('.wrap');

hamburger.addEventListener("click", () => {  
 menu.classList.toggle('opened');
 hamburger.classList.toggle('menu-active');
 wrap.classList.toggle('active');
});

/* Show Checkout*/
const checklistIcon = document.querySelector('#checklist-logo');
const checkout = document.querySelector('.checkout');

checklistIcon.addEventListener('click', () => checkout.classList.toggle('visible'));


/* thumbnail active image change*/
const images = document.querySelectorAll('.thumbnail img');
const mainImage = document.querySelector('#main-img');

images.forEach(image => {


    image.addEventListener('click', () => {

        mainImage.src = image.src;
    
        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove('active')
        }

        image.classList.add('active');
    });

});

/* popup */

const popUp = document.querySelector('.popup');
const closeBtn = document.querySelector('#pop-close');
const popMainImage = document.querySelector('#pop-img');
const popupIndicators = document.querySelectorAll('.pop-thumb-indicators img');
const popupIndicator = document.querySelector('.pop-thumb-indicators');
const nextBtn = document.querySelector('#pop-next');
const prevBtn = document.querySelector('#pop-prev');


function popUpGallery() { //opens popup
    popUp.classList.add('open');
    popMainImage.src = this.src;

    for (var i = 0; i < images.length; i++) {

        popupIndicators[i].src = images[i].src;

        if(images[i].classList.contains('active')){
          popupIndicators[i].classList.add('active');
       }
    } 
};

function closePopUp() { //Closes popup
    popUp.classList.remove('open'); 

    for (var i = 0; i < popupIndicators.length; i++) {
        popupIndicators[i].classList.remove('active');
    }
}

popupIndicators.forEach(image => { //Adds active to popupindicators
    image.addEventListener('click', () => {
        popMainImage.src = image.src;

        for (var i = 0; i < popupIndicators.length; i++) {
            popupIndicators[i].classList.remove('active');
        }

        image.classList.add('active');
    });
});

nextBtn.addEventListener('click', () => { //next image
    for (let i = 0; i < popupIndicators.length; i++) {

        const lastOne = popupIndicators.length - 1;
        
        if(popupIndicators[i].classList.contains('active') && i < lastOne) {
            popupIndicators[i].classList.remove('active');
            i += 1;
            popupIndicators[i].classList.add('active');
            popMainImage.src = popupIndicators[i].src;
        } else if(popupIndicators[lastOne].classList.contains('active')) {
            i = 0;
            popupIndicators[lastOne].classList.remove('active');
            popupIndicators[i].classList.add('active');
            popMainImage.src = popupIndicators[i].src;
        }

    }
});

prevBtn.addEventListener('click', () => {
    for (let i = 0; i < popupIndicators.length; i++) {

        const lastOne = popupIndicators.length - 1;

        if(popupIndicators[i].classList.contains('active') && i > 0) {
            popupIndicators[i].classList.remove('active');
            i -= 1;
            popupIndicators[i].classList.add('active');
            popMainImage.src = popupIndicators[i].src;
        } else if(popupIndicators[0].classList.contains('active') && i === 0) {
            i = lastOne;
            popupIndicators[0].classList.remove('active');
            popupIndicators[i].classList.add('active');
            popMainImage.src = popupIndicators[i].src;
        }

    }
});




closeBtn.addEventListener('click', closePopUp); //Close popup

popUp.addEventListener('click', (e) => { //Close popup while clicking around
    if(e.target == popUp) {
        closePopUp();
    } 
});

mainImage.addEventListener('click', popUpGallery); //Makes main image zoomed


//Number of ordered product

 const plus = document.querySelector('.plus');
 const minus = document.querySelector('.minus');
 const numbIndicator = document.querySelector('.numb-info');

 plus.addEventListener('click', () => { //Increase Number
    numbIndicator.innerHTML = Number(numbIndicator.innerHTML) + 1; 
 });

 minus.addEventListener('click', () => { //Dicrease Number
    if(Number(numbIndicator.innerHTML) > 1){
        numbIndicator.innerHTML = Number(numbIndicator.innerHTML) - 1; 
    } else {
        return;
    }
 });

 //checkout

 const checkoutBtn = document.querySelector('#checkout');
 const checkoutHeaderBtn = document.querySelector('.checkout-btn');
 const checkCount = document.querySelector('#check-count');
 const emptyMessage = document.querySelector('#empty-message');

 checkoutBtn.addEventListener('click', () => {

    checkCount.style.display = 'block';
    checkoutHeaderBtn.style.display = 'block';
    emptyMessage.style.display = 'none';

    checkCount.innerHTML = Number(checkCount.innerHTML) + 1;

    const checkList = document.querySelector('.items-content');
    let checkedImage = mainImage.src;
    let checkedName = document.querySelector('#prod-title').innerHTML;
    let checkedPrice = document.querySelector('#prod-price').innerHTML;
    let checkedNumb = document.querySelector('.numb-info').innerHTML;
    let checkedFullPrice = '$' + Number(checkedPrice) * Number(checkedNumb);

    const checkedItem = `
    <div class="checked-item">
    <img class="checked-img" src="${checkedImage}" alt="Sneakers">
    <div class="checked-item-info">
      <h6 class="checked-item-title">${checkedName}</h6>
      <h6 class="checked-item-price"><span class="item-price">${checkedPrice} </span>X<span class="item-num"> ${checkedNumb}</span><span class="item-full-price">${checkedFullPrice}</span></h6>
    </div>
    <img class="delete-icon" src="images/icon-delete.svg" onclick="DeleteItem()" alt="Remove">
  </div>
  `;

  checkList.insertAdjacentHTML('beforeend', checkedItem);

 });


 //delete item
 const ItemsContent = document.querySelector('.items-content');

function DeleteItem() {
    const deleteIcon = document.querySelector('.delete-icon');
    
            deleteIcon.parentElement.remove();
            checkCount.innerHTML = Number(checkCount.innerHTML) - 1;

            if (!ItemsContent.querySelector('.checked-item')) {
                emptyMessage.style.display = 'block';
                checkoutHeaderBtn.style.display = 'none';
                checkCount.style.display = 'none';
            }

}






