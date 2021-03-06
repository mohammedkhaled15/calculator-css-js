
document.querySelectorAll("input:not(#del, #reset, #equal, .screen)").forEach(el=>{
    el.addEventListener("mousedown",function(){
        this.style.backgroundColor = "hsl(223, 31%, 20%)"
    })
    el.addEventListener("mouseup",function(){
        this.style.backgroundColor = "#fff"
    })
})

document.querySelectorAll("#del, #reset").forEach(el=>{
    el.addEventListener("mousedown",function(){
        this.style.backgroundColor = "hsl(224, 36%, 15%)"
    })
    el.addEventListener("mouseup",function(){
        this.style.backgroundColor = "#666A99"
    })
})

document.querySelectorAll(" #equal").forEach(el=>{
    el.addEventListener("mousedown",function(){
        this.style.backgroundColor = "hsl(6, 70%, 34%)"
    })
    el.addEventListener("mouseup",function(){
        this.style.backgroundColor = "hsl(6, 63%, 50%)"
    })
})

// All about functionality of the calculator

var result = document.querySelector("input.screen")

// all numbers and operations buttons

document.querySelectorAll("input:not(#del, #reset, #equal, .screen)").forEach(el=>{

    el.addEventListener("click",function(){
        
        if(result.value == "0"){
            result.value = ""
            result.value+=el.value
        }else{
            result.value+=el.value
        }
    })
})


// [ reset ] button

document.querySelector("#reset").addEventListener("click",function(){
    result.value = "0"
})

// [ delete ] button

document.querySelector("#del").addEventListener("click",function(){
    result.value = result.value.substring(0,result.value.length-1)
})

// [ = ] button

document.querySelectorAll(" #equal").forEach(el=>{
    
    el.addEventListener("click", function(){
        result.value = eval(result.value.replace("x","*"))
    })
})


// theme modification

// motion of the ball 

document.querySelector(".slider").addEventListener("click",function(){
    if(this.firstElementChild.classList.contains("mid")){
        this.firstElementChild.classList.remove("mid")
        this.firstElementChild.classList.add("end")
        document.getElementsByTagName("link")[0].setAttribute("href","third-theme.css")
    }else if(this.firstElementChild.classList.contains("end")){
        this.firstElementChild.classList.remove("end")
        document.getElementsByTagName("link")[0].setAttribute("href","first-theme.css")
    }else{
        this.firstElementChild.classList.add("mid")
        document.getElementsByTagName("link")[0].setAttribute("href","second-theme.css")
    }
})
