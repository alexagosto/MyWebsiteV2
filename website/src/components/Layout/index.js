import './index.scss';
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return( <div className={"App"}>
    <Navbar />
    <div className={'page'}>
      <span className={'tags top-tags'}>
        <span className={'top-tags-html'}>&lt;html&gt;</span>
        <br />
        &lt;body&gt;
      </span>

      <Outlet />

      <span className={'tags bottom-tags'}>
        &lt;/body&gt;
        <br />
        <span className={'bottom-tags-html'}>&lt;/html&gt;</span>
      </span>
    </div>
  </div>)
}

export default Layout
