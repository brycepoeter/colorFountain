
function setStyles(colors, windowDim, numCircles) {
    let windowPct = 100 / numCircles
    let circRad = windowDim / numCircles
    for (i = 0; i < numCircles; i++) {
        let element = document.getElementById(`l${i}`)
        let rad = circRad
        element.style.width = rad
        element.style.height = rad
        element.style.backgroundColor = colors[i]
        element.style.left = `${windowPct * i}%`
    }
}

function shiftColors(colors) {
    newCol = Math.random().toString(16).substr(2, 6)
    colors.unshift(`#${newCol}`)
    colors.pop()
    return colors
}

function main() {
    let numCircles = 7
    let largerDim
    let colors = Array(numCircles)
    window.setInterval(() => {
        window.innerWidth >= window.innerHeight ? largerDim = window.innerWidth : largerDim = window.innerHeight
        colors = shiftColors(colors)
        setStyles(colors, largerDim, numCircles)
    }, 1000)
}

main()

