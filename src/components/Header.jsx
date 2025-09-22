import Button from './buttons/button'
import { LuUser } from "react-icons/lu";
import { BasicRevealText } from './animations';

const Header = () => {
  return (
    <header className="sticky top-8 z-50 bg-[#f3f3f3]/50 backdrop-blur-md border border-white/30 w-full px-5 py-[4px] rounded-full shadow-sm">
      <div className="flex items-center justify-between">
         {/* Logo Section */}
         <div className="flex items-center">
           <BasicRevealText delay={0}>
             <div className="w-14 h-14 mr-14">
               <img 
                 src="/logo/Icon-107.png" 
                 alt="Logo" 
                 className="w-full h-full object-contain"
               />
             </div>
           </BasicRevealText>
          
          {/* Navigation Links */}
          <BasicRevealText delay={0.1}>
            <nav className="flex items-center space-x-10">
              <Button 
                text="Services" 
                styletype="nav-link"
                onClickHandler={() => console.log("Services clicked")}
              />
              <Button 
                text="Partners" 
                styletype="nav-link"
                onClickHandler={() => console.log("Partners clicked")}
              />
              <Button 
                text="Team" 
                styletype="nav-link"
                onClickHandler={() => console.log("Team clicked")}
              />
              <Button 
                text="Blog" 
                styletype="nav-link"
                onClickHandler={() => console.log("Blog clicked")}
              />
            </nav>
          </BasicRevealText>
        </div>

        {/* Action Buttons */}
        <BasicRevealText delay={0.2}>
          <div className="flex items-center space-x-3">
            <Button 
              text="Register" 
              styletype="secondary-icon"
              onClickHandler={() => console.log("Register clicked")}
            />
            <Button 
              text="Login" 
              styletype="primary-icon"
              icon={<LuUser />}
              onClickHandler={() => console.log("Login clicked")}
            />
          </div>
        </BasicRevealText>
      </div>
    </header>
  )
}

export default Header
