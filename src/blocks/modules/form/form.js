// $(function(){
//   $("#phone1").inputmask("8(999) 999-9999");
// });
import "jquery.alphanum";

$(document).ready(function(){
$(".input__email").alphanum({
    allow: '@ .',
    allowNumeric: true,
    allowLatin: true,
    allowOtherCharSets: false
})
$(".only_letters").alphanum({
    allowNumeric: false,
    allow: '-'
})
$(".only_number").alphanum({
    allowNumeric: true,
    allowLatin: false,
    allowOtherCharSets: false
})
$(".input__comment").alphanum({
    allowNewline: false
})
});