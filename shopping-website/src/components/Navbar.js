import React from 'react'
import Link from "next/link";
const Navbar = () => {
  return (
    <div classname = "hidden lg:block">
        <div classname ="container">
            <div classname ="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link classname ="navbar__link realtive" href ="#">HOME</Link>      
            </div>
        </div>
    </div>
  )
}
export default Navbar
