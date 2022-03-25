const container = document.querySelector('.container')
const output = document.querySelector('.output')
const game = {ani:null,inplay:false,x:0,speed:2}
output.addEventListener('click',(e)=>{
    if(!game.inplay){
        game.ani = window.requestAnimationFrame(mover)
        game.inplay = true
    }else{
        window.cancelAnimationFrame(game.ani)
        game.inplay = false
    }
})


function mover(){
    // if(game.x > (container.offsetLeft + container.offsetWidth - output.offsetWidth)){
    //     game.speed *= -1
    // }

    const dim = container.getBoundingClientRect()
    game.x += game.speed
    if((game.x>dim.width - 50) || game.x < 0){

        game.speed *= -1
    }
    
    output.style.left = game.x + 'px'
    game.ani = window.requestAnimationFrame(mover)
}