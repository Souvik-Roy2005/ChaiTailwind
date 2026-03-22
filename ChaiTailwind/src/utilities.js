const spacingScale = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
};

export function applyStyle(el, { property, value }) {
  switch (property) {
    case "p":
      el.style.padding = spacingScale[value] || value + "px";
      break;

    case "m":
      el.style.margin = spacingScale[value] || value + "px";
      break;

    case "bg":
      el.style.backgroundColor = value;
      break;

    case "text":
      el.style.textAlign = value;
      break;

    case "fs":
      el.style.fontSize = value + "px";
      break;

    case "rounded":
      el.style.borderRadius = value + "px";
      break;

    case "border":
      el.style.border = `${value}px solid black`;
      break;

    case "flex":
      el.style.display = "flex";
      break;

    case "jc":
      el.style.justifyContent = value;
      break;

    case "ai":
      el.style.alignItems = value;
      break;

    default:
      console.warn("Unknown chai class:", property);
  }
}