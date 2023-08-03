/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      "Логан",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...Алексея",
    ],
  };
  
  const adv = document.querySelectorAll(".promo__adv img"),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
  
       addForm.addEventListener('submit', (event) =>{
          const newFilms = addInput.value;
          const favorite = checkbox.checked;

          movieDB.movies.push(newFilm);
          movieDB.movies.sort();
          
       });
  
        adv.forEach(item => { // удаление картинок
          item.remove();
        });
        
        genre.textContent = "драма"; // меняет жанр фильма
        
        poster.style.backgroundImage = "url(img/bg.jpg)"; // меняет задний фон
        
       
        
        
        
        movieDB.movies.sort(); // sort 

        function movieList(film, parent) {
          parent.innerHTML = ""; // очищает старые фильмы
        
          film.forEach((film, i) => {   // вывод новых фильмов
            parent.innerHTML +=`<li class="promo__interactive-item">${i+1} ${film}<div class="delete"></div></li>`;
           });
        }
        
        movieList(movieDB.movies); 
});
 

























