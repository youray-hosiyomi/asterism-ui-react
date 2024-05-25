import { ComponentProps, useEffect, useState } from "react";

export type ButtonProps = Pick<ComponentProps<"button">, "children" | "onClick">;

export const Button = (props: ButtonProps) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <button
      {...props}
      className="tw-bg-blue-500 tw-hover:bg-blue-600 tw-px-5 tw-py-2 tw-rounded-lg tw-text-sm tw-text-white "
      onClick={(ev) => {
        setState((state) => !state);
        props.onClick && props.onClick(ev);
      }}
    />
  );
};
