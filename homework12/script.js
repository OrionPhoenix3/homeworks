// Zyabrev Vladislav JS

//Homework 12

//Задание 1


const createTooltip = (elem, text) => {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerText = text;
  document.body.append(tooltip);

  const elemCoords = elem.getBoundingClientRect();
  const tooltipTop = elemCoords.top - 10 - tooltip.clientHeight;

  const tooltipLeft = elemCoords.left + elemCoords.width / 2 - tooltip.clientWidth / 2;

  tooltip.style.top = `${tooltipTop}px`;
  tooltip.style.left = `${tooltipLeft}px`;
}

const button = document.getElementById('toggle');

createTooltip(button, 'Hello!');



















