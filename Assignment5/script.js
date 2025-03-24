// Array of image URLs
const images = [
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=Image+1",
    "https://media.istockphoto.com/id/2171005642/photo/fun-https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg-time-with-grandpa-on-the-porch-swing.jpg?s=1024x1024&w=is&k=20&c=Ml_8_DHPlc1ph7p_fFuSDttLNoRt_6zPjVvMOBV4Zgs=Image+2",
    "https://encrypted-tbn0.gstatic.com/https://images.pexels.com/photos/15006243/pexels-photo-15006243.jpeg?cs=srgb&dl=pexels-adrian-akash-15006243.jpg&fm=jpg?q=tbn:ANd9GcSQ1ipeQbFseUM_GzxwMoQj45w9HtAnu4eu5w&s=Image+3",
    "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1988&auto=https://d1rig8ldkblbsy.cloudfront.net/app/uploads/2018/01/10150148/iStock-5184662221.jpg&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=Image+4"
  ];
  
  // Variables to keep track of the current image index
  let currentIndex = 0;
  
  // Get the slider images container
  const sliderImages = document.getElementById('sliderImages');
  
  // Function to display the images in the slider
  function displayImages() {
    // Clear the existing images
    sliderImages.innerHTML = '';
  
    // Loop through the images array and add each image to the container
    images.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = `Image ${index + 1}`;
      sliderImages.appendChild(img);
    });
  
    // Show the image at the current index
    updateSliderPosition();
  }
  
  // Function to update the position of the slider
  function updateSliderPosition() {
    // Calculate the offset to display the correct image
    const offset = -currentIndex * 100;
    sliderImages.style.transform = `translateX(${offset}%)`;
  }
  
  // Function to move to the next or previous image
  function moveSlide(direction) {
    // Update the current index
    currentIndex += direction;
  
    // Check if we need to loop back to the first or last image
    if (currentIndex < 0) {
      currentIndex = images.length - 1; // Go to the last image
    } else if (currentIndex >= images.length) {
      currentIndex = 0; // Go to the first image
    }
  
    // Update the slider position
    updateSliderPosition();
  }
  
  // Initialize the slider
  displayImages();
  