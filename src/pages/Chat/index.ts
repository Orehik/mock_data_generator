import { memo, useEffect } from "react";

export const Chat = memo(() => {

  useEffect(() => {
    // window.contextProvider = () => ({
    //   CustomerID: { value: clientId, isDisplayable: true }, // id клиента
    // });

    // Функция для передачи контекста
    window.callContext = () => {
      if (window.Microsoft && window.Microsoft.Omnichannel && window.Microsoft.Omnichannel.LiveChatWidget) {
        window.Microsoft.Omnichannel.LiveChatWidget.SDK.setContextProvider(window.contextProvider);
      }
    };

    // Функция отвечающая за костомизацию чата дока с параметрами для костамизации
    window.lcw = () => {
      return {};
    };

    if (!document.getElementById("Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window")) {
      const script = document.createElement("script");
      script.id = "Microsoft_Omnichannel_LCWidget";
      script.src = "https://oc-cdn-ocprod.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js";
      script.setAttribute("data-app-id", "5f86639c-77d4-493d-b979-8db9e706acce");
      script.setAttribute("data-lcw-version", "prod");
      script.setAttribute("data-org-id", "3e0cec3d-16a9-ef11-8a64-6045bd00391e");
      script.setAttribute(
        "data-org-url",
        "https://m-3e0cec3d-16a9-ef11-8a64-6045bd00391e.us.omnichannelengagementhub.com"
      );
      script.setAttribute("data-customization-callback", "lcw");
      document.body.appendChild(script);
    }

    return () => {
      document.querySelectorAll("#Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window").forEach((node) => node.remove());
    };
  }, []);

  return null;
});
