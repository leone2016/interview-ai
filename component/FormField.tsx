import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldPros<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "field";
}

const FormField = ({
  control,
  name,
  label,
  placeholder,
  type,
}: FormFieldPros<Object>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={(field) => (
        <FormItem>
          <FormLabel className="label"> Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>
            This is your public display name
          </FormDescription>
          <FormMessage/>
        </FormItem>
      )}
    />
  );
};

export default FormField;
