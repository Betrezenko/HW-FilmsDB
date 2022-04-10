/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма" +

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла. +
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов + */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против всех"
        ]
    };
    
    const adBlock = document.querySelectorAll('.promo__adv img'),
          bgImg = document.querySelector('.promo__bg'),
          filmGenre = bgImg.querySelector('.promo__genre'),      
          filmList = document.querySelectorAll('.promo__interactive-item'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            
            if (favourite) {
                console.log("Adding new fav");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            
            createMovieList(movieDB.movies, movieList);    
        }

        event.target.reset();
    });
    
    const deleteAdv = (arr) => {
        adBlock.forEach(item => {
            item.remove();
        });
    };
    

    
    const makeChanges = () => {
        filmGenre.textContent = 'Drama'; // change film genre
    
        bgImg.style.backgroundImage = 'url("img/bg.jpg")'; // change background image    
    };

    // let sortMovieDb = [...movieDB.movies.sort()];
    // for (let i = 0; i < sortMovieDb.length; i++) {
    //     filmList[i].innerHTML = `${i+1}. ` + sortMovieDb[i];
    // }
    
    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList (films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);  // recursion
            });
        });
    }

    makeChanges();
    deleteAdv(adBlock);
    createMovieList(movieDB.movies, movieList);

});