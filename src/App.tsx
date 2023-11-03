import { useEffect, useMemo, useState } from "react";

import { BaseInput } from "./components/BaseInput/BaseInput";
import { BaseButton } from "./components/Button/Button";
import { INPUT_LABELS } from "./constants";
import { password } from "./helpers/password";
import { transliterator } from "./helpers/namesTranslit";
import { generateRussianPhoneNumber } from "./helpers/phoneNumber";
import { femaleNames } from "./dataNames/femaleNames";
import { generateEmail } from "./helpers/emailAddress";
import { maleNames } from "./dataNames/maleNames";
import { TAXGenerator } from "./helpers/TAXGenerator";
import './App.css'

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
      <BaseButton className="box_element" onClick={() => getStarted()}/>
      <div className="box_container">
        <div>
          <BaseInput label={INPUT_LABELS.phone_number}
                     value={phoneNumber}/>
          <BaseInput label={INPUT_LABELS.email_address}
                     value={email}/>
          <BaseInput label={INPUT_LABELS.password}
                     value={pass}/>
        </div>
        <div>
          <BaseInput label={INPUT_LABELS.lastname}
                     value={lastname}/>
          <BaseInput label={INPUT_LABELS.firstname}
                     value={firstname}/>
          <BaseInput label={INPUT_LABELS.middlename}
                     value={middlename}/>
        </div>
      </div>
      <BaseInput className="box_element" label={INPUT_LABELS.inn}
                 value={inn}/>
    </div>
  )
}

export default App
