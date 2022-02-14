const totalEl = document.querySelector("#total");
const pageSizeEl = document.querySelector("#page-size");
const submitButtonEl = document.querySelector("#submit-button");

const paginationEl = document.querySelector(".pagination");
const pageItemTmpEl = document.querySelector("#page-item-temp");
const pagePrevTempEl = document.querySelector("#page-prev-temp");
const pageNextTempEl = document.querySelector("#page-next-temp");

submitButtonEl.addEventListener("click", function() {
    paginationEl.innerHTML = "";
    const total = totalEl.value;
    const pageSize = pageSizeEl.value;
    const pageCount = Math.ceil(total / pageSize);
    if (pageCount == 0) {
        return;
    }
    const pagePrevEl = document.importNode(pagePrevTempEl.content, true);
    const pageNextEl = document.importNode(pageNextTempEl.content, true);

    paginationEl.appendChild(pagePrevEl);
    for (let i = 1; i <= pageCount; i++) {
        const pageItem = document.importNode(pageItemTmpEl.content, true);
        pageItem.querySelector("a").innerText = i;
        paginationEl.appendChild(pageItem);
    }
    paginationEl.appendChild(pageNextEl);
});