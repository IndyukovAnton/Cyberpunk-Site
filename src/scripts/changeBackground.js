const rootPath = './src/assets/images/bg/'

let i = 1
export const changeBackground = (root) => {
	root.style.backgroundImage = `url(${rootPath}${i}.jpg)`

	i > 2 ? i = 1 : ++i
}