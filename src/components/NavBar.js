import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  
  return (
    <nav> {links.map((link, a) => {
        return (<a key={a} href={"#" + link}> {link}</a>
        );
      })}
    </nav>
  );
}
    
   


export default NavBar;
