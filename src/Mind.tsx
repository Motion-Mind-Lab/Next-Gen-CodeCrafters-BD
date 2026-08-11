import { Page, Pages } from 'levelojs';

import './Mind.css';
import './components/markdownStyle.css';

import { Home } from './pages/home/Home';
import { Docs } from './pages/docs/Docs';
import { Rules } from './pages/rules/Rules';
import { LeaderBoard } from './pages/leaderboard/LeaderBoard';
import { ProjectShowcase } from './pages/projectshowcase/ProjectShowcase';
import { About } from './pages/about/About';
import { HowToSubmit } from './pages/submit/HowToSubmit';

function Mind() {
  return (
    <Pages>
      <Page path='/' component={Home} />
      <Page path='/docs' component={Docs} />
      <Page path='/rules' component={Rules} />
      <Page path='/leaderboard' component={LeaderBoard} />
      <Page path='/showcase' component={ProjectShowcase} />
      <Page path='/about' component={About} />
      <Page path='/submit' component={HowToSubmit} />
    </Pages>
  )
}

export default Mind;