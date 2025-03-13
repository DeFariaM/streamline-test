import * as React from "react";
import { Input } from "./ui/input";

interface InputsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}

export default function InputForm({ label, id, error, ...props }: InputsProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <Input id={id} {...props} />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
