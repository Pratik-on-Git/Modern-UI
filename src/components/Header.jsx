import Button from './buttons/button'
import { LuUser } from "react-icons/lu";

const Header = () => {
  return (
    <header className="bg-gray-100 w-full px-5 py-[4px] rounded-full">
      <div className="flex items-center justify-between">
         {/* Logo Section */}
         <div className="flex items-center">
           <div className="w-14 h-14 mr-14">
             <img 
               src="/logo/Icon-107.png" 
               alt="Logo" 
               className="w-full h-full object-contain"
             />
           </div>
          
          {/* Navigation Links */}
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
        </div>

        {/* Action Buttons */}
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
      </div>
    </header>
  )
}

export default Header
