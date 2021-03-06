export function replace(target, el) {
	target.parentNode.replaceChild(el, target)
}

export function toArray(list) {
	var l = list.length
	var ret = new Array(l)
	while (l--) {
		ret[l] = list[l]
	}
	return ret
}