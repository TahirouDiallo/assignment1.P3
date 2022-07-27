import "./style.css";

fetch("https://picsum.photos/v2/list?page=2&limit=100")
  .then((res) => res.json())
  .then((listofPhotos) => {
    const i = Math.floor(Math.random() * 100);
  
    console.log(i, listofPhotos[i].id, listofPhotos[i].download_url);
  
    const button = document.querySelector("#button");

    button.addEventListener("click", () => {
      location.reload();
    });

    document.querySelector("#app").innerHTML += `
    <h2> ${listofPhotos[i].author} - ${listofPhotos[i].id} </h2>

    <img src="${listofPhotos[i].download_url}" alt="Random Picture" />
    `;
  });
