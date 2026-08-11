import { Page, Pages } from 'levelojs';
import './Mind.css';
import { Home } from './pages/home/Home';
import { Docs } from './pages/docs/Docs';
import { Rules } from './pages/rules/Rules';
import './components/markdownStyle.css';
import { LeaderBoard } from './pages/leaderboard/LeaderBoard';
import { ProjectShowcase } from './pages/projectshowcase/ProjectShowcase';

function Mind() {
  return (
    <Pages>
      <Page path='/' component={Home} />
      <Page path='/docs' component={Docs} />
      <Page path='/rules' component={Rules} />
      <Page path='/leaderboard' component={LeaderBoard} />
      <Page path='/showcase' component={ProjectShowcase} />
    </Pages>
  )
}

export default Mind;