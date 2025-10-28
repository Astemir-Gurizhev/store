import Link from "next/link";
import cn from "./header.module.scss";
import { BigContainer } from "../big-container/bigContainer";
import { CatalogButton } from "../../ui/catalog-button/catalogButton";
import { Logo } from "../../ui/logo/logo";

export const Header = () => {
  return (
    <header className={cn.header}>
      <BigContainer>
        <div className={cn.row}>
          <div className={cn.left}>
            <CatalogButton />
            <ul className={cn.menu}>
              <li>
                <Link className={cn.link} href={""}>
                  {" "}
                  Работы из наших тканей{" "}
                </Link>
              </li>
              <li>
                <Link className={cn.link} href={""}>
                  {" "}
                  Скидки и акции{" "}
                </Link>
              </li>
            </ul>
          </div>
          <Logo />
          <div className={cn.right}>
            <div className={cn.search}>
                <input
                placeholder="Поиск по сайту"
                type="text"
                className={cn.input}
                />
                <img className={cn.lupa} src="/header/lupa.png" alt="" />
            </div>
            <Link href={""}>
              <svg
                className={cn.profile}
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.74887 4.5C3.74887 2.01472 5.76358 0 8.24887 0C10.7341 0 12.7489 2.01472 12.7489 4.5C12.7489 6.98528 10.7341 9 8.24887 9C5.76358 9 3.74887 6.98528 3.74887 4.5Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.000111933 18.6053C0.0774521 14.1156 3.74085 10.5 8.24887 10.5C12.757 10.5 16.4205 14.1157 16.4976 18.6056C16.5027 18.9034 16.3312 19.176 16.0605 19.3002C13.6816 20.3918 11.0354 21 8.24919 21C5.46273 21 2.8163 20.3917 0.437188 19.2999C0.166518 19.1757 -0.00501739 18.9031 0.000111933 18.6053Z"
                />
              </svg>
            </Link>
            <Link href={""}>
              <svg
                className={cn.cart}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.12549 4.5V5.25H3.13836C2.17881 5.25 1.37411 5.97444 1.27366 6.92872L0.0105033 18.9287C-0.106031 20.0358 0.76201 21 1.8752 21H17.3759C18.4891 21 19.3572 20.0358 19.2406 18.9287L17.9775 6.92872C17.877 5.97444 17.0723 5.25 16.1128 5.25H14.1255V4.5C14.1255 2.01472 12.1108 0 9.62549 0C7.14021 0 5.12549 2.01472 5.12549 4.5ZM9.62549 1.5C7.96864 1.5 6.62549 2.84315 6.62549 4.5V5.25H12.6255V4.5C12.6255 2.84315 11.2823 1.5 9.62549 1.5ZM6.62549 9.75C6.62549 11.4069 7.96864 12.75 9.62549 12.75C11.2823 12.75 12.6255 11.4069 12.6255 9.75V9C12.6255 8.58579 12.9613 8.25 13.3755 8.25C13.7897 8.25 14.1255 8.58579 14.1255 9V9.75C14.1255 12.2353 12.1108 14.25 9.62549 14.25C7.14021 14.25 5.12549 12.2353 5.12549 9.75V9C5.12549 8.58579 5.46128 8.25 5.87549 8.25C6.2897 8.25 6.62549 8.58579 6.62549 9V9.75Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </BigContainer>
    </header>
  );
};
