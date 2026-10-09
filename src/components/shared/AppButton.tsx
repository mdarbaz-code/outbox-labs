import { AppButton as DesignSystemAppButton } from "./design-system/AppButton";
import type { AppButtonProps } from "./design-system/AppButton";

export function AppButton(props: AppButtonProps) {
  return <DesignSystemAppButton {...props} />;
}

export type { AppButtonProps };
export default AppButton;
