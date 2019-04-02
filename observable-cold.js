
const obs = new Observable(observer => {
    observer.next(Math.random())
})

// 0.94957145217097218 (random number)
obs.subscribe(data => console.log(data))

// 0.114617340032099893 (random number)
obs.subscribe(data => console.log(data))

const source = new Observable(observer => {
    const socket = new WebSocket('ws://someurl');
    socket.addEventListener('msg', e => observer.next(e))
    return () => socket.close()
})