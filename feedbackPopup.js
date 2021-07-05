const feedbackLink=document.body.querySelector('.company-info__btn');
const popupForm=document.body.querySelector('.modal-feedback');
const popupClouse=document.body.querySelector('.form-feedback__modal-close ');


feedbackLink.addEventListener('click',function (evt){
  evt.preventDefault();
  popupForm.classList.add('modal-show');
});

popupClouse.addEventListener('click',function (evt){
  evt.preventDefault();
  popupForm.classList.remove('modal-show');
});

window.addEventListener('keydown',function (evt){
  if(evt.keyCode===27){
    if(popupForm.classList.contains('modal-show')){
      evt.preventDefault();
      popupForm.classList.remove('modal-show');
    }
  }
});
