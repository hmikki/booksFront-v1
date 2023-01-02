$("#profileImage").click(function(e) {
    $("#imageUpload").click();
});
/****** 100 vh section **********/
var elements = document.getElementsByClassName('window-full');
var windowheight = window.innerHeight + "px";

fullheight(elements);
function fullheight(elements) {
    for(let el in elements){
        if(elements.hasOwnProperty(el)){
            elements[el].style.height = windowheight;
        }
    }
}

window.onresize = function(event){
    fullheight(elements);
}
if (document.getElementById("imageUpload") != null){
    document.getElementById("imageUpload").onchange = function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                // e.target.result is a base64-encoded url that contains the image data
                document.getElementById('mainImage').setAttribute('src', e.target.result);
            };
            reader.readAsDataURL(this.files[0]);
        }
    }
}
