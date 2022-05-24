// Initialize the news api parameters
let source = 'bbc-news';
let apikey = '873dc1e667614ee4a83aacf5e858ebed';

// Grab the news card
let newsCard = document.getElementById('newsCard');

// Create ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

// Step after response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="col-md-6">
                            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-primary"> ${element["author"]} </strong>
                                    <h3> ${element["title"]} </h3>
                                    <p class="card-text mb-auto"> ${element["description"]} </p>
                                    <a href="${element["url"]}" target="_blank" class="stretched-link mt-3">Continue reading</a>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src="${element["urlToImage"]}" width="200" height="100%" class="bd-placeholder-img">

                                </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsCard.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();