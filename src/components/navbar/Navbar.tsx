import "./navbar.scss"


const Navbar = () => {
  return (
    <div className ="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>admin</span>
      </div>
      <div className="icons">
        <img src ="/search.svg" alt=""/>
        <img src ="/app.svg" alt=""/>
        <img src ="/expand.svg" alt=""/>
        <div className="notifications">
          <img src ="/notifications.svg" alt=""/>
          <span>1</span>
        </div>
        <div className="user">
          <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcoqcKnx3dPUMN45lBEOBeg60JpY5f_soHQ&usqp=CAU" alt=""/>
          <span>Andrei</span>
        </div>
        <img src="/settings.svg" alt="" className="icon"/>
      </div>
    </div>
  )
}

export default Navbar