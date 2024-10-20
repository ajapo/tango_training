"use client";

import { useState } from "react";

type Tango = {
  tangoId: string;
  tangoMoto: string;
  tangoYaku: string;
};

let tango1: Tango = {
  tangoId: "1",
  tangoMoto: "A",
  tangoYaku: "えー",
};
let tango2: Tango = {
  tangoId: "2",
  tangoMoto: "B",
  tangoYaku: "びー",
};
let tango3: Tango = {
  tangoId: "3",
  tangoMoto: "C",
  tangoYaku: "しー",
};

type TangoAreaProps = {
  buttonId: string;
  textId: string;
  tango: Tango;
  onSeikai: () => void;
};

type SeikaiAreaProps = {
  displayFlg: boolean;
  seikaiFlg: boolean;
};

export const SeikaiArea = (props: SeikaiAreaProps) => {
  const { displayFlg, seikaiFlg } = props;
  console.log("displayFlg:", displayFlg, "seikaiFlg:", seikaiFlg);
  return (
    <div>{displayFlg && (seikaiFlg ? <h2>正解</h2> : <h2>間違い</h2>)}</div>
  );
};

export const TangoArea = (props: TangoAreaProps) => {
  const [kekkaDisplayFlg, setKekkaDisplayFlg] = useState(false);
  const [seikaiFlg, setSeikaiFlg] = useState(false);
  const { buttonId, textId, tango, onSeikai } = props;
  const chkKaitou = () => {
    const inputElement = document.getElementById(textId) as HTMLInputElement;
    const inputValue = inputElement.value;
    inputElement.disabled = true;
    const btnElement = document.getElementById(buttonId) as HTMLInputElement;
    btnElement.disabled = true;
    setKekkaDisplayFlg(true);
    if (tango.tangoYaku === inputValue) {
      alert("OK");
      setSeikaiFlg(true);
      onSeikai();
    } else {
      alert("NG");
      setSeikaiFlg(false);
    }
  };

  return (
    <div>
      <p>{tango.tangoMoto}</p>
      <input type="text" id={textId} />
      <button id={buttonId} onClick={() => chkKaitou()}>
        確認
      </button>
      <SeikaiArea displayFlg={kekkaDisplayFlg} seikaiFlg={seikaiFlg} />
    </div>
  );
};

const TangoInput = () => {
  const [seikaiSu, setSeikaiSu] = useState(0);

  const handleSeikai = () => {
    setSeikaiSu(seikaiSu + 1);
  };

  return (
    <div>
      <h2>正解数: {seikaiSu}</h2>
      <TangoArea
        buttonId="btn1"
        textId="txt1"
        tango={tango1}
        onSeikai={handleSeikai}
      />
      <TangoArea
        buttonId="btn2"
        textId="txt2"
        tango={tango2}
        onSeikai={handleSeikai}
      />
      <TangoArea
        buttonId="btn3"
        textId="txt3"
        tango={tango3}
        onSeikai={handleSeikai}
      />
    </div>
  );
};

export default TangoInput;
