export type BasicInputProps = {
  type?: "text" | "email" | "password" | "number";
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
};
