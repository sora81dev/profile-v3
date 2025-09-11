// SCRIPT INFORMATION
// ------------------
// made by: sora81dev
// version: 1.0.3
// created: 2025/04/01
// last update: 2025/09/12
//
// copyright: (c)2025 sora81dev
// license: CC BY-NC-ND 4.0
//
// description: This is a script that is generate shortened Amazon links.
// This script is used to generate shortened Amazon links from the original Amazon link.
// It takes the original link as input and generates a shortened link that can be easily shared.
//
// Update Info
// 2025/09/12 v1.0.3 - Change language to English
// 2025/04/01 v1.0.2 - Fix goToPage function
// 2025/04/01 v1.0.1 - Fix copyToClipboard function
// 2025/04/01 v1.0.0 - First release

let result = ''

function generate() {
    const url = document.getElementById("URL").value
    console.log(url)
    const url_2 = url.replace("https://www.amazon.co.jp/", "")
    console.log(url_2)
    const url_3 = url_2.replace(/^[^/]*\//, "")
    console.log(url_3)
    const url_4 = url_3.replace("dp/", "")
    console.log(url_4)
    const url_5 = url_4.replace(/\/.*/, "")
    console.log(url_5)

    result = 'https://www.amazon.co.jp/dp/' + url_5
    console.log(result)

    const result_text = document.getElementById("result-text")
    result_text.innerHTML = 'Result: ' + result
}

function copyToClipboard() {
    if (result == '') {
        alert('Generate the URL by clicking the run button')
        console.error('result is empty')
        return
    }

    navigator.clipboard.writeText(result).then(() => {
        alert('Copied to clipboard!')
        console.log('Copied to clipboard:', result)
    }, (err) => {
        console.error('Failure: Copy to Clipboard', err)
    })
}

function goToPage() {
    if (result == '') {
        alert('Generate the URL by clicking the run button')
        console.error('result is empty')
        return
    }
    window.open(result, '_blank')
    console.log('goToPage:', result)
}
