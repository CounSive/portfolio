$(document).ready(function() {
  const imagePaths = {
    light: {
      skills: [
        'icons/skills/html5_light.svg',
        'icons/skills/css3_light.svg',
        'icons/skills/js.svg',
        'icons/skills/jquery_light.svg'
      ],
      contacts: [
        'icons/social/facebook_straight.svg',
        'icons/social/telegram_straight.svg',
        'icons/social/instagram_straight.svg'
      ],
      about: [
        'icons/about_me/web_development.svg',
        'icons/about_me/mobile_dev.svg',
        'icons/about_me/design.svg'
      ],
      resume:[
        'icons/experience/university.svg',
        'icons/experience/courses.svg',
        'icons/experience/developer.svg',
        'icons/experience/designer.svg'
      ]
      
    },
    dark: {
      skills: [
        'icons/skills/html5.svg',
        'icons/skills/css3.svg',
        'icons/skills/js.svg',
        'icons/skills/jquery.svg'
        
      ],
      contacts: [
        'icons/social/facebook_straight_white.svg',
        'icons/social/telegram_straight_white.svg',
        'icons/social/instagram_straight_white.svg'
      ],
      about: [
        'icons/about_me/web_development_white.svg',
        'icons/about_me/mobile_dev_white.svg',
        'icons/about_me/design_white.svg'
      ],
      resume:[
        'icons/experience/university_white.svg',
        'icons/experience/courses_white.svg',
        'icons/experience/developer_white.svg',
        'icons/experience/designer_white.svg'
      ]
      }
    }
    
  
  
  function changeImages(theme) {
    // Change images in skills section
    const skillsImgElements = document.querySelectorAll('.skills__item-img img');
    skillsImgElements.forEach((imgElement, index) => {
      if ([0, 1, 3].includes(index)) {
        const imagePath = theme === 'dark' ? imagePaths.dark.skills[index] : imagePaths.light.skills[index];
        imgElement.src = imagePath;
      }
    });
  
    // Change images in contacts section
    const contactsImgElements = document.querySelectorAll('.contacts__link img');
    contactsImgElements.forEach((imgElement, index) => {
      if ([0, 1, 2].includes(index)) {
        const imagePath = theme === 'dark' ? imagePaths.dark.contacts[index] : imagePaths.light.contacts[index];
        imgElement.src = imagePath;
      }
    });
  
    // Change images in about section
    const aboutImgElements = document.querySelectorAll('.about__skills-cercle img');
    aboutImgElements.forEach((imgElement, index) => {
      if ([0, 1, 2].includes(index)) {
        const imagePath = theme === 'dark' ? imagePaths.dark.about[index] : imagePaths.light.about[index];
        imgElement.src = imagePath;
      }
    });
  
    // Change images in education section
    const resumeImgElements = document.querySelectorAll('.resume__item-icon img');
    resumeImgElements.forEach((imgElement, index) => {
        if ([0, 1, 2, 3].includes(index)) {
          const imagePath = theme === 'dark' ? imagePaths.dark.resume[index] : imagePaths.light.resume[index];
          imgElement.src = imagePath;
        }
    });

    
    }
  
    function getImagePath(section, theme) {
        if (imagePaths.hasOwnProperty(theme) && imagePaths[theme].hasOwnProperty(section)) {
          const sectionImages = imagePaths[theme][section];
          return sectionImages;
        }
        return null;
  }
  
  function addDarkClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.menu__change-themetoggle span').textContent = 'dark_mode';
      } else {
        document.body.classList.remove('dark');
        document.querySelector('.menu__change-themetoggle span').textContent = 'wb_sunny';
      }
    } catch (err) {}
  }
  
  document.querySelector('.menu__change-themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    addDarkClassToHTML();
    changeImages(localStorage.getItem('theme'));
  });
  
  addDarkClassToHTML();
  changeImages(localStorage.getItem('theme'));
  
})