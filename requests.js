const getPuzzle = (wordCount) => new Promise((res, rej) => {

    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.response)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject("Error happened??")
        }
    })

    request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3")

    request.send()
})

