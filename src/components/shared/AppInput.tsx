import { AppInput as DesignSystemAppInput } from "./design-system/AppInput";
import type { AppInputProps } from "./design-system/AppInput";

export function AppInput(props: AppInputProps) {
  return <DesignSystemAppInput {...props} />;
}

export type { AppInputProps };
export default AppInput;
