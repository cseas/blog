import { Color } from "hazel-ui";

interface DividerProps {
  color?: string;
  height?: `${number}px`;
  style?: any;
}

export function Divider({
  color = Color.gray7,
  height = "1px",
  style,
}: DividerProps) {
  return (
    <div style={{ backgroundColor: color, height, width: "100%", ...style }} />
  );
}
