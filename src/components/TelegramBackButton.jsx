import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { MainButton } from "@twa-dev/sdk/react";
import { useNavigate } from "react-router-dom";

const backButton = WebApp.BackButton;

let isButtonShown = false;

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    backButton.show();
    isButtonShown = true;

    return () => {
      isButtonShown = false;
      setTimeout(() => {
        if (!isButtonShown) {
          backButton.hide();
        }
      }, 10);
    };
  }, []);

  useEffect(() => {
    WebApp.onEvent("backButtonClicked", handleBackClick);
    return () => {
      WebApp.offEvent("backButtonClicked", handleBackClick);
    };
  }, [handleBackClick]);

  return null;
};

export default BackButton;
