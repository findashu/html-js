let hero = document.querySelector('.hero');
let text = document.querySelector('h1');
let walk = 100 //100px

function shadow(e) {

  const {offsetHeight:height, offsetWidth:width} = hero;

  let {offsetX:x, offsetY:y } = e;
  
  if(this != e.target) {
    x = x + e.target.offsetLeft;
    y = x + e.target.offsetTop;
  }

  // how much walk you want
  let xWalk = (x / width * walk)- (walk /2);
  let yWalk = (y/ height * walk) - (walk/2);

  text.style.textShadow= `${xWalk}px ${yWalk}px 0 red`
}

hero.addEventListener('mousemove', shadow);