import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
   "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

type TTypeLabel = {
   className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ className, ...props }: TTypeLabel) => {
   return <label className={cn(labelVariants(), className)} {...props}></label>;
};

export { Label };
