import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";

export const TemplateCreator = ({ code, onChange }) => {
  return (
    <div
      style={{
        minHeight: 450,
        textAlign: "left",
        position: "relative"
      }}
    >
      <div style={{ position: "absolute", height: "100%", width: "100%" }}>
        <CodeMirror
          value={code}
          onChange={(instance, change) => {
            onChange(instance.getValue());
          }}
          options={{
            theme: "monokai",
            keyMap: "sublime",
            mode: "html"
          }}
        />
      </div>
    </div>
  );
};
