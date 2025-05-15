document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".pager-previous");
  const nextButton = document.querySelector(".pager-next");
  const comparisonCards = document.querySelector(".comparison-cards");
  const comparisonCard = document.querySelector(".comparison-card");

  const scrollSnapWidth = () => {
    return comparisonCard.offsetWidth;
  };

  const scrollPrevious = () => {
    comparisonCards.scrollBy({
      left: -scrollSnapWidth(),
      behavior: "smooth"
    });
  };

  const scrollNext = () => {
    comparisonCards.scrollBy({
      left: scrollSnapWidth(),
      behavior: "smooth"
    });
  };

  if (prevButton && comparisonCards) {
    prevButton.addEventListener("click", scrollPrevious);
  }

  if (nextButton && comparisonCards) {
    nextButton.addEventListener("click", scrollNext);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      scrollPrevious();
    } else if (event.key === "ArrowRight") {
      scrollNext();
    }
  });

  // Equalize .comparison-card__block heights across cards
  function equalizeBlockHeights() {
    const cards = document.querySelectorAll('.comparison-card');
    if (cards.length === 0) return;

    const blockCount = Math.max(...[...cards].map(card =>
      card.querySelectorAll('.comparison-card__block').length
    ));

    for (let i = 0; i < blockCount; i++) {
      const blocksAtIndex = [];

      cards.forEach(card => {
        const blocks = card.querySelectorAll('.comparison-card__block');
        const block = blocks[i];
        if (block) {
          block.style.height = 'auto'; // reset
          blocksAtIndex.push(block);
        }
      });

      const tallest = Math.max(...blocksAtIndex.map(b => b.offsetHeight));

      blocksAtIndex.forEach(b => {
        b.style.height = `${tallest}px`;
      });
    }
  }

  // Run once after DOM is ready
  equalizeBlockHeights();
  // Re-run on window resize
  window.addEventListener('resize', equalizeBlockHeights);
});
