import { twMerge } from "tailwind-merge";
import React, {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ReactNode,
  useRef,
  useState,
} from "react";
import "./index.css";

interface InputProps extends Omit<ComponentPropsWithRef<"input">, "onChange"> {
  value: string;
  onChange: (val: string) => void;
  tlds?: string[];
  mails?: string[];
}

const defaultTlds = ["com", "net", "org", "in", "uk"];
const defaultMails = ["gmail", "baidu", "yahoo", "hotmail"];
// const styles = "";

const Input = ({ className, tlds, mails, ...props }: InputProps) => {
  tlds ??= defaultTlds;
  mails ??= defaultMails;

  const [value, onChange] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const showMails = value.charAt(value.length - 1) === "@";
  const showTlds = value.charAt(value.length - 1) === ".";

  const afterChoosing = () => inputRef.current?.focus();

  const onChoose = (val: string) => {
    onChange(value + val);
    afterChoosing();
  };

  return (
    <div className="h-screen w-[1000px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-start">
        <input
          ref={inputRef}
          type="email"
          inputMode="email"
          {...props}
          className={twMerge("border p-2 px-4 rounded-md !w-60", className)}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {showMails && (
          <Listbox>
            {mails.map((mail) => (
              <ListButton key={mail} onClick={() => onChoose(mail)}>
                {mail}
              </ListButton>
            ))}
          </Listbox>
        )}
        {showTlds && (
          <Listbox>
            {tlds.map((tld) => (
              <ListButton key={tld} onClick={() => onChoose(tld)}>
                {tld}
              </ListButton>
            ))}
          </Listbox>
        )}
      </div>
    </div>
  );
};

const Listbox = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col w-full max-w-xs mt-2 bg-red-300 p-1 rounded-md">{children}</div>
);

type ListButtonProps = ComponentPropsWithoutRef<"button">;

const ListButton = ({ onClick, children, ...props }: ListButtonProps) => {
  return (
    <button
      className="w-full p-2 hover:bg-indigo-400 rounded-lg"
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Input;
