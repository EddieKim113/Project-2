var tangiers = ["CANEMINT", "ORANGE SODA", "HORCHATA", "KASHMIR PEACH", "BLUE FLOWER", "FOREPLAY ON THE PEACH", "PINEAPPLE", "STRAWBERRY", "WATERMELON", "BLUEBERRY", "EXPERIMINT", "NOW WITH MELON", "MELON BLEND", "GUAJAVA KISS", "WHITE GRAPE", "PEAR", "STRAWBERRY-KIWI", "PEACH ICED TEA", "RASPBERRY"];
var fumari = ["SPICED CHAI", "MINT CHOCOLATE CHILL", "LEMON MINT", "BLUEBERRY MUFFIN", "FRENCH VANILLA", "TANGELO", "WHITE PEACH", "WHITE GUMMI BEAR", "RED GUMMI BEAR", "AMBROSIA", "PRICKLY PEAR", "WATERMELON"];
var starbuzz = ["BLUE MIST", "PUMPKIN PIE", "PINA COLADA", "SAFARI MELON DEW", "GUAVA", "TANGERINE DREAM"];
var alfakher = ["BUBBLE GUM", "GUM WITH MINT", "ORANGE", "KIWI", "GRENDAINE", "WATERMELON"];

for(i=0; i < tangiers.length; i++){
    var newList = $("<li>" + tangiers[i] + "</li>");
    newList.addClass("hookah-menu");
    $("#tangiers").append(newList);
}

for(i=0; i < fumari.length; i++){
    var newList = $("<li>" + fumari[i] + "</li>");
    newList.addClass("hookah-menu");
    $("#fumari").append(newList);
}

for(i=0; i < starbuzz.length; i++){
    var newList = $("<li>" + starbuzz[i] + "</li>");
    newList.addClass("hookah-menu");
    $("#starbuzz").append(newList);
}

for(i=0; i < alfakher.length; i++){
    var newList = $("<li>" + alfakher[i] + "</li>");
    newList.addClass("hookah-menu");
    $("#alfakher").append(newList);
}