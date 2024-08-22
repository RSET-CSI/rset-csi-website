export function smoothScrollTo(anchorId: string): void {
  const element = document.querySelector(anchorId);
  if (element) {
    const offset = 60; // Adjust based on your header height
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
