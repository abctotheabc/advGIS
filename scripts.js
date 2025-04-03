function showImage(event, number) {
    event.preventDefault();
    
      const imageIds = [
      '1Line',
      '2Line',
      '3Line',
      '4Line',
      '5Line',
      '6Line',
      '7Line',
      'ALine',
      'BLine',
      'CLine',
      'DLine',
      'ELine',
      'FLine',
      'GLine',
      'JLine',
      'LLine',
      'MLine',
      'NLine',
      'QLine',
      'RLine',
      'SLine',
      'ZLine',
    ];
    
      imageIds.forEach(id => {
      document.getElementById(id).style.display = 'none';
    });
    
    document.getElementById(imageIds[number - 1]).style.display = 'block';
    
    document.getElementById('hidden-images').style.display = 'block';
  
    console.log("You clicked area number: " + number);
  }

  // in the code above nothing has changed from V1 to V2
  // the code below is still really confusing to me but I understand that it's essentially activating the button to show as selected when clicked
  
  document.querySelectorAll('.image-button').forEach(button => {
    button.addEventListener('click', () => {

      document.querySelectorAll('.image-button img').forEach(img => {
        img.classList.remove('active');
      });
  

      const clickedImg = button.querySelector('img');
      if (clickedImg) {
        clickedImg.classList.add('active');
      }
    });
  });