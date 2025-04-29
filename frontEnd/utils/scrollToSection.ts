// Tab선택시 해당 섹션으로 스크롤 이동

export const scrollToSection = (sectionId: string) => {
  const yOffset = -70;
  const targetElement = document.getElementById(sectionId);
  if (targetElement) {
    const y =
      targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

