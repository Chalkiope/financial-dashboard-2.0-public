import s from './Navigation.module.scss'
import { MenuItem } from '../menu-item/MenuItem'
import Accounts from '../../assets/img/accounts-icon.svg'
import Assets from '../../assets/img/assets-icon.svg'
import Mortgage from '../../assets/img/mortgage-icon.svg'
import Bucket from '../../assets/img/bucket-icon.svg'
import Stocks from '../../assets/img/stocks-icon.svg'

export const Navigation = ({ open }: { open: boolean }) => {
  return (
    <nav className={`${s.navigation} ${open ? '' : s.closed}`}>
      <MenuItem
        text="Accounts"
        menuItemId="#accounts"
        icon={<Accounts />}
        collapsed={!open}
      />
      <MenuItem
        text="Asset Summary"
        menuItemId="#asset-summary"
        icon={<Assets />}
        collapsed={!open}
      />
      <MenuItem
        text="Mortgage Breakdown"
        menuItemId="#mortgage"
        icon={<Mortgage />}
        collapsed={!open}
      />
      <MenuItem
        text="Bucket Strategy"
        menuItemId="#bucket-strategy"
        icon={<Bucket />}
        collapsed={!open}
      />
      <MenuItem
        text="Investments"
        menuItemId="#investments"
        icon={<Stocks />}
        collapsed={!open}
      />
    </nav>
  )
}
