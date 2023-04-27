import './Navbar.css'
function Navbar() {
    return (
      <>
            <nav>
                <img class="logo" src="https://cosecantinc.com/wp-content/uploads/2022/11/Cosecant-1.png" alt="Oitech Logo Light"></img>
                <ul>
                   
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                   <div class="dropdown">
                   <li class="dropbtn">Services</li>
                   <div class="dropdown-content">
                    <a href="#">consulting</a>
                    <a href="#">Training</a>
                    </div>                                        
                    </div>
                    <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
                </ul>
        </nav>
      
         </>
    )
}
export default Navbar;