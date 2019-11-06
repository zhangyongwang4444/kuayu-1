function jsonp(url) {
    return new Promise((resolve, reject) => {
        const random = 'frankJSONPCallbackName' + Math.random()
        window[random] = (data) => {
            resolve(data)
        }
        const script = document.createElement('script')
        script.src = `${url}?functionName=${random}`
        script.onload = () => {
            script.remove()
        }
        script.onerror = () => {
            reject()
        }
        document.body.appendChild(script)
    })
}



jsonp('http://qq.com:8888/friends.js')
    .then((data) => {
        console.log(data)
    })










