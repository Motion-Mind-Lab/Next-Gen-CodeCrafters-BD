import './docs.css';
import 'highlight.js/styles/github.css';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

import doc1 from '../../../data/docs/01-introduction-and-ecosystem.md?raw';
import doc2 from '../../../data/docs/02-motion-mind-devtools.md?raw';
import doc3 from '../../../data/docs/03-submissions-and-code-reviews.md?raw';
import doc4 from '../../../data/docs/04-rewards-badges-and-recognition.md?raw';
import doc5 from '../../../data/docs/05-community-and-open-source.md?raw';
import doc6 from '../../../data/docs/06-code-integrity-and-fair-play.md?raw';

import { Sidebar } from './components/sidebar/sidebar';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/Footer';

import { setActiveTab } from '../../components/header/header';
import { head, mount } from 'levelojs';

const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code: string, lang: string) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

export function Docs() {
  const combinedMarkdown = `${doc1}\n\n---\n\n${doc2}\n\n---\n\n${doc3}\n\n---\n\n${doc4}\n\n---\n\n${doc5}\n\n---\n\n${doc6}`;
  const htmlContent = marked.parse(combinedMarkdown, { async: false }) as string;

  head({
    title: 'Documentation — NGCBD'
  })

  mount(() => {
    setActiveTab('docs');
  })

  return (
    <div>
        <Header />
        <div  class="docs-layout">
            <Sidebar />
            <main class="docs-content">
                <div class="markdown-body" renderString={htmlContent}></div>
            </main>
        </div>
        <Footer />
    </div>
  );
}