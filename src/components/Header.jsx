import React from "react";
 const Header=(props)=>{
  const logo = <img   height="56" width="56" src="	https://img.icons8.com/color/512
  /google-keep.png" alt="logo"/> 
  return (
    <div className="header">
    {logo}
    <h3>Bajpai Keep</h3>
    </div>

    )
}
export default Header;
