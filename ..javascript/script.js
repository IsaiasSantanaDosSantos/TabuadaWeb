function calcular() {
    var num = document.getElementById('txtnum')
    var res = document.getElementById('res')
    
    if (num.value.length == 0) {
        alert(`[ERRO] Precisa digitar algum número!`)
    } else {
        var n = Number(num.value)
        var c = 0
        res.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
        num.value = ''
        num.focus()
        
    }


}
