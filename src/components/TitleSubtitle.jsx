import React from "react";

const TitleSubtitle = ({
  title,
  subtitle,
  font,
  align = "center",
  vertical = "top",
}) => {
  // Map props to Tailwind classes
  const fontstyle = font === "font-playfair";

  const horizontalAlign =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  const verticalAlign =
    vertical === "center"
      ? "justify-center"
      : vertical === "bottom"
      ? "justify-end"
      : "justify-start";

  return (
    <div
      className={`flex flex-col justify-center items-center text-center  ${horizontalAlign} ${verticalAlign} mb-6`}
    >
      {title && (
        <h1
          className={`text-4xl md:text-3xl  ${
            font || "font - playfair"
          } sm:text-2xl text-gray-800 font-medium`}
        >
          {title}
        </h1>
      )}
      {subtitle && (
        <p className="text-sm md:text-base  text-gray-500/90  mt-2 max-w-174">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TitleSubtitle;
