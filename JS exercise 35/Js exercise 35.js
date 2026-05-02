function ChangeImage() {
const image = document.querySelector('#image')
const url = prompt('Swirka badal ')
image.setAttribute('src', url)
const border = prompt('Enter the border colour')
    image.style.border = `1px solid ${border} `
const width = prompt('Enter the width')
    image.style.width =` ${width}px `
const height = prompt('Enter the  height')
    image.style.width =` ${height}px `
const Radius = prompt('Enter the border Radius')
    image.style.borderRadius =` ${Radius}px `  
}
