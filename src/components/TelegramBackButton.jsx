import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { useNavigate } from "react-router-dom";

const backButton = WebApp.BackButton;

let isButtonShown = false;

const BackButton = ({
  onClick = () => {
    const navigate = useNavigate();
    // window.history.back();
    navigate(-1);
  },
}) => {
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
    WebApp.onEvent("backButtonClicked", onClick);
    return () => {
      WebApp.offEvent("backButtonClicked", onClick);
    };
  }, [onClick]);

  return null;
};

export default BackButton;
