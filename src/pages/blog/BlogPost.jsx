import { Link, Navigate, useParams } from 'react-router-dom';
import MarketingShell from '../../components/marketing/MarketingShell.jsx';
import { APP_URL } from '../../lib/appUrl.js';
import { getPost, POSTS } from './posts.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <MarketingShell title={`${post.title} — BOLTORIUM`}>
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Link to="/blog" className="font-display text-xs font-bold uppercase tracking-wider text-cyan hover:text-bolt">
          ← Blog
        </Link>
        <p className="hud-label mt-6 text-bolt">{post.date}</p>
        <h1 className="headline mt-2 text-3xl sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-bone/55">{post.blurb}</p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-bone/75 sm:text-base">
          {post.body.map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={APP_URL} className="btn-bolt !w-auto !px-8 !rounded-full">
            Enter App
          </a>
          <Link
            to="/how-it-works"
            className="inline-flex h-14 items-center rounded-full border border-white/20 px-6 font-display font-bold uppercase tracking-wider"
          >
            How it works
          </Link>
        </div>
        {others.length > 0 && (
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="hud-label text-cyan">More posts</p>
            <ul className="mt-4 space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link to={`/blog/${o.slug}`} className="text-sm text-bone/70 hover:text-bolt">
                    {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </MarketingShell>
  );
}
