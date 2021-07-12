const goods=document.querySelector('.goods');
const cardGood=document.querySelectorAll('.card-good__card');




const modalBasket = document.querySelector('.modal-basket');
const close = document.querySelector('.modal-basket__close')

cardGood.addEventListener('mouseover',function(evt){
  let toolTip=evt.target;
  console.log(toolTip);
})
/*linkInBuscket.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalBasket.classList.add('modal-show');
});*/

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalBasket.classList.remove('modal-show');

});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalBasket.classList.contains('modal-show')) {
      evt.preventDefault();
      modalBasket .classList.remove('modal-show');
    }
  }
})
