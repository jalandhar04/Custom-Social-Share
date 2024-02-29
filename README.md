# Custom Social Share

This repository contains HTML, CSS, and JavaScript code for implementing a custom social share feature in a WordPress website. This feature includes a fixed social share button on the sidebar, which, when clicked, share the page using web share API and if the API is not available, it displays a popup menu with various social sharing options as fallback.

## Demo

It will show at the extream right of your web page just like like the image. When user click on this button, it will show share options to share the current page. It will use the inbuilt web share api by default to complete the sharing-task but in case if the browser does not support the web share api, then it will show some sharing option as fallback to complete the user intention.

![image](https://github.com/jalandhar04/Custom-Social-Share/assets/98611278/81636f07-022f-46da-a8de-e1593c52d078)


## Installation

To use this custom social share feature in your WordPress website, follow these steps:

1. Copy the HTML code to your desired location in your WordPress theme.
2. Add the CSS code to your theme's stylesheet or customize it as needed.
3. Include the JavaScript code in your theme's scripts or enqueue it separately.
4. Ensure that the necessary PHP functions `<?php echo esc_js(get_the_title()); ?>` and `<?php echo esc_js(get_permalink()); ?>` are available in your WordPress environment to dynamically fetch the post title and URL.
5. Or you can also replace the `<?php echo esc_js(get_the_title()); ?>` and `<?php echo esc_js(get_permalink()); ?>` with the appropriate PHP functions to get the title and permalink dynamically.

## Usage

To use this social share feature, simply click on the fixed social share button on the sidebar. If the Web Share API is available, it will open the native share dialog with the post's title and URL. If the Web Share API is not available, it will display custom sharing options for WhatsApp, Facebook, Twitter, and Telegram.

- Clicking the fixed social share button on the sidebar.
- If the Web Share API is available, it will be used to share the page's title and URL.
- If the Web Share API is not available, it will display a popup menu with the custom social sharing options.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## Author

- [Jalandhar Paswan](https://jalandharpaswan.com/)

## Repository

- GitHub: [https://github.com/jalandhar04/Custom-Social-Share.git](https://github.com/jalandhar04/Custom-Social-Share.git)
