
const random = Math.random()
const obs = new Observable(observer => {
    observer.next(random)
})

// 0.94957145217097218 (random number)
obs.subscribe(data => console.log(data))

// 0.94957145217097218 (random number)
obs.subscribe(data => console.log(data))


const socket = new WebSocket('ws://someurl')
const source = new Observable(observer => {
    socket.addEventListener('message', e => observer.next(e))
})