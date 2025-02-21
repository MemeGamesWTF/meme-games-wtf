import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { useNavigate, useLocation } from "react-router-dom";

const backButton = WebApp.BackButton;

let isButtonShown = false;

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.state?.from) {
      navigate(location.state.from, { replace: true });
    } else {
      navigate("/", { replace: true }); // Fallback route
    }
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
