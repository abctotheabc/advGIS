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
  
  
  