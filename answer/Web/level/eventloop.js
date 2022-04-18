function a(callback){
    setTimeout(time2,0) //hi, 4번 
    console.log('hello world') // 2번
    setTimeout(time,0) // 5 , 5번
    callback() // 5 , 3번
}

console.log(3) // 1번

function time2(){
    console.log('hi')
}

function time(){
    console.log('5')
}

a(time)

