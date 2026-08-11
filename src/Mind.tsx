import { Page, Pages } from 'levelojs';
import './Mind.css';
import { Home } from './pages/home/Home';
import { Docs } from './pages/docs/Docs';
import { Rules } from './pages/rules/Rules';
import './components/markdownStyle.css';

function Mind() {
  return (
    <Pages>
      <Page path='/' component={Home} />
      <Page path='/docs' component={Docs} />
      <Page path='/rules' component={Rules} />
    </Pages>
  )
}

export default Mind;