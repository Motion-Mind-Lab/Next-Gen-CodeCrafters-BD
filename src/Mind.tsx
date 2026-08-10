import { Page, Pages } from 'levelojs';
import './Mind.css';
import { Home } from './pages/home/Home';
import { Docs } from './pages/docs/Docs';

function Mind() {
  return (
    <Pages>
      <Page path='/' component={Home} />
      <Page path='/docs' component={Docs} />
    </Pages>
  )
}

export default Mind;