

$(document).ready(function(){
    $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
  });
  
function nameCategori(cat) {
document.getElementById("dropbtn").innerHTML = cat;
}



var $grid = $('.ware').isotope({});
var filterValue = "item";
var filterValue2 = "instock";
bul = false

function filter(clas,clas2) {
        if (clas == undefined) {
        clas = "item"
        //console.log("EEEEEEEEEEEEEEE")
    }if(clas2 == undefined){
        clas2 = "noinstock"  
    }

    $grid.isotope({ 
        filter: '.'+clas+'.'+clas2,
        getSortData: {
            color: '[data-color]',
            number: '.number parseInt'
          },
          // sort by color then number
          sortBy: [ 'color', 'number' ],
        sortAscending: false
    });
    console.log('.'+clas+'.'+clas2)
}
// FILTER CATEGORI ======================================================= 
$('#filterid').on( 'click', "a", function(){
    
    filterValue= $(this).attr('class');
    //var filterValue2 = $(this).attr('class');
    console.log('".'+filterValue+'"');
    // $grid.isotope({ filter: '".'+filterValue+'"'});
    // st = '.'+filterValue;
    // console.log({ filter: st})
    
    filter(filterValue,filterValue2)
   // $grid.isotope({ filter: '.'+filterValue});
});
// FILTER IN STOCK ======================================================= 
$('#che').click(function() {
    //check = "item"
    if(bul == false){
        filterValue2 ="noinstock"
        filter(filterValue,"noinstock")
        bul = true
    }else {
        filterValue2 ="instock"
        filter(filterValue,filterValue2)
        
        bul = false
    }
})

$('.checkmod').click(function(){
    img = $(this).attr('src');
    $('.modal').css("display","flex")
    document.getElementById("modcontent").innerHTML = 
    // console.log(img);
    '<div class="gen"><img style="width:750px;" src="'+
    img+
    '" alt=""></div>'
})

window.onclick = function(event) {
    if (event.target ==  document.getElementById('modal')) {
      modal.style.display = "none";
    }
}
$('.close').click(function(){

    document.getElementById('modal').style.display = "none";
})
