const getItsCss = (el, prop) => {
    return window.getComputedStyle(el).getPropertyValue(prop)
}
const debugPrint = (rry) => {
	let i = 1;
	demo.innerHTML = "<br>"
	for(let x of rry){
		demo.innerHTML += i+". "+" = "+ x + "<br>"
		i++
	}
}

const debugConrol =(val) => {
	if (val == 1) {
		b.position.y -= b.velocity.y
	} else if (val == 2) {
		b.position.x -= b.velocity.x
	} else if (val == 3) {
		b.position.x += b.velocity.x
	} else if (val == 4) {
		b.position.y += b.velocity.y
	}
}
const normalizedAngle2 = (x, y) => {
	let angle = Math.atan(y/Math.abs(x)) * 180 / Math.PI
    let result = 0
	if(x > 0 && y < 0){
        result = angle
	}else if(x < 0 && y < 0){
		result = -180 - angle
	}else if(x< 0 && y > 0){
        result = -180 - angle
	}else if(x > 0 && y > 0){
        result = -360 + angle
	}
	return result
}


const normalizedAngle = (x, y) => {
	let radians = Math.atan(y/x)
	if(1/x < 0) radians += Math.PI
	if(1/radians < 0) radians += 2*Math.PI
	return radians*180/Math.PI
}

const getRandInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getOrSetGet = (obj, key, func) => {
	if(!(key in obj)) {
		obj[key] = func()
	}
	return obj[key]
}
const turnPage = (self, to=null) => {
	self.parentElement.style.display = 'none'
	if(to!=null) document.getElementById(to).style.display = 'flex'
}
