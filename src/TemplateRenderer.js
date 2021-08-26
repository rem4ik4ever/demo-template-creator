import { render, html } from "lit-html";
import { useRef } from "react";
export const TemplateRenderer = ({ template }) => {
  const containerRef = useRef();
  return (
    <div
      ref={containerRef}
      style={{ padding: 8, border: "1px solid #ccc", minHeight: 450 }}
    >
      {containerRef.current && (
        <div>{render(html`${template}`, containerRef.current)}</div>
      )}
    </div>
  );
};
