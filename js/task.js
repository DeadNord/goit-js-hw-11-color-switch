console.log(document);

const liCat = document.querySelectorAll(".item");
console.log(`В списке ${Object.keys(liCat).length} категории.`);


liCat.forEach.call(liCat, (element) => {
    const titleEl = element.querySelector("h2").textContent;
    const liUl = element.querySelectorAll("li");
    console.log
        (`
    Категория: ${titleEl}
    Количество элементов: ${liUl.length}`
        );
});
