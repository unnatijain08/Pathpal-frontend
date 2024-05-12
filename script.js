function dates(){
    let myDate=new Date()
    const t=document.querySelector("#din")
    t.innerHTML=myDate.toDateString()
    console.log(t)
}
window.onload=dates()
function time(){
    let myTime=new Date()
    const p=document.querySelector("#samay")
    p.innerHTML=myTime.toLocaleTimeString()
    console.log(p)
}
window.onload=time()