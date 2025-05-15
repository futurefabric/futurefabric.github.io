document.addEventListener("DOMContentLoaded", function () {
  // Check for URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id') !== null ? parseInt(urlParams.get('id')) : 1;
  const lastID = 6;
  const breadcrumbProjectName = document.querySelector(".breadcrumb-project-name");
  const comparisonCardHeader = document.querySelector(".comparison-card__header");
  const prevButton = document.querySelector(".pager-previous");
  const nextButton = document.querySelector(".pager-next");
  const comparisonCardHeroImg = document.querySelector(".comparison-card__block--hero-img");
  
  comparisonCardHeroImg.classList.add(`bg-${projectId}`);
  breadcrumbProjectName.textContent = `Project ${projectId}`;
  comparisonCardHeader.textContent = `Project ${projectId}`;

  // update prev next button hrefs to point to the next or previous ID
  if (projectId > 1) {
    prevButton.href = `pdp.html?id=${projectId - 1}`;
    prevButton.style.opacity = 1;
  } else {
    prevButton.href = `#`;
    prevButton.style.opacity = 0.25;
  }

  if (projectId < lastID) {
    nextButton.href = `pdp.html?id=${projectId + 1}`;
    nextButton.style.opacity = 1;
  } else {
    nextButton.href = `#`;
    nextButton.style.opacity = 0.25;
  }
});