import { Theme } from "./themes"
import get from "lodash/get"

type StyledProps = {
  theme: Theme
}
export const themeProp = (key: never) => (props: StyledProps) =>
  get(props.theme, key)

export const theme =
  <Result>(fn: (theme: Theme) => Result) =>
  (props: StyledProps) =>
    fn(props.theme)
