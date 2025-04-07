function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');

  // 24hr
  document.getElementById('clock24').textContent = `${h}:${m}:${s}`;

  // 12hr
  let h12 = now.getHours();
  const ampm = h12 >= 12 ? 'PM' : 'AM';
  h12 = h12 % 12 || 12;
  document.getElementById('clock12').textContent = `${String(h12).padStart(2, '0')}:${m}:${s} ${ampm}`;

  // Date
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();
