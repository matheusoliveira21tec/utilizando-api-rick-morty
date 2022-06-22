import '../css/styles.scss';
import img from '../assets/Premier-League.jpg';
const textComponent = () => {
    const elH1 = document.createElement('h1');
    elH1.innerHTML = 'Ola mundo!';
    elH1.classList.add('title');
    return elH1;
}

const igmComponent = () => {
    const elImg = new Image(300,150);
    elImg.src = img;
    return elImg;
}
document.body.appendChild(textComponent());
document.body.appendChild(igmComponent());