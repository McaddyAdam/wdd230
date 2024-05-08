let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount.toString());
document.getElementById('visit-counter').textContent = visitCount.toString();