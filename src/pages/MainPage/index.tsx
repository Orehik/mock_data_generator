import { SyntheticEvent, useEffect, useMemo, useState } from "react";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import copyValue from "../../helpers/copyValue";
import { RefreshInn } from "../../components/RefreshInn/RefreshInn";
import { BaseInput } from "../../components/BaseInput/BaseInput";
import { BaseButton } from "../../components/BaseButton/BaseButton";
import { INPUT_LABELS } from "../../constants";
import { password } from "../../helpers/password";
import { transliterator } from "../../helpers/namesTranslit";
import { generateRussianPhoneNumber } from "../../helpers/phoneNumber";
import { femaleNames } from "../../dataNames/femaleNames";
import { generateEmail } from "../../helpers/emailAddress";
import { TAXGenerator } from "../../helpers/TAXGenerator";
import { maleNames } from "../../dataNames/maleNames";
import "../../App.css";

const MainPage = () => {
  const randomIndex = Math.floor(Math.random() * 10000);
  const randomGender = Math.round(Math.random());
  const navigate = useNavigate();

  const getNames = useMemo(() => {
    if (randomGender) {
      return maleNames[randomIndex];
    } else {
      return femaleNames[randomIndex];
    }
  }, [randomGender, randomIndex]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [inn, setInn] = useState("");
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [sumSubToken, setSumSubToken] = useState("");

  const arrayValue = [phoneNumber, email, pass, lastname, firstname, middlename, inn];

  const innGenerator = () => {
    setInn(TAXGenerator());
  };

  const getStarted = () => {
    setPhoneNumber(generateRussianPhoneNumber());
    setEmail(generateEmail());
    setPass(password);
    setLastname(transliterator(getNames.lastname));
    setFirstname(transliterator(getNames.firstname));
    setMiddlename(transliterator(getNames.middlename));
    setInn(TAXGenerator());
  };

  useEffect(() => {
    getStarted();
  }, []);

  return (
    <div className="parent_container">
      <div className="hotkey">
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_GITLAB, "_blank")}>
          GitLab
        </BaseButton>
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_ARGO_CD, "_blank")}>
          ArgoCD
        </BaseButton>
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_PG_ADMIN, "_blank")}>
          pgAdmin
        </BaseButton>
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_KEYCLOAK, "_blank")}>
          KeyCloak
        </BaseButton>
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_CAMUNDA, "_blank")}>
          Camunda
        </BaseButton>
      </div>
      <div className="hotkey">
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_DEV_1, "_blank")}>
          Dev 1
        </BaseButton>
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_DEV_2, "_blank")}>
          Dev 2
        </BaseButton>
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_STABLE, "_blank")}>
          Stable
        </BaseButton>
      </div>
      <div className="hotkey">
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_PROD, "_blank")}>
          Prod
        </BaseButton>
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_REGRESS, "_blank")}>
          REGRESS
        </BaseButton>
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_TABLE, "_blank")}>
          REGRESS TABLE
        </BaseButton>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <BaseButton className="copy_button" onClick={() => window.open(import.meta.env.VITE_SUMSUB, "_blank")}>
          SumSub
        </BaseButton>
        <TextField
          style={{ margin: "30px 0 0", width: "400px" }}
          value={sumSubToken}
          onChange={(e: SyntheticEvent) => setSumSubToken(e.target.value.trim())}
        />
        <BaseButton
          className="copy_button"
          onClick={() => {
            !!sumSubToken.trim() && window.open(`/sumsub/${sumSubToken}`, "_blank", "rel=noopener noreferrer")
          }}
        >
          SumSub SDK
        </BaseButton>
      </div>
      <BaseButton className="box_element" onClick={() => setIsFormVisible((prev) => !prev)}>
        {isFormVisible ? "Hide" : "Client"}
      </BaseButton>
      {isFormVisible && (
        <>
          <BaseButton className="box_element" onClick={() => getStarted()}>
            Generate
          </BaseButton>
          <div className="div_container">
            <div>
              <Box className="box_container">
                <BaseInput label={INPUT_LABELS.phone_number} value={phoneNumber} />
                <BaseButton className="copy_button" onClick={() => copyValue(phoneNumber)}>
                  Copy
                </BaseButton>
              </Box>
              <Box className="box_container">
                <BaseInput label={INPUT_LABELS.email_address} value={email} />
                <BaseButton className="copy_button" onClick={() => copyValue(email)}>
                  Copy
                </BaseButton>
              </Box>
              <Box className="box_container">
                <BaseInput label={INPUT_LABELS.password} value={pass} />
                <BaseButton className="copy_button" onClick={() => copyValue(pass)}>
                  Copy
                </BaseButton>
              </Box>
            </div>
            <div>
              <Box className="box_container">
                <BaseInput label={INPUT_LABELS.lastname} value={lastname} />
                <BaseButton className="copy_button" onClick={() => copyValue(lastname)}>
                  Copy
                </BaseButton>
              </Box>
              <Box className="box_container">
                <BaseInput label={INPUT_LABELS.firstname} value={firstname} />
                <BaseButton className="copy_button" onClick={() => copyValue(firstname)}>
                  Copy
                </BaseButton>
              </Box>
              <Box className="box_container">
                <BaseInput label={INPUT_LABELS.middlename} value={middlename} />
                <BaseButton className="copy_button" onClick={() => copyValue(middlename)}>
                  Copy
                </BaseButton>
              </Box>
            </div>
          </div>
          <div className="inn_box_element">
            <Box className="box_container">
              <BaseInput label={INPUT_LABELS.inn} value={inn} />
              <BaseButton className="copy_button" onClick={() => copyValue(inn)}>
                Copy
              </BaseButton>
            </Box>
          </div>
          <div className="refresh_box_element">
            <RefreshInn onClick={() => innGenerator()} />
          </div>
          <div className="new_box_element">
            <BaseButton onClick={() => copyValue(arrayValue)}>Copy all</BaseButton>
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
