import React from "react";
import { useParams } from "react-router-dom";
import SumsubWebSdk from "@sumsub/websdk-react";

import { SUMSUB_URL } from "../../constants";

const SumSub = () => {
  const { sumSubToken } = useParams();

  return (
    <>
      <SumsubWebSdk
        accessToken={sumSubToken}
        baseUrl={SUMSUB_URL}
        expirationHandler={() => {}}
        config={{
          lang: "en",
          country: "RUS"
        }}
        onMessage={(type: any, payload: any) => {
          console.log("WebSDK onMessage", type, payload);
        }}
        onError={(error: any) => {
          console.error("WebSDK onError", error);
        }}
      />
    </>
  );
};

export default SumSub;
