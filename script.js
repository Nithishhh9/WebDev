const buttons = {
    webDev: document.getElementById('webDev'),
    appDev: document.getElementById('appDev'),
    python: document.getElementById('python'),
    java: document.getElementById('java'),
    details: document.getElementById('details')
  };
  
  const programs = {
    'Web Development': {
      duration: '1 month',
      location: 'Virtual',
      stipend: '-',
      startDate: '25/10/2023'
    },
    'App Development': {
      duration: '1 month',
      location: 'Virtual',
      stipend: '-',
      startDate: '25/10/2023'
    },
    'Python Programming': {
      duration: '1 month',
      location: 'Virtual',
      stipend: '-',
      startDate: '25/10/2023'
    },
    'Java Programming': {
      duration: '1 month',
      location: 'Virtual',
      stipend: '-',
      startDate: '25/10/2023'
    }
  };
  
  for (const id in buttons) {
    buttons[id].addEventListener('click', () => {
      Object.values(buttons).forEach(button => button.style.backgroundColor = '');
      buttons[id].style.backgroundColor = '#4CAF50';
      displayDetails(programs[id]);
    });
  }
  
  function displayDetails(program) {
    buttons.details.style.display = 'block';
    const detailsHTML = `
      <p><strong>Duration:</strong> ${program.duration}</p>
      <p><strong>Location:</strong> ${program.location}</p>
      <p><strong>Stipend:</strong> ${program.stipend}</p>
      <p><strong>Start Date:</strong> ${program.startDate}</p>
    `;
    buttons.details.innerHTML = detailsHTML;
  }
  
  // Show Web Development details initially
  displayDetails(programs['Web Development']);