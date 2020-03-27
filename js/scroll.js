const body = document.querySelector('body');

// OnScroll event handler
const onScroll = () => {

    // Get scroll value
    const scroll = document.documentElement.scrollTop;

    // If scroll value is more than 0 - add class
    if (scroll > 0) {
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled")
    }
};

// Use either onScroll or throttledOnScroll
window.addEventListener('scroll', onScroll);
