// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", () => {
    // Declare AOS if it's not already available globally
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        once: false,
        offset: 100,
      })
    } else {
      console.warn("AOS is not defined. Make sure to include the AOS library.")
    }
  
    // Countdown Timer
    const countdownDate = new Date("June 1, 2025 00:00:00").getTime()
  
    function updateCountdown() {
      const now = new Date().getTime()
      const distance = countdownDate - now
  
      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
      // Display the result
      document.getElementById("days").innerHTML = days.toString().padStart(2, "0")
      document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0")
      document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0")
      document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0")
  
      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdownInterval)
        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML = "00"
        document.getElementById("minutes").innerHTML = "00"
        document.getElementById("seconds").innerHTML = "00"
      }
    }
  
    // Update the countdown every second
    updateCountdown()
    const countdownInterval = setInterval(updateCountdown, 1000)
  
    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("visible")
      } else {
        backToTopButton.classList.remove("visible")
      }
    })
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  })
  
