import { FaPhoneAlt } from "react-icons/fa";

const NavbarTop = () => {
  return (
    <nav className="bg-[#B18B5E] ">
      <div className="text-white max-w-[1770px] mx-auto sm:px-3">
        <div className="flex items-center justify-between">
          {/*----------Phone-------------*/}
          <div className="flex gap-1 items-center">
            <span>
              <FaPhoneAlt className="text-xl" />
            </span>
            <p> +380961381876</p>
          </div>

          {/*----------Location-------------*/}
          <div className="hidden lg:block">
            <p>TAKE CARE OF YOUR Health 25% OFF USE CODE “ DOFIX03 ”</p>
          </div>
          {/*----------English----USD-------Setting-------------*/}
          <div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                {/*-------------Languages-----------*/}
                <li>
                  <details className="z-[999]">
                    <summary className="font-bold text-sm">English</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li className="text-black">
                        <a>Spanish</a>
                      </li>
                      <li className="text-black">
                        <a>Russian</a>
                      </li>
                      <li className="text-black">
                        <a>Portuguese</a>
                      </li>
                    </ul>
                  </details>
                </li>

                {/*-------------Country-----------*/}
                <li>
                  <details className="z-[999]">
                    <summary className="font-bold text-sm">USD</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li className="text-black">
                        <a>EUR</a>
                      </li>
                      <li className="text-black">
                        <a>CHF</a>
                      </li>
                      <li className="text-black">
                        <a>GBP</a>
                      </li>
                      <li className="text-black">
                        <a>KWD</a>
                      </li>
                    </ul>
                  </details>
                </li>

                {/*-------------Setting-----------*/}
                <li>
                  <details className="z-[999]">
                    <summary className="font-bold text-sm">Setting</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li className="text-black">
                        <a>My Profile</a>
                      </li>
                      <li className="text-black">
                        <a>Wishlist</a>
                      </li>
                      <li className="text-black">
                        <a>Cart</a>
                      </li>
                      <li className="text-black">
                        <a>Logout</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
