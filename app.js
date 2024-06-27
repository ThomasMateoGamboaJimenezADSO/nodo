import { usuarios } from "./modulo.js";

const $root = document.querySelector("#root");
const $template = document.querySelector('#fracmento').content
const $card = document.createDocumentFragment();
$root.classList.add("container");

usuarios().then((listado) => {
  listado.forEach((usuario) => {
    

//     const $div_card = document.createElement("div");
// //---------------------------------------------------------
//     const $div_info = document.createElement("div");
//     const $h2_id = document.createElement("h2");
//     const $text_name = document.createElement("p");
//     const $text_username = document.createElement("p");
//     const $text_email = document.createElement("p");
// //---------------------------------------------------------
//     const $div_address = document.createElement("div");
//     const $text_street = document.createElement("p");
//     const $text_suite = document.createElement("p");
//     const $text_city = document.createElement("p");
//     const $text_zipcode = document.createElement("p");
// //---------------------------------------------------------
//     const $div_geo = document.createElement("div");
//     const $text_lat = document.createElement("p");
//     const $text_lng = document.createElement("p");
// //---------------------------------------------------------
//     const $div_data = document.createElement("div")
//     const $text_phone = document.createElement("p");
//     const $text_website = document.createElement("p");
// //---------------------------------------------------------
//     const $div_company = document.createElement("div");
//     const $text_comName = document.createElement("p");
//     const $text_catchPhrase = document.createElement("p");
//     const $text_bs = document.createElement("p");



//     $div_card.classList.add("card")
//     $div_info.classList.add("info");
//     $div_address.classList.add("address");
//     $div_geo.classList.add("geo");
//     $div_data.classList.add("data");
//     $div_company.classList.add("company");



//     $h2_id.textContent = usuario.id;
//     $text_name.textContent = usuario.name;
//     $text_username.textContent = usuario.username;
//     $text_email.textContent = usuario.email;
// //---------------------------------------------------------
//     $text_street.textContent = usuario.address.stereet;
//     $text_suite.textContent = usuario.address.suite;
//     $text_city.textContent = usuario.address.city;
//     $text_zipcode.textContent = usuario.address.zipcode;
// //---------------------------------------------------------
//     $text_lat.textContent = usuario.address.geo.lat;
//     $text_lng.textContent = usuario.address.geo.lng;
// //---------------------------------------------------------
//     $text_phone.textContent = usuario.phone;
//     $text_website.textContent = usuario.website;
// //---------------------------------------------------------
//     $text_comName.textContent = usuario.company.name;
//     $text_catchPhrase.textContent = usuario.company.catchPhrase;
//     $text_bs.textContent = usuario.company.bs;



//     $root.appendChild($div_card);
// //---------------------------------------------------------
//     $div_card.appendChild($div_info);
//     $div_info.appendChild($h2_id);
//     $div_info.appendChild($text_name);
//     $div_info.appendChild($text_username);
//     $div_info.appendChild($text_email);
// //---------------------------------------------------------
//     $div_info.appendChild($div_address);
//     $div_address.appendChild($text_street);
//     $div_address.appendChild($text_suite);
//     $div_address.appendChild($text_city);
//     $div_address.appendChild($text_zipcode);
// //---------------------------------------------------------
//     $div_address.appendChild($div_geo);
//     $div_geo.appendChild($text_lat);
//     $div_geo.appendChild($text_lng);
// //---------------------------------------------------------
//     $div_card.appendChild($div_data);
//     $div_data.appendChild($text_phone);
//     $div_data.appendChild($text_website);
// //---------------------------------------------------------
//     $div_data.appendChild($div_company);
//     $div_company.appendChild($text_comName);
//     $div_company.appendChild($text_catchPhrase);
//     $div_company.appendChild($text_bs);


  });

});
