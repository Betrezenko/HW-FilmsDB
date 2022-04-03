/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма" +

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла. +
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов + */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adBlock = document.querySelectorAll('.promo__adv img'),
      bgImg = document.querySelector('.promo__bg'),
      filmGenre = bgImg.querySelector('.promo__genre'),      
      filmList = document.querySelectorAll('.promo__interactive-item'),
      movieList = document.querySelector('.promo__interactive-list');

adBlock.forEach(item => {
    item.remove();
});

filmGenre.textContent = 'Drama'; // change film genre

bgImg.style.backgroundImage = 'url("img/bg.jpg")'; // change background image

// let sortMovieDb = [...movieDB.movies.sort()];
// for (let i = 0; i < sortMovieDb.length; i++) {
//     filmList[i].innerHTML = `${i+1}. ` + sortMovieDb[i];
// }

movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});