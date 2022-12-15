const order = document.querySelector('.order')

order.onclick = function() {
    order.classList.add('animate');
    setTimeout(() => {this.classList.remove('animate')}, 10000)
}
