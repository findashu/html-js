let anc = document.querySelector('a');

anc.onclick = function(e) {
    console.log(e.target);
    e.preventDefault();

    console.log(this)

    this.innerText = 'Der'

    console.log(e)
}