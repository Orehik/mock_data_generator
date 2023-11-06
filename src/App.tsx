import { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";

import copyValue from "./helpers/copyValue";
import { RefreshInn } from "./components/RefreshInn/RefreshInn";
import { BaseInput } from "./components/BaseInput/BaseInput";
import { BaseButton } from "./components/BaseButton/BaseButton";
import { INPUT_LABELS } from "./constants";
import { password } from "./helpers/password";
import { transliterator } from "./helpers/namesTranslit";
import { generateRussianPhoneNumber } from "./helpers/phoneNumber";
import { femaleNames } from "./dataNames/femaleNames";
import { generateEmail } from "./helpers/emailAddress";
import { maleNames } from "./dataNames/maleNames";
import { TAXGenerator } from "./helpers/TAXGenerator";
import './App.css';


function App() {
  const randomIndex = Math.floor(Math.random() * 10000);
  const randomGender = Math.round(Math.random());

  const getNames = useMemo(() => {
    if (randomGender) {
      return maleNames[randomIndex]
    } else {
      return femaleNames[randomIndex]
    }
  }, [randomGender, randomIndex])

  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [inn, setInn] = useState('');

  const arrayValue = [phoneNumber, email, pass, lastname, firstname, middlename, inn];

  const innGenerator = () => {
    setInn(TAXGenerator());
  }

  const getStarted = () => {
    setPhoneNumber(generateRussianPhoneNumber());
    setEmail(generateEmail());
    setPass(password);
    setLastname(transliterator(getNames.lastname));
    setFirstname(transliterator(getNames.firstname));
    setMiddlename(transliterator(getNames.middlename));
    setInn(TAXGenerator());
  }

  useEffect(() => {
    getStarted()
  }, [])

  return (
    <div className="parent_container">
      <BaseButton className="box_element" onClick={() => getStarted()}>Сгенерировать</BaseButton>
      <div className="div_container">
        <div>
          <Box className="box_container">
            <BaseInput
              label={INPUT_LABELS.phone_number}
              value={phoneNumber}
            />
            <BaseButton className="copy_button" onClick={() => copyValue(phoneNumber)}>Копировать</BaseButton>
          </Box>
          <Box className="box_container">
            <BaseInput
              label={INPUT_LABELS.email_address}
              value={email}
            />
            <BaseButton className="copy_button" onClick={() => copyValue(email)}>Копировать</BaseButton>
          </Box>
          <Box className="box_container">
            <BaseInput
              label={INPUT_LABELS.password}
              value={pass}
            />
            <BaseButton className="copy_button" onClick={() => copyValue(pass)}>Копировать</BaseButton>
          </Box>
        </div>
        <div>
          <Box className="box_container">
            <BaseInput
              label={INPUT_LABELS.lastname}
              value={lastname}
            />
            <BaseButton className="copy_button" onClick={() => copyValue(lastname)}>Копировать</BaseButton>
          </Box>
          <Box className="box_container">
            <BaseInput
              label={INPUT_LABELS.firstname}
              value={firstname}
            />
            <BaseButton className="copy_button" onClick={() => copyValue(firstname)}>Копировать</BaseButton>
          </Box>
          <Box className="box_container">
            <BaseInput
              label={INPUT_LABELS.middlename}
              value={middlename}
            />
            <BaseButton className="copy_button" onClick={() => copyValue(middlename)}>Копировать</BaseButton>
          </Box>
        </div>
      </div>
      <div className="box_element">
        <RefreshInn onClick={() => innGenerator()}/>
        <Box className="box_container">
          <BaseInput
            label={INPUT_LABELS.inn}
            value={inn}
          />
          <BaseButton className="copy_button" onClick={() => copyValue(inn)}>Копировать</BaseButton>
          <BaseButton className="copy_button" onClick={() => copyValue(arrayValue)}>Копировать всё</BaseButton>
        </Box>
      </div>
    </div>
  )
}

export default App
