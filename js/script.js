var el = document.getElementById('main');
var img = el.nameFile;
img.addEventListener("change",function(e){
    let selectedFile = img.files[0];
    let fileUrl = URL.createObjectURL(selectedFile);
    img.parentElement.insertAdjacentHTML(
        "beforeend",
        ` <div class ="main-form__image">
             <img alt="" title="${selectedFile.name}" src ="${fileUrl}">
        </div>`
    );
});
document.getElementById('main').addEventListener("submit",checkForm);
function checkForm(event){
    event.preventDefault();
    var name = el.nameInput.value;
    var komment = el.nameTextarea.value;
    var nameOwner = el.nameInputOwner.value;
    var age = el.nameSelect;
    var ageSelect = age.selectedIndex;
    var ageValue = age.options[ageSelect].text;
    var agree = el.nameCheck;
    var date = el.inputDate.value;
    var fail ="";
    if ( name == "" || komment == "" || nameOwner == "" || agree.checked != true || date == "")
        fail = "Please, fill all filds";
    else if(name.length <= 1 || name.length > 20 || nameOwner.length <= 1 || nameOwner.length > 20)
        fail = "Please enter correct name";
    if (fail != "")
        document.getElementById('error').innerHTML = fail;
    else {
        alert ("All data is correctly filled in!\nName Diamond: "+name+"\nComment: "+komment+"\nImage"+img.value +"\nYour name: "+nameOwner+"\nAge: "+ageValue+"\nDate: "+date);
        window.location.reload();
    }
}