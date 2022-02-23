const totalEl = document.querySelector("#total");
const pageSizeEl = document.querySelector("#page-size");
const submitButtonEl = document.querySelector("#submit-button");

const paginationEl = document.querySelector(".pagination");
const pageItemTmpEl = document.querySelector("#page-item-temp");
const pagePrevTempEl = document.querySelector("#page-prev-temp");
const pageNextTempEl = document.querySelector("#page-next-temp");

submitButtonEl.addEventListener("click", function() {
    render();
});

function render(current = 1) {
    paginationEl.innerHTML = "";
    const total = totalEl.value;
    const pageSize = pageSizeEl.value;
    const pageCount = Math.ceil(total / pageSize);
    if (pageCount == 0) {
        return;
    }
    if (current > pageCount) {
        current = pageCount;
    }
    paginationEl.setAttribute("aria-current", current);
    pagePrevTempEl.content.cloneNode(true);
    const pagePrevEl = pagePrevTempEl.content.cloneNode();
    const pageNextEl = pageNextTempEl.content.cloneNode();

    paginationEl.appendChild(pagePrevEl);
    if (current === 1) {
        console.log(pagePrevEl.firstElementChild);
    }
    for (let i = 1; i <= pageCount; i++) {
        const pageItem = document.importNode(pageItemTmpEl.content, true);
        pageItem.querySelector("a").innerText = i;
        paginationEl.appendChild(pageItem);
    }
    paginationEl.appendChild(pageNextEl);
}