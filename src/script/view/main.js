import '../components/nextflix-list.js';
import '../components/search-bar.js';
import $ from 'jquery';
import moment from 'moment';
import {
    DataSource,
    Main
} from '../data/database.js';

const search = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("nextflix-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            document.getElementById("toprate").innerHTML = `<h4 id="toprate" class="text-white">${searchElement.value} :</h4>`;
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

const main = () => {
    const movieListElement = document.querySelector("nextflix-list");

    const mainView = async () => {
        try {
            const result = await Main.fetchToprate();
            document.getElementById("toprate").innerHTML = `<h4 id="toprate" class="text-white">Top Rate Movies :</h4>`;
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    mainView();
}

const displayTime = () => {
  moment.locale('id');
  $('.time').text(moment().format('LTS'));
  $('.date').text(moment().format('LL'));
};
 
const updateTime = () => {
  displayTime();
  setTimeout(updateTime, 1000);
};
 
updateTime();

export {
    main,
    search
}