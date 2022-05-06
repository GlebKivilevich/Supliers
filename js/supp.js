// burger menu start

// объявление переменных
const burgerManu = document.querySelector(".burger__menu"), 
    modalWin = document.querySelector(".modal"),           // всплывающие окно
    modalClose = document.querySelector("[data-close]");  // кнопка для закрытия высплывающего окна

// функция показа высплывающего окна 
const showModal = () => {
    if (modalWin.classList.contains("hide")) {
        modalWin.classList.remove("hide");
        modalWin.classList.add("show");
    }
};

// функция скрытия высплывающего окна 
const hideModal = () => {
    modalWin.classList.remove("show");
    modalWin.classList.add("hide");
};


// Скрыть burger menu на ESC
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modalWin.classList.contains('show')) {
        hideModal();
    }
});


// вызовы открытия и закрытия burger menu
modalClose.addEventListener("click", hideModal);
burgerManu.addEventListener("click", () => {
    if (modalWin.classList.contains("hide")) {
        showModal();
    } else{
        hideModal();
    }
});

// burger menu end

// Anim
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('_active');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('._noactive');
  for (let elm of elements) {
    observer.observe(elm);
  }


// Anim

// Scroll
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    const blockID = anchor.getAttribute("href");
    
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
// Scroll

// Go to home
const btnGoHome = document.querySelector(".btn__go__home");
let windowObjectReference;

let FuncGoHome = function (btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    windowObjectReference = window.open("https://glebkivilevich.github.io/Home/", "_blank"); 
  });
};

FuncGoHome(btnGoHome);
// Go to home


// Валидатор email
let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

let inputEmail = document.querySelector(".input__phone"),
    spanText = document.querySelector(".form__valid"),
    btnGo = document.querySelector(".btn__supplicers__form");
    
    // При клике на кнопку происходит проверка на правильность заполнения формы 
    btnGo.addEventListener("click", (e) => {

        // Отключения дефолтного поведения кнопки (перезагрузка страницы)
        e.preventDefault(); 
        if (!valid(regex, inputEmail.value)){
            novalidate(inputEmail, spanText, "Пожалуйста, введите  корректный email-адрес!"); 
        } else {
            validate(inputEmail, spanText, "Все успешно отправлено!");

            // Если данные введены верно, то через 2,5 секунды все очистится
            setTimeout(() => {
                hideValid(inputEmail, spanText, "");
            }, 2500);           
        }            
    });

    function valid (reg, inp) {
        return reg.test(inp);
    }

    // Функция если данные введены правильно 
    function validate(inp, span, mess) {
        if (inp.classList.contains("_novalid")) {
            inp.classList.remove("_novalid");
            inp.classList.add("_valid");
            span.innerHTML = mess;
        } else {
            inp.classList.add("_valid");
            span.innerHTML = mess;
        }        
    }

    // Функция если данные введены не правильно 
    function novalidate (inp, span, mess){
        if (inp.classList.contains("_valid")) {
            inp.classList.remove("_valid");
            inp.classList.add("_novalid");
            span.innerHTML = mess;
        } else {
            inp.classList.add("_novalid");
            span.innerHTML = mess;
        }        
        
    }

    // Функция очищающая форму, текст и убирает стили на обводку
    function hideValid (inp, el, mess){
        inp.classList.remove("_valid");
        inp.value = "";
        el.innerHTML = "";
    }

// Валидатор email

