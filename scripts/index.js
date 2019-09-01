// Add your javascript over here 🙃

let showMenu = false
let activeImage = Sky1

document.getElementById('Menu')
.addEventListener('click',function(e){
  if(showMenu){
    Image1.emit('fadeIn-start')
    Image2.emit('fadeIn-start')
    Image3.emit('fadeIn-start')
  }else{
    Image1.emit('fadeOut-start')
    Image2.emit('fadeOut-start')
    Image3.emit('fadeOut-start')
  }
  showMenu = !showMenu
})

document.getElementById('Image2')
.addEventListener('click',function(e){
  activeImage.emit('fadeIn-start')
  Sky2.emit('fadeOut-start')
  activeImage = Sky2
})

document.getElementById('Image3')
.addEventListener('click',function(e){
  activeImage.emit('fadeIn-start')
  Sky3.emit('fadeOut-start')
  activeImage = Sky3
})


document.getElementById('Image1')
.addEventListener('click',function(e){
  activeImage.emit('fadeIn-start')
  Sky1.emit('fadeOut-start')
  activeImage = Sky1
})