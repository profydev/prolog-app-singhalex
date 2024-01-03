import classNames from "classnames";
import styles from "./button.module.scss";

export enum Size {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

export enum Color {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "empty-gray",
  error = "error",
  emptyError = "empty-error",
}

export enum Location {
  leading = "leading",
  trailing = "trailing",
}

type ButtonProps = {
  text?: string;
  size?: Size;
  color?: Color;
  iconPath?: string;
  iconLocation?: Location;
  disabled?: boolean;
};

export function Button({
  text,
  size = Size.medium,
  color = Color.primary,
  iconPath,
  iconLocation = Location.leading,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        styles[iconLocation],
      )}
      disabled={disabled}
      style={{ padding: text ? undefined : "10px" }}
    >
      <span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {iconPath && <img src={iconPath} alt="" />}
        {text}
      </span>
    </button>
  );
}
