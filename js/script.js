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

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: ["Логан", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим"],
  };

  const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    checkbox = addForm.querySelector("input[type=checkbox]"),
    addInput = addForm.querySelector(".adding__input");

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilms = addInput.value;
    const favorite = checkbox.checked;

    if (newFilms) {
      if (newFilms.length > 10) {
        newFilms = `${newFilms.substring(0, 10)}...`;
      }

      if (favorite) {
        console.log("добавляем любимый фильм");
      }
      movieDB.movies.push(newFilms);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }
    event.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = "драма"; // меняет жанр фильма
    poster.style.backgroundImage = "url(img/bg.jpg)"; // меняет задний фон
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `<li class="promo__interactive-item">${
        i + 1
      } ${film}<div class="delete"></div>
      </li>
      `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
