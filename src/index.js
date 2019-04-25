import './styles/index.scss';
import './handleHeroSvg';
import MainPageTemplate from './templates/mainPage.html';

var mainElement = document.querySelector('main');
var svg = document.querySelector('.svg-container');

//===========FUNDAMENTAL ADD ELEMENTS FUNCTION================//
var addElement = function(newContent, classList, container) {
    var div = document.createElement('div');//create div for page container
    div.className = classList;//too avoid replacing whole content of <main> tag
    div.innerHTML = newContent;//at one time
    var parent = container || mainElement;
    parent.appendChild(div);
};

var animateRoute = function() {
  var nextPage = mainElement.children[0];
  window.getComputedStyle(nextPage).opacity;
  nextPage.classList.add('to-stage');
  nextPage.classList.remove('trans-left', 'trans-right');
}

addElement(MainPageTemplate, 'trans-left')
animateRoute()
svg.classList.toggle('active');
