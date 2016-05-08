$.fn.turkishUppercaseTransform = function() {
    var str = '';
    var element = this;
    String.prototype.turkishToUpperLetters = function(){
        var string = this;
        var letters = { "i": "İ", "ş": "Ş", "ğ": "Ğ", "ü": "Ü", "ö": "Ö", "ç": "Ç", "ı": "I" };
        string = string.replace(/(([iışğüçö]))/g, function(letter){ return letters[letter]; })
        return string.toUpperCase();
    };
    if ($(element).css('text-transform') == 'uppercase') {
        $(element).contents().each(function() {
            if (this.nodeType == 3) {
                str = $.trim(this.textContent || this.innerText || '');
                if (str && str != '' ){
                    this.textContent = str.turkishToUpperLetters();
                }
            }
        });
    }
    if (!element.children() || element.children().length == 0) return;
    element.children().each(function(i,v){
        $(v).turkishUppercaseTransform()
    })
};