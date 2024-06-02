const niz = [];
let itemId = 4;

function removeItem(id) {
  $(`#${id}`).detach();
}
function openForm() {
  $("form").removeClass("invisible");
}
function activateBtn() {
  addItem(itemId);
}
function addItem(theId) {
  if (
    $("#first_name_input").val() &&
    $("#last_name_input").val() &&
    $("#email_input").val()
  ) {
    niz.push(theId);
    niz.push($("#first_name_input").val());
    niz.push($("#last_name_input").val());
    niz.push($("#email_input").val());
    $("tbody").append(
      `<tr id=${theId}><td id='name${theId}' class='border-2'></td><td id='surname${theId}' class='border-2'></td><td id='mail${theId}' class='border-2'></td><td id='btn${theId}' class='border-2 text-center fs-3 py-0'></td></tr>`
    );
    $(`#name${theId}`).html(niz[1]);
    $(`#name${theId}`).attr("onclick", "edit(this)");
    $(`#surname${theId}`).html(niz[2]);
    $(`#surname${theId}`).attr("onclick", "edit(this)");
    $(`#mail${theId}`).html(niz[3]);
    $(`#mail${theId}`).attr("onclick", "edit(this)");
    $(`#btn${theId}`).html(
      `<span type='button' onclick='removeItem(${theId})'>&#215;</span>`
    );
    niz.length = 0;
    $("#first_name_input").val(null);
    $("#last_name_input").val(null);
    $("#email_input").val(null);
    $("form").addClass("invisible");
    itemId++;
  } else {
    $("form").addClass("invisible");
    alert("Popunite sva polja!");
  }
}
function edit(item) {
  $(item).html(prompt("Izmena", `${item.innerHTML}`));
}
