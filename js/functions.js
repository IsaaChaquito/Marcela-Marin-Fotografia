
let class_biografia = document.getElementById('biografia');
let textos_biografia = class_biografia.querySelectorAll('h2');

function showNextText(){
    let i = 0;
    while ($(textos_biografia[i]).is(":hidden")){
        i++;
    }
    
    $(textos_biografia[i]).hide();

    if(i < textos_biografia.length - 1){
        $(textos_biografia[++i]).show();
    }else{
        $(textos_biografia[0]).show();
    }

    //Añadir y remover animaciones css temporales.
    setTimeout(() => {
        $("#btn_siguiente").removeClass("shake-next");
        $("#btn_anterior").removeClass("shake-previous");
    }, 1000);
    $("#btn_siguiente").addClass("shake-next");
    $("#btn_anterior").addClass("shake-previous");
}

function showPreviousText(){
    let i = textos_biografia.length - 1;
    while ($(textos_biografia[i]).is(":hidden")){
        i--;
    }
    
    $(textos_biografia[i]).hide();

    if(i < 1){
        $(textos_biografia[textos_biografia.length - 1]).show();
    }else{
        $(textos_biografia[--i]).show();
    }

    //Añadir y remover animaciones css temporales.
    setTimeout(() => {
        $("#btn_siguiente").removeClass("shake-next");
        $("#btn_anterior").removeClass("shake-previous");
    }, 1000);
    $("#btn_siguiente").addClass("shake-next");
    $("#btn_anterior").addClass("shake-previous");
}

// Intervalo para ir cambiando el texto de la biografía. | Desde aquí.
let myTimer = setInterval(showNextText, 30000);

//Botónes para cambiar texto de la biografía.
$('#btn_siguiente').click(function(){
    clearInterval(myTimer);
    myTimer = setInterval(showNextText, 30000);
    showNextText();
});

$('#btn_anterior').click(function(){
    clearInterval(myTimer);
    myTimer = setInterval(showNextText, 30000);
    showPreviousText();
});
// Intervalo para ir cambiando el texto de la biografía. | Hasta aquí.


//Marcar tab o nav seleccionado. | Desde aquí.
let nav_options = document.querySelectorAll('.nav-opcion');

nav_options.forEach(option => {
    option.addEventListener("click", SelectedOption);
});

function SelectedOption(e){
    clearOptionSelected();
    $(e.currentTarget).addClass("nav-opcion-selected");
}

function clearOptionSelected (){
    nav_options.forEach(option => {
        $(option).removeClass("nav-opcion-selected");
    });
}
//Marcar tab o nav seleccionado. | Hasta aquí.