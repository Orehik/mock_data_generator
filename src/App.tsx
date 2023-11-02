import './App.css'
import { useMemo, useState } from "react";
import { BaseInput } from "./components/BaseInput/BaseInput";
import { INPUT_LABELS } from "./constants";
import { password } from "./helpers/password";
import { transliterator } from "./helpers/namesTranslit";
import { generateRussianPhoneNumber } from "./helpers/phoneNumber";
import { femaleNames } from "./dataNames/femaleNames";
import { generateEmail } from "./helpers/emailAddress";
import { maleNames } from "./dataNames/maleNames";
import { TAXGenerator } from "./helpers/TAXGenerator";
import { BaseButton } from "./components/Button/Button";

function App() {
  const { phone_number, firstname, lastname, middlename, email_address, inn } = INPUT_LABELS;
  const randomIndex = Math.floor(Math.random() * 10000);
  const randomGender = Math.round(Math.random());

  const getNames = useMemo(() => {
    if (randomGender) {
      return maleNames[randomIndex]
    } else {
      return femaleNames[randomIndex]
    }
  }, [randomGender, randomIndex])

  const [phoneNumber, setPhoneNumber] = useState(generateRussianPhoneNumber());
  const [email, setEmail] = useState(generateEmail());
  const [pass, setPass] = useState(password);
  const [lastnames, setLastnames] = useState(transliterator(getNames.lastname));
  const [firstnames, setFirstnames] = useState(transliterator(getNames.firstname));
  const [middlenames, setMiddlenames] = useState(transliterator(getNames.middlename));
  const [inns, setInns] = useState(TAXGenerator());

  const getStarted = () => {
    setPhoneNumber(generateRussianPhoneNumber());
    setEmail(generateEmail());
    setLastnames(transliterator(getNames.lastname));
    setFirstnames(transliterator(getNames.firstname));
    setMiddlenames(transliterator(getNames.middlename));
    setInns(TAXGenerator());
  }

  return (
    <div>
      <BaseButton onClick={() => getStarted()}/>
      <BaseInput label={phone_number}
                 value={phoneNumber}/>
      <BaseInput label={email_address}
                 value={email}/>
      <BaseInput label={INPUT_LABELS.password}
                 value={pass}/>
      <BaseInput label={lastname}
                 value={lastnames}/>
      <BaseInput label={firstname}
                 value={firstnames}/>
      <BaseInput label={middlename}
                 value={middlenames}/>
      <BaseInput label={inn}
                 value={inns}/>
    </div>
  )
}

export default App
