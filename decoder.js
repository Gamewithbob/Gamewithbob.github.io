
var translation = {
    "a": 1,-
    "b": 2,
    "c": 3,
    "d": "A"    
};

function encode(value) {
    var encodedValue = '';
    
    for (var i = 0; i < value.length; i++) {
        var currentChar = value.charAt(i);
        var encodedChar = translation[currentChar];
        
        encodedValue += 
            encodedChar === undefined ? currentChar : encodedChar;
    }
    
    return encodedValue;
}

function decode(value) {
    var decodedValue = '',
        decodeDictionary = getDecodeDictionary(translation);
    
    for (var i = 0; i < value.length; i++) {
        var currentChar = value.charAt(i);
        var decodedChar = decodeDictionary[currentChar];
        
        decodedValue += 
            decodedChar === undefined ? currentChar : decodedChar;
    }
    
    return decodedValue;
}

function getDecodeDictionary(dictionary) {
    var decodeDictionary = {};
    
    for (var prop in dictionary) {
        if(dictionary.hasOwnProperty(prop)) {
            decodeDictionary[dictionary[prop]] = prop;
        }
    }
    console.log(decodeDictionary);
    return decodeDictionary;
}

$(function() {
    $('input').on('change', function() {
        var input = $(this).val();      
        
        $('#encoded').html(encode(input));
        $('#decoded').html(decode(encode(input)));
    });
});
