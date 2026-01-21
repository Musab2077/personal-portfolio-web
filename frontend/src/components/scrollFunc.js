const scrollToComponent = (
  componentRef,
  setSideButton,
  isNavigate = false,
  navigate = null
) => {
  isNavigate && navigate("/");
  componentRef.current?.scrollIntoView({ behavior: "smooth" });
  setSideButton(false);
};

const handleSideButton = (setSideButton, sideButtons) => {
  setSideButton(!sideButtons);
};

export { scrollToComponent, handleSideButton };
