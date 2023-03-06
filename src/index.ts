import _ from 'lodash'
// import Print from "./print";

function component(): Element {
	const element = document.createElement('div')

	// lodash 是由当前 script 脚本 import 进来的
	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
	// element.onclick = Print.bind(null, "hhhhh");

	return element
}

document.body.appendChild(component())
