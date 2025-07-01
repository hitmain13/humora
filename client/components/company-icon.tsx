import clsx from "clsx";

export const CompanyIcon = ({ className }: { className?: string }) => {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F32890c9d769e420f993df6a7c6d5461f%2F146fc03c343146459ddb91594750a5ab?format=webp&width=800"
      alt="Humora"
      className={clsx("w-auto h-12 sm:w-12 sm:h-16", className)}
    />
  );
};
