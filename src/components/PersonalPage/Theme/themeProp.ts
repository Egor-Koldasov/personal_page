import { Theme } from "./themes"
import { Paths } from "../../../lib/types/Path";
import get from 'lodash/get';

type StyledProps = {
  theme: Theme,
}
export const themeProp = (key: Paths<Theme>) => (props: StyledProps) => get(props.theme, key);