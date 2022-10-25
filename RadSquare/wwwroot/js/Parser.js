


function Parser(first, second) {
    let path = "https://www.google.com.ua/search?q=" + first + "+" + second;
    var parser = new DOMParser();
    var doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
}

    
document.getElementById('Second').addEventListener('change', function () {
    let first = document.getElementById("First").value;
    let second = this.value;
    console.log(second * first);
    Parser(first, second);
})
document.getElementById('First').addEventListener('change', function () {
    let second = document.getElementById("Second").value;
    let first = this.value;
    console.log(second * first);
    Parser(first, second);
})
