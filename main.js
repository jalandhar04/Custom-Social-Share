/* Sidebar Social Share JS */
document.addEventListener('DOMContentLoaded', function () {
    var shareButton = document.getElementById('share-btn');
    var shareIcon = document.getElementById('share-icon');
    var socialSharing = document.querySelector('.custom-social-sharing');

    shareButton.addEventListener('click', function () {
        if (navigator.share) {
            // Use Web Share API if available
            navigator.share({
                title: '<?php echo esc_js(get_the_title()); ?>',
                url: '<?php echo esc_js(get_permalink()); ?>'
            }).catch(function (error) {
                console.error('Error sharing:', error);
            });
        } else {
            // Toggle the display of custom sharing options
            socialSharing.style.display = socialSharing.style.display === 'block' ? 'none' : 'block';

            // Toggle the share/close icon
            shareIcon.innerHTML = socialSharing.style.display === 'block'
                ? '<svg height="30" width="30" viewBox="0 0 512 512"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>'
                : '<svg width="30" height="30" viewBox="0 0 24 24"><path d="M18,6 L6,12 L18,18" stroke="#212b36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><circle cx="18" cy="6" r="3" fill="#212b36"></circle><circle cx="6" cy="12" r="3" fill="#212b36"></circle><circle cx="18" cy="18" r="3" fill="#212b36"></circle></svg>';
        }
    });
});