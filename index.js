let newsCard = document.getElementById('newsCard');

const data = null;

// Create ajax get request
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        // console.log(this.responseText);

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="col-md-6">
                            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-primary"> ${element["clean_url"]} </strong>
                                    <h3> ${element["title"]} </h3>
                                    <a href="${element["link"]}" target="_blank" class="stretched-link mt-3 fs-6">Continue reading</a>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src="${element["media"]}" width="200" height="100%" class="bd-placeholder-img">

                                </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsCard.innerHTML = newsHtml;
    } else {
        console.log("Some error occured");
    }
});

xhr.open("GET", "https://newscatcher.p.rapidapi.com/v1/search_free?q=India&lang=en&media=True");
xhr.setRequestHeader("X-RapidAPI-Host", "newscatcher.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "fa1f168a78mshe73bc7f6e543aacp1fbd10jsn94670eb80107");

xhr.send(data);