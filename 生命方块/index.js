
var item_list = document.querySelectorAll('li')
console.log(item_list);
function init(params) {
    for (let index = 0; index < params.length; index++) {
        item_list[params[index]].style.backgroundColor = 'rgb(101, 199, 71)'
    }
}

function die(params) {
    for (let index = 0; index < params.length; index++) {
        item_list[params[index]].style.backgroundColor = ''
    }
}
function update() {
    let dead = []
    let newbron = []
    for (let index = 0; index < item_list.length; index++) {
        let num = 0
        console.log(item_list[index].style.backgroundColor == 'rgb(101, 199, 71)');
        try {
            if (item_list[index + 1].style.backgroundColor == 'rgb(101, 199, 71)') {
                num++
            }
            if (item_list[index + 99].style.backgroundColor == 'rgb(101, 199, 71)') {
                num++
            }
            if (item_list[index + 100].style.backgroundColor == 'rgb(101, 199, 71)') {
                num++
            }
            if (item_list[index + 101].style.backgroundColor == 'rgb(101, 199, 71)') {
                num++
            }
        } catch (error) { }
        try {
            if (item_list[index - 1].style.backgroundColor == 'rgb(101, 199, 71)') {
                num++
            }
            if (item_list[index - 99].style.backgroundColor == 'rgb(101, 199, 71)') {
                num++
            }
            if (item_list[index - 100].style.backgroundColor == 'rgb(101, 199, 71)') {
                num++
            }
            if (item_list[index - 101].style.backgroundColor == 'rgb(101, 199, 71)') {
                num++
            }
        } catch (error) { }

        if (num >= 4 && item_list[index].style.backgroundColor == 'rgb(101, 199, 71)') {
            dead.push(index)
        } else if (num >= 3) {
            newbron.push(index)
        } else {
            dead.push(index)
        }
    }
    die(dead)
    init(newbron)
}
var random_list = []
let num = 0
while (num != 1000) {
    random_list.push(Math.floor(Math.random() * 7000))
    num++
}
init(random_list)
console.log(random_list);
setInterval(() => {
    update()
},500);

