# 🌄 JavaScript Image Slider (Carousel)

A clean and responsive **Image Slider** built using **HTML, CSS, JavaScript, and Bootstrap 5**.
This project demonstrates core JavaScript concepts like **DOM manipulation, event handling, and array iteration**.

---

## ✨ Demo Features

* ▶️ Next / Previous navigation
* 🔁 Automatic sliding (every 3 seconds)
* 📱 Fully responsive layout
* 🎨 Modern UI with shadows and rounded corners
* 🖼 Handles different image sizes smoothly

---

## 🛠 Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling & layout
* **JavaScript (Vanilla)** – Functionality
* **Bootstrap 5** – Responsive design

---

## 📁 Folder Structure

```id="6c91dp"
📦 image-slider
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 script.js
 ┗ 📂 assets
    ┗ 📜 background.avif
```

---

## ⚙️ How It Works

1. All images are stored in an array
2. `index` variable tracks current image
3. Functions control navigation:

   * `nextSlide()` → next image
   * `prevSlide()` → previous image
4. `setInterval()` automatically updates image

---

## 🧠 Core Logic

```javascript id="r7f7v2"
let index = 0;

function showSlide(){
   let img = document.getElementById("slide");
    img.src = images[index];
}
```

---

## 🎨 UI Design Highlights

* Centered layout using **Flexbox + Bootstrap**
* Background with overlay effect
* Fixed image size for consistency:

```css id="ivv7cd"
#slide {
  width: 1000px;
  height: 500px;
  object-fit: cover;
}
```

---

## 🚀 How to Run

1. Download or clone this project
2. Open `index.html` in your browser
3. Enjoy the slider 🎉

---

## ⚠️ Notes

* Use only **valid image URLs**
* `object-fit: cover` ensures proper image display
* Buttons use `onclick()` events

---

## 🔮 Future Improvements

* 🔘 Add navigation dots
* 🎞 Smooth sliding animation (transition effect)
* ⏸ Pause on hover
* ⌨ Keyboard controls

---

## 📌 Learning Outcomes

From this project, you’ll understand:

* DOM manipulation
* Event handling
* Working with arrays
* UI layout using Bootstrap

---

## 🤝 Contributing

Feel free to fork this project and improve it.

---

## 📜 License

This project is open-source and free to use.

---

💡 *A simple project, but a strong step toward mastering JavaScript!*
