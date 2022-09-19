


function Parser(first, second) {
    let path = "https://www.google.com.ua/search?q=" + first + "+" + second;
    var parser = new DOMParser();
    var doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
}

    
document.getElementById('second').addEventListener('change', function () {
    let first = document.getElementById("months").value;
    let second = this.value;
    console.log(second * first);
    Parser(first, second);
})
document.getElementById('months').addEventListener('change', function () {
    let second = document.getElementById("second").value;
    let first = this.value;
    console.log(second * first);
    Parser(first, second);
})
