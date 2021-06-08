const toggle = (elementId) => {
  const element = document.getElementById(elementId);

  element.classList.toggle(elementId + '--open');

//   if (!element.classList.contains(elementId + '--open')) {
//     element.classList.add(elementId + '--open');
//   } else {
//     element.classList.remove(elementId + '--open');
//   }

};

const toggleNavigation = () => {
  toggle('nav');
  toggle('hamburger-button');
};
