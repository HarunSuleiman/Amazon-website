import React from "react";
import { GrSearch } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import classes from "../Header/Header.module.css";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo */}
            <a href="/">
              <img
                src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png"
                alt="Amazon Logo"
              />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliverd to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <GrSearch size={25} />
            {/* icon */}
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAwCAMAAACrB+1LAAAAn1BMVEX///+zGUKwADWzGEHcqbKuAC3y3+P58vOxADjRjJjHbX6xCTuzGEK1I0gKMWHJdITOhZLer7e7QVy5OVYAJlsAKl07TXIAIFgAHVcALmA8Ll2usr8AGFW6F0CfpLRcaYZxepMAElMACU9JWXuBiZ5RYIAxRm4iPWi4ADaTmqxncYzKzdUhN2Xf4OXw8fS7vslBO2UAAE22ACtHSG5YS2+IrZWbAAAC0klEQVRYhd1Xbc+cNhB03983TbLrxQcB34NtgjGQpP3/v60D+V4hn05NMyeNBCeZZWY9awyREzrwL3x7900VDEmJjCdwVqz04hvw3Xfgxr+ANTcPLF7WLTnixYzg1gxCPJvAJNn0TG4wO9/e/1YFQxyCYkEfHBPnUMAxjOAU8EpMIcuHV3UwEJVL2C2zhH0E52Vg5mHJwhx3LywumkpAVtfsWwfVewMZxJvJOTeaLJAJ+jjCRe3iWIhTIQZT6aImTU1swBq7SRJHlfrKy7Im52TfRjmKPwwNxh/6m5kdFm71w591MKRz3zjh0IsI+xbySGxHXKR2EHGu9eiWn6sAzVlLnCdWGvsEtq0VldRbdzKhlW7vvqvCZ0OXDdJra6APNIE+aHJY6Sxa3WGHVlfuGKZZtDWPY2msjskqfuCkkx3ZKrrlpyp8NhSltuth6LwNjOI3D/bbaejaa30rar932EjzoiTiV7SJi6tFmpU1i5AuQR/YRIL6sjpFUjXUlY/hTh3dw0vpqAsvpNgIP9bhNFRWY2HoYuLZ6v5s9fnMrl0PQz/9UIXD0MLZQwAePPHEMSfcGXMEFz/gzgORO/V7QjjNy8giAaklnJcMHlY8kuMS5Pb+2yoY6vblTk77tYH6YYMYMmyjE1fM8T66zfrX6zpAlgLRI09CzaCTTvfcTN3UDB1Y873I9EBwwVC3bDAUYyieYyifhh7DaDh36AORi77WMPORWr0DD31Cao1zxK3SZ/TpA5VPAXnF5FvL6ob2GEZxjxhG4x6dsm2zu72tg6FmWTH3m92goaHJ5AjDCKnu0qEMbO21OhWdWEQLeKKDC2acJDrSJpHFH5SsVC9uL+Dvt2+qUGvV147vnwhTF0kXg6suTC9Gbt0YuDgsKifYtTH3/0XdcefioeiprViXdxdTse6IefEg+ssT8V/305eKX58IU/fhffHz/PcnwvzxRPwD0WGiL4s8++YAAAAASUVORK5CYII="
                alt=""
              />
              <section>
                <option value="">EN</option>
              </section>
            </a>
            {/* Three components */}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* orders */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className={classes.cart}>
              <FiShoppingCart  size={35}/>
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
