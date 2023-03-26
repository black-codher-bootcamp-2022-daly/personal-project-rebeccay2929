  
export default function Sidebar() {
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
src="https://em-content.zobj.net/thumbs/240/google/350/woman-technologist-dark-skin-tone_1f469-1f3ff-200d-1f4bb.png"
     alt=""
        />
        <p>
          Rebecca Boateng
          <br></br>
     Software Developer   
          <br></br>

           <i>  Black CodHer Bootcamp</i>

        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
           <li className="sidebarListItem"> </li>
        
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}