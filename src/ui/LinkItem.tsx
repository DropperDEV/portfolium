import { NavLink } from "react-router-dom";

interface ILinkItem{
  text: string;
  to: string;
}
function LinkItem({text,to}:ILinkItem) {
  return (
    <li>
      <NavLink to={to}>{text}</NavLink>
    </li>
  );
}

export default LinkItem;
