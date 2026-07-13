import { Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { posts } from '../../data/posts';

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
          <div className="rounded-container-xl" style={{ position: 'relative' }}>
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
        </div>
      </section>
    </div>
  );
}
