export function smoothScrollTo(anchorId: string): void {
  const element = document.querySelector(anchorId);
  if (element) {
    const offset = 60;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
