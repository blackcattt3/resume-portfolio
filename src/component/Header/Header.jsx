import React, { useEffect } from 'react'
import './Header.css'

const Header = ({scrollRefs}) => {

    const menu = ['Start', 'About', 'Skills', 'Projects']
    // console.log('scrollRefs', scrollRefs);

    const goToMenu = (ref)=>{
        // const [ref] = refs[i];
        // console.log(ref.current);
        ref.current?.scrollIntoView({behavior:'smooth'})
    }

  return (
    <div>
        <div className='header-menu'>
            {menu.map((item, i)=>{
                return (<div key={i} onClick={()=>goToMenu(scrollRefs[i])}>{item}</div>)
            })}
            {/* <div>Start</div>
            <div>|</div>
            <div>About</div>
            <div>|</div>
            <div>Skills</div>
            <div>|</div>
            <div>Projects</div> */}
        </div>
    </div>
  )
}

export default Header