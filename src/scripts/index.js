import { changeBackground } from './changeBackground.js'

const root = document.querySelector('.header')


const intervaChangeBG = setInterval(() => {
	changeBackground(root);
}, 2500)