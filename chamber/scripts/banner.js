document.addEventListener('DOMContentLoaded', function() {
    const currentDay = new Date().getDay();
    if (currentDay >= 1 && currentDay <= 3) {
      const banner = document.getElementById('banner');
      const closeBannerButton = document.getElementById('closeBanner');
  
      banner.style.display = 'block';
  
      closeBannerButton.addEventListener('click', function() {
        banner.style.display = 'none';
      });
    }
});
