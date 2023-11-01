import './App.css'
import { BaseInput } from "./components/BaseInput/BaseInput";
import { INPUT_LABELS } from "./constants";
import { password } from "./helpers/password";
import { transliterator } from "./helpers/namesTranslit";
import { generateRussianPhoneNumber } from "./helpers/phoneNumber";
import { femaleNames } from "./dataNames/femaleNames";
import { generateEmail } from "./helpers/emailAddress";
import { useMemo } from "react";
import { maleNames } from "./dataNames/maleNames";
import { generateINN } from "./helpers/TAXGenerator";

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

  return (
    <div>
      <BaseInput label={phone_number} value={generateRussianPhoneNumber()}/>
      <BaseInput label={lastname} value={transliterator(getNames.lastname)}/>
      <BaseInput label={firstname} value={transliterator(getNames.firstname)}/>
      <BaseInput label={middlename} value={transliterator(getNames.middlename)}/>
      <BaseInput label={INPUT_LABELS.password} value={password}/>
      <BaseInput label={email_address} value={generateEmail()}/>
      <BaseInput label={inn} value={generateINN()}/>
    </div>
  )
}

export default App
