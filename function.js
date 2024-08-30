// JavaScript to control the animation
  const spanElements = document.querySelectorAll('.subdescrip-1-28032-0');
  const typingDuration = 4000; // 4 seconds

  function animateLines(index) {
    const spanElement = spanElements[index];
    spanElement.style.visibility = 'visible'; // Show the text before typing

    const text = spanElement.textContent;
    spanElement.textContent = '';

    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        spanElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingDuration / text.length);
      } else {
        if (index === spanElements.length - 1) {
          // If it's the last line, hide all lines after typing
          setTimeout(() => {
            spanElements.forEach(element => {
              element.style.visibility = 'hidden';
            });
            // Repeat the typing animation for all lines
            setTimeout(() => {
              animateLines(0);
            }, 10); // Wait for 1 second before starting the animation again
          }, typingDuration);
        } else {
          animateLines(index + 1); // Move to the next line
        }
      }
    }
    typeWriter();
  }

  animateLines(0); // Start animating the first line

