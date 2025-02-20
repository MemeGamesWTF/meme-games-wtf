import { useEffect } from "react";
import  WebApp  from "@twa-dev/sdk";

const backButton = WebApp.BackButton;

let isButtonShown = false;

const BackButton = ({
  onClick = () => {
    window.history.back();
  },
}) => {
  useEffect(() => {
    backButton.show();
    isButtonShown = true;
    return () => {
      isButtonShown = false;
      // Мы ждем 10мс на случай, если на следующем экране тоже нужен BackButton.
      // Если через это время isButtonShown не стал true, значит следующему экрану кнопка не нужна и мы её прячем
      setTimeout(() => {
        if (!isButtonShown) {
          backButton.hide();
        }
      }, 10);
    };
  }, []);

  useEffect(() => {
    WebApp.onEvent("backButtonClicked", onClick);
    return () => {
      WebApp.offEvent("backButtonClicked", onClick);
    };
  }, [onClick]);

  return null;
};

export default BackButton;
