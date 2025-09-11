// SCRIPT INFORMATION
// ------------------
// made by: sora81dev
// version: 1.0.2
// created: 2025/03/07
// last update: 2025/09/12
//
// copyright: (c)2025 sora81dev
// license: CC BY-NC-ND 4.0
//
// description: This is a script that is redirect to Akizuki Denshi Tsusho product page using shopping number.
// This script is used to redirect to Akizuki Denshi Tsusho product page from the shopping number.
//
// Update Info
// 2025/09/12 v1.0.2 - Open page as _blank
// 2025/09/12 v1.0.1 - Change language to English
// 2025/03/07 v1.0.0 - First release

function redirectToURL() {
    const num = document.getElementById("numInput").value;
    const url = `https://akizukidenshi.com/catalog/g/g${num}`;
    window.open(url, '_blank')
}