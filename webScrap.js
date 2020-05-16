//Colar no console do site https://www.hurb.com/br/
let arrayJson = [];

$.each($(".product-card"), function() {
    titulo = $(this).find(".product-card__title").text();
    desconto = $(this).find(".promotion-tag-discount").text();
    valor = $(this).find(".promotion-price").text();
    arrayJson.push({titulo,desconto,valor});
});

console.log(JSON.stringify(arrayJson, null, 2));