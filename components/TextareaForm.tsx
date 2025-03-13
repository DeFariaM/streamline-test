import * as React from "react";

import { Textarea } from "./ui/textarea";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: string;
}

export default function TextareaForm({
  label,
  id,
  error,
  ...props
}: TextareaProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <Textarea id={id} {...props} />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
