// function 아반떼(callback, count) {
//     callback();
//     console.log("아반떼 go")
//     count += 1;
//     console.log(count)

// }

// function 소나타(callback, count) {
//     console.log("소나타 go")
//     callback();
//     count += 1;
//     console.log(count)

// }

// function 제네시스(callback, count) {
//     callback();
//     console.log("제네시스 go")
//     count += 1;
//     console.log(count)

// }

// // setTimeout(아반떼, 1000);
// // setTimeout(소나타, 2000);
// // setTimeout(제네시스, 3000);
// // 총 걸린 시간 3초

// // 아반떼 후 소나타 후 제네시스
// // 순차적으로 실행하고 싶을땐?

// function 자동차경주(count) {
    
//     아반떼(() => {
//         제네시스(() => {
//             소나타(() => {
//                 아반떼(()=>{

//                 }, count)
//             }, count)
//         }, count)
//     }, count)
// }

// let count = 0;
// 자동차경주(count);

// // 비동기
// // callback
// // promise
// // async/await


// Promise
function 아반떼() {
    return new Promise((resovle,reject)=> { 
        setTimeout(()=>{
            resovle('아반떼 go')
        },1000)
    })
}

function 소나타() {
    return new Promise((resovle,reject)=> { 
        setTimeout(()=>{
            resovle('소나타 go')
        },2000)
    })
}

function 제네시스() {
    return new Promise((resovle,reject)=> { 
        setTimeout(()=>{
            resovle('제네시스 go')
        },3000)
    })
}
// 아반떼().then((data)=>{
//     console.log(data)
//     return 소나타()
// })
// .then((data)=>{
//     console.log(data)
//     return 제네시스()
// })
// .then((data)=>{
//     console.log(data)
// })

//async await
async function 자동차() {
    const result = await 아반떼()
    console.log(result)
    const result2 = await 소나타()
    console.log(result2)
    const result3 = await 제네시스()
    console.log(result3)
}

자동차()