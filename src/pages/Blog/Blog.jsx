import { Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';

const posts = [
  {
    id: "headless-speed",
    title: "Why headless web platforms load faster than standard themes",
    excerpt: "Pre-built themes carry substantial bloated code weight that slows down mobile devices. Decoupling the frontend React platform from the CMS dashboard yields sub-second loading speeds and clean indexing crawls.",
    category: "Web Development",
    readTime: "5 Min Read",
    author: "Sarah Lin",
    date: "June 12, 2026"
  },
  {
    id: "search-intent-vs-volume",
    title: "Targeting search intent vs volume: Commercial SEO positioning",
    excerpt: "Traffic volume is a vanity metric. True organic growth targets search terms with high commercial intent, capturing users during key decision-making phases rather than casual searchers.",
    category: "SEO Optimization",
    readTime: "7 Min Read",
    author: "Marcus Vance",
    date: "May 28, 2026"
  },
  {
    id: "attribution-model-roas",
    title: "Attribution model auditing: Tracking clean ROAS across paid channels",
    excerpt: "Generic dashboard numbers often double-count sales or obscure high acquisition costs. Installing direct conversion listeners via Tag Manager ensures verified weekly campaign reporting.",
    category: "Paid Media",
    readTime: "6 Min Read",
    author: "Daniel Reynolds",
    date: "May 14, 2026"
  },
  {
    id: "wordpress-theme-security",
    title: "The risk of off-the-shelf page builders on enterprise security",
    excerpt: "A website is a company asset. Third-party plug-ins and visual theme builders introduce substantial software updates and entry paths for data script exploits.",
    category: "Web Development",
    readTime: "4 Min Read",
    author: "Sarah Lin",
    date: "April 30, 2026"
  }
];

export default function Blog() {
  return (
    <div className="blog-page">
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <span className="section-label section-label-light">Blog & Insights</span>
          <h1 className="display display-light">Digital growth insights</h1>
          <p className="lead mx-auto lead-light mt-4">
            Read technical commentary on React application architectures, keyword intent optimization, and clean conversion tracking.
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-info">
                  <div className="blog-meta-top">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-author-row mt-6">
                    <span className="author-item"><User size={14} /> {post.author}</span>
                    <span className="author-item"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <Link to="/blog" className="blog-link mt-6">
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
