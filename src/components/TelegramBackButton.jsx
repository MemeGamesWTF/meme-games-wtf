import { useEffect } from "react";

const backButton = window.Telegram?.WebApp?.BackButton;

let isButtonShown = false;

export default function TelegramBackButton({ onClick = () => window.history.back() }) {
  useEffect(() => {
    if (backButton) {
      backButton.show();
      isButtonShown = true;
    }

    return () => {
      isButtonShown = false;
      setTimeout(() => {
        if (!isButtonShown && backButton) {
          backButton.hide();
        }
      }, 10);
    };
  }, []);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.onEvent("backButtonClicked", onClick);
    }
    return () => {
      if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.offEvent("backButtonClicked", onClick);
      }
    };
  }, [onClick]);

  return null;
}
