import './rules.css';

import 'highlight.js/styles/github.css';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/Footer';
import { Sidebar } from './components/sidebar/sidebar';

import rule1 from '../../../data/rules/01-submission-rules-and-limits.md?raw';
import rule2 from '../../../data/rules/02-evaluation-system-and-rubric.md?raw';
import rule3 from '../../../data/rules/03-community-and-github-engagement.md?raw';
import rule4 from '../../../data/rules/04-fair-play-and-eligibility.md?raw';

import { setActiveTab } from '../../components/header/header';
import { mount } from 'levelojs';

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

export function Rules() {
    const combinedMarkdown = `${rule1}\n\n---\n\n${rule2}\n\n---\n\n${rule3}\n\n---\n\n${rule4}`;
    const htmlContent = marked.parse(combinedMarkdown, { async: false }) as string;

    mount(() => {
        setActiveTab('rules');
    })
    return (
        <div>
            <Header />
            <div  class="rules-layout">
                <Sidebar />
                <main class="rules-content">
                    <div class="markdown-body" renderString={htmlContent}></div>
                </main>
            </div>
            <Footer />
        </div>
    )
}