console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {

  let dog_image_container = document.getElementById("dog-image-container");
  let dog_breeds = document.getElementById("dog-breeds");
  let breed_dropdown = document.getElementById("breed-dropdown");

  fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        for (let img_src of data.message) {
          let img = document.createElement("img");
          img.setAttribute("src", img_src);
          dog_image_container.append(img);
        }
      });

  fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        for (let breed in data.message) {
          let li = document.createElement("li");
          li.textContent = breed;
          dog_breeds.append(li);
          li.addEventListener("click", event => {
            event.target.style.color = "palevioletred";
          });
        }

        breed_dropdown.addEventListener("change", event => {
          for (let li of dog_breeds.children) {
            if (li.textContent.startsWith(event.target.value)) {
              li.style.display = "list-item";
            } else {
              li.style.display = "none";
            }
          }
        })
      });
});