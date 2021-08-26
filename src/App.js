import { useState } from "react";
import "./styles.css";
import { TemplateCreator } from "./TemplateCreator";
import { TemplateRenderer } from "./TemplateRenderer";

export default function App() {
  const [code, setCode] = useState("console.log('hello')");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TemplateCreator code={code} onChange={setCode} />
      <TemplateRenderer template={code} />
    </div>
  );
}
