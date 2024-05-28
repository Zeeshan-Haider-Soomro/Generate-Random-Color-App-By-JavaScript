
let yearChanger = document.querySelector('#yearChanger');
let date = new Date();
yearChanger.innerText = date.getFullYear();

// color code variable is open
let colorName = ("0123456789ABCDEF")
// color code variable is close

// color platlets 
let platlate1 = document.querySelector("#platlate-1")
let platlate2 = document.querySelector("#platlate-2")
let platlate3 = document.querySelector("#platlate-3")
let platlate4 = document.querySelector("#platlate-4")
let platlate5 = document.querySelector("#platlate-5")
// color platlets

// generate color code bay paraghaph is open
let code1 = document.querySelector ("#code-1")
let code2 = document.querySelector ("#code-2")
let code3 = document.querySelector ("#code-3")
let code4 = document.querySelector ("#code-4")
let code5 = document.querySelector ("#code-5")
// generate color code bay paraghaph is close

function generateColor() {
    // Generated color code variables open
    let store1 = "#"
    let store2 = "#"
    let store3 = "#"
    let store4 = "#"
    let store5 = "#"
    // Generated color code variables close


    // generate plate 1 started
    for (let i = 0; i < 6; i++) {
        let generateColor = Math.floor(Math.random() * colorName.length);
        store1 += (colorName[generateColor]);
    }
    platlate1.style.backgroundColor = store1
    code1.innerHTML = store1
    // generate plate 1 ended

    // generate plate 2 started
    for (let i = 0; i < 6; i++) {
        let generateColor = Math.floor(Math.random() * colorName.length);
        store2 += (colorName[generateColor]);
    }
    platlate2.style.backgroundColor = store2
    code2.innerHTML = store2
    // generate plate 2 ended

    // generate plate 3 started
    for (let i = 0; i < 6; i++) {
        let generateColor = Math.floor(Math.random() * colorName.length);
        store3 += (colorName[generateColor]);
    }

    platlate3.style.backgroundColor = store3
    code3.innerHTML = store3
    // generate plate 3 ended

    // generate plate 4 started
    for (let i = 0; i < 6; i++) {
        let generateColor = Math.floor(Math.random() * colorName.length);
        store4 += (colorName[generateColor]);
    }
    platlate4.style.backgroundColor = store4
    code4.innerHTML = store4
     // generate plate 4 ended

    // generate plate 5 started
    for (let i = 0; i < 6; i++) {
        let generateColor = Math.floor(Math.random() * colorName.length);
        store5 += (colorName[generateColor]);
    }
    platlate5.style.backgroundColor = store5
    code5.innerHTML = store5
     // generate plate 5 ended
}

// copy and paste funtion is started
function copycode(zeeshan) {
    let colorCode = document.getElementById(zeeshan).innerHTML;
    let succesCopy = navigator.clipboard.writeText(colorCode)
    if (succesCopy) {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Copied code",
            showConfirmButton: false,
            timer: 1000
          });
    }
}
// copy and paste funtion is ended

