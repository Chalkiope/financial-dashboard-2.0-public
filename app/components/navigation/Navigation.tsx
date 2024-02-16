import s from "./Navigation.module.scss";
import { MenuItem } from "../menu-item/MenuItem";

export const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <MenuItem text="Accounts" menuItemId="accounts" /* to="accounts" */ />
      <MenuItem
        text="Asset Summary"
        menuItemId="asset-summary" /* to="accounts" */
      />
      <MenuItem
        text="Mortgage Breakdown"
        menuItemId="mortgage" /* to="accounts" */
      />
      <MenuItem
        text="Bucket Strategy"
        menuItemId="bucket-strategy" /* to="accounts" */
      />
      <MenuItem
        text="Investments"
        menuItemId="investments" /* to="accounts" */
      />
    </nav>
  );
};
