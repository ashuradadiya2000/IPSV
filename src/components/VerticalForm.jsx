import React from "react";
import { useForm } from "react-hook-form";

const VerticalForm = ({
  defaultValues,
  resolver,
  children,
  onSubmit,
  formClass,
}) => {
  // Form methods
  const methods = useForm({ defaultValues, resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClass} noValidate>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.props.name) {
          return React.cloneElement(child, {
            register,
            key: child.props.name,
            errors,
            control,
          });
        }
        return child;
      })}
    </form>
  );
};

export default VerticalForm;
