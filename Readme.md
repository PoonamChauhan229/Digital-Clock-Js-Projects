# 📝 Build a Digital Clock with JavaScript – Project Walkthrough

## 🚀 Project Overview
This project **is a simple Digital Clock** built using HTML, CSS, and JavaScript. It displays both 24-hour and 12-hour formatted clocks along with the current date, all updated in real time.

It’s a great project for beginners to understand how to work with the Date object, update the DOM dynamically, and create a clean UI using basic HTML/CSS.

---
### 🔗 GitHub Source Code: https://github.com/PoonamChauhan229/Digital-Clock-Js-Projects
### 🌐 Live Demo: https://poonamchauhan229.github.io/Digital-Clock-Js-Projects/

📁 Project Structure
```
  Digital-Clock/
  ├── index.html       → Contains the layout and clock structure.
  ├── style.css        → Handles all visual styling of the digital clock.
  └── script.js        → Contains JavaScript to fetch and update the time and date.
```
---

## 🔧 index.html – Layout and Structure

---
### `<body>` and `.main-clock` Wrapper

```
<body>
  <div class="container">
```
- The `<body>` tag contains all visible content on the page.  
- The `.main-clock` Wrapper for the entire clock display section.

---

## ⏰ 24-Hour Clock Block
```
    <div class="clock-box">
      <div class="label">24-HOUR CLOCK</div>
      <div id="clock24" class="time">00:00:00</div>
    </div>
```
- .clock-box: A card-like container for one clock format.

- .label: Displays the title "24-HOUR CLOCK".

- #clock24: Placeholder for live 24-hour format time.

---

## 🕘 12-Hour Clock Block
```
    <div class="clock-box">
      <div class="label">12-HOUR CLOCK</div>
      <div id="clock12" class="time">00:00:00 AM</div>
    </div>
```
- Another .clock-box for the 12-hour format time.
- #clock12: Placeholder to dynamically update 12-hour time.

---

## 📅 Date Display

```  <div id="date" class="date">Monday, Jan 01, 2025</div>```
- #date: Shows today's date.
- The content here is replaced dynamically by the script.

---

## 🧩 `<script>` - JavaScript File
```
  <script src="./script.js"></script> 
```
- Loads your JavaScript file (script.js) that powers the live clock and date updates.

---

## 🎨 style.css – Styling the Application

## `🖼️ Full Page Background and Centering (body)`
- Uses Flexbox to center the clock both horizontally and vertically.
- Sets the full height of the page (100vh) to ensure vertical centering.
- pplies a gradient background from dark blue to slightly lighter blue.
```
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #141e30, #243b55);
  }
```

---

## `⏱️ Clock Wrapper Container (.clock-container)`
- Acts as the main box around the clock elements.
- Dark background to contrast with neon text.
- Padding for spacing inside the box.
- Rounded corners for a modern look.
- Glowing effect using box-shadow.
- Arranges child elements (time and date) in a vertical column, centered.

```
  .clock-container {
    background-color: #1e1e1e;
    padding: 30px 40px;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
```

---

## `🕒 Digital Time Display (.time)`
- Displays the live time (e.g., 14:32:10) in a big, bold, digital font.
- Neon blue color for a futuristic effect.
- Adds a bit of space below to separate it from the date.

```
  .time {
    font-size: 48px;
    font-weight: bold;
    color: #00d9ff;
    margin-bottom: 10px;
  }
```

---

## `📅 Date Display (.date)`
- Shows the current date below the time (e.g., Sunday, April 20, 2025).
- Smaller and lighter font to keep the focus on the time.
- Uses soft gray color for a subtle look.

```
.date {
  font-size: 20px;
  color: #ccc;
}
```
---

## `🧠 script.js – JavaScript Functionality`

### 🔹 `function updateClock()`
- To dynamically display:
   - Current time in 24-hour format
   - Current time in 12-hour format with AM/PM
   - Current date in a readable format
   - It updates every second using setInterval.

---

## `🕰️ Get the Current Time and Format`

```js
    const now = new Date();
```
- Gets the current date and time using JavaScript's Date object.

```js
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
```
- Retrieves the current hours, minutes, and seconds.
- Uses padStart(2, '0') to ensure two digits (e.g., 04 instead of 4).

---

## 🕓 Update 24-Hour Clock

```js
    document.getElementById('clock24').textContent = `${h}:${m}:${s}`;
```
- Updates the element with id="clock24" to show HH:MM:SS in 24-hour format.

---

## 🕞 Convert to 12-Hour Format with AM/PM

```js
    let h12 = now.getHours();
    const ampm = h12 >= 12 ? 'PM' : 'AM';
    h12 = h12 % 12 || 12;
```
- Converts 24-hour format to 12-hour:
- 13 % 12 = 1, 0 becomes 12
- Determines AM or PM using a ternary operator.

```js
    document.getElementById('clock12').textContent = `${String(h12).padStart(2, '0')}:${m}:${s} ${ampm}`;
```
- Updates the element with id="clock12" to show HH:MM:SS AM/PM in 12-hour format.

---

## `📅 Format and Display the Date`
```js
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
```
- Uses toLocaleDateString() with formatting options to show:
  - Day of week (e.g., Sunday)
  - Day (e.g., 20)
  - Month (e.g., Apr)
  - Year (e.g., 2025)
  ### Result: Sunday, Apr 20, 2025

---


## `🔁 Auto-Update Every Second`

```js
  setInterval(updateClock, 1000);
```
- Calls updateClock() every 1000 milliseconds (1 second) to keep time live.

---

## `updateClock();`
- Initial call to display the clock immediately when the page loads (instead of waiting for 1 second).

---

## ✨ Features

| Feature             | Description                                                 |
|---------------------|-------------------------------------------------------------|
| Real-Time Clock     | Continuously updates every second using `setInterval`       |
| 24-Hour Format      | Displays time in 24-hour format (HH:MM:SS)                  |
| 12-Hour Format      | Also shows 12-hour format with AM/PM indicator              |
| Current Date        | Displays full date in a readable format                     |
| Responsive Design   | Layout adapts to screen sizes using Flexbox                 |
| Stylish UI          | Gradient background, glowing text, and clean card layout    |

---

## 💾 Data Persistence

- This project does **not** require data persistence. It fetches time and date dynamically from the browser's system clock.

---

## 🏁 Conclusion

This Digital Clock app demonstrates how to work with the JavaScript `Date` object, manipulate and update DOM elements in real time, and apply modern CSS for a stylish and responsive design.

By expanding it to include alarm features, themes, or even timezone conversions, you can elevate this project from a simple widget to a full-featured productivity tool!

> 💻 [Check out the full project on GitHub](https://github.com/PoonamChauhan229/Digital-Clock-Js-Projects)
