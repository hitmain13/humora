import clsx from "clsx";

export const CompanyIcon = ({ className }: { className?: string }) => {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F32890c9d769e420f993df6a7c6d5461f%2Ff108ef6efd08483494cb6f873bacc205?format=webp&width=800"
      alt="Humora"
      className={clsx("w-auto h-12 sm:h-16 ml-4 my-2", className)}
    />
  );
};
