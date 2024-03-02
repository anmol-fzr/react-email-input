import React from "react";
import { useState } from "react";
import { Input } from "../../src/";

const tlds = ["google", "buildup"];
const mails = ["google", "buildup"];

const SimpleInput = (args: any) => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-200 to-red-200 w-[1000px] flex flex-col items-center justify-center">
      <div className="flex w-full gap-4">
        <Input
          value={inputVal}
          onChange={(val) => setInputVal(val)}
          {...{ tlds, mails }}
          {...args}
        />
      </div>
    </div>
  );
};

export default SimpleInput;
