import { twMerge } from "tailwind-merge";
import React, {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  useRef,
  useState,
} from "react";
import "./index.css";

interface InputProps extends Omit<ComponentPropsWithRef<"input">, "onChange"> {
  value: string;
  onChange: (val: string) => void;
  tlds?: string[];
  mails?: string[];
  style?: CSSProperties;
  buttonClassName?: string;
  buttonStyle?: CSSProperties;
  listClassName?: string;
  listStyle?: CSSProperties;
}

const defaultTlds = ["com", "net", "org", "in", "uk"];
const defaultMails = ["gmail", "baidu", "yahoo", "hotmail"];

const Input = ({
  className,
  listStyle,
  listClassName,
  buttonStyle,
  buttonClassName,
  tlds,
  mails,
  ...props
}: InputProps) => {
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
          <Listbox className={listClassName} style={listStyle}>
            {mails.map((mail) => (
              <ListButton
                key={mail}
                className={buttonClassName}
                style={buttonStyle}
                onClick={() => onChoose(mail)}
              >
                {mail}
              </ListButton>
            ))}
          </Listbox>
        )}
        {showTlds && (
          <Listbox className={listClassName} style={listStyle}>
            {tlds.map((tld) => (
              <ListButton
                key={tld}
                className={buttonClassName}
                style={buttonStyle}
                onClick={() => onChoose(tld)}
              >
                {tld}
              </ListButton>
            ))}
          </Listbox>
        )}
      </div>
    </div>
  );
};

type ListboxProps = ComponentPropsWithoutRef<"div">;

const Listbox = ({ children, className, ...props }: ListboxProps) => (
  <div
    {...props}
    className={twMerge("flex flex-col w-full max-w-xs mt-2 bg-red-300 p-1 rounded-md", className)}
  >
    {children}
  </div>
);

type ListButtonProps = ComponentPropsWithoutRef<"button">;

const ListButton = ({ className, children, ...props }: ListButtonProps) => {
  return (
    <button
      className={twMerge("w-full p-2 hover:bg-indigo-400 rounded-lg", className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Input;
