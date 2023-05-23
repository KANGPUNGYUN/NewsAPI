async function getNews() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=kr&apiKey=7b440fd50f764203b8c3807b5bef97c3",
    {
      method: "GET",
    }
  );
  const json = await res.json();
  console.log(json.articles);
  let articleList = json.articles;
  const newsList = document.querySelector("#newsList");
  articleList.forEach((el) => {
    const news = document.createElement("li");
    const newsLink = document.createElement("a");
    newsLink.href = el.url;
    const hiddenText = document.createElement("p");
    hiddenText.classList = "hiddenText";
    hiddenText.innerText = "해당 기사로 이동하기 >";
    const newsTitle = document.createElement("h2");
    newsTitle.innerText = el.title.slice(0, el.title.lastIndexOf("-"));
    const authorContainer = document.createElement("div");
    authorContainer.classList = "authorContainer";
    const authorImg = document.createElement("img");
    authorImg.classList = "newsImg";

    const author = document.createElement("h3");
    author.innerText = el.author;

    newsLink.appendChild(newsTitle);
    authorContainer.appendChild(authorImg);
    authorContainer.appendChild(author);
    newsLink.appendChild(authorContainer);
    newsLink.appendChild(hiddenText);
    news.appendChild(newsLink);
    newsList.appendChild(news);
  });
}
getNews();
