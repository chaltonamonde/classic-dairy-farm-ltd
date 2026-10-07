import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  MessageCircle, 
  Send, 
  Sparkles, 
  Clock, 
  Filter,
  Share2
} from 'lucide-react';
import { DAIRY_ARTICLES, FAQS, FARM_INFO } from '../data/farmData';

export default function DairyAdvicePage({ onOpenAskModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticleId, setExpandedArticleId] = useState(DAIRY_ARTICLES[0].id);
  const [activeFaq, setActiveFaq] = useState(null);

  const categories = ['All', 'Nutrition & Feeding', 'Housing & Infrastructure', 'Milk Hygiene & Health', 'Breeds & Genetics', 'Fodder & Storage', 'Farm Economics'];

  const filteredArticles = DAIRY_ARTICLES.filter(art => {
    const matchCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchQuery = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="dairy-advice-page-view">
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-tag section-tag-green">
            <BookOpen size={12} /> The Meru Dairy Knowledge Base
          </span>
          <h1 className="page-headline">Dairy Advice, Guides & Practical Farming</h1>
          <p className="page-subline">
            Practical answers to the questions Kenyan farmers ask our team in Nkubu: feeding, zero-grazing housing, mastitis prevention, genetics, and silage management.
          </p>
        </div>
      </section>

      {/* Main Knowledge Hub Section */}
      <section className="section">
        <div className="container">
          {/* Controls: Search & Category Filter */}
          <div className="catalogue-controls-bar mb-4">
            <div className="search-input-box">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                className="catalogue-search-input"
                placeholder="Search articles on feeding, mastitis, silage..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="clear-search-btn">✕</button>
              )}
            </div>

            <div className="category-pills-row">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Accordion / Card View */}
          <div className="articles-stream-stack">
            {filteredArticles.map(article => {
              const isExpanded = expandedArticleId === article.id;
              return (
                <article key={article.id} className={`card article-stream-card ${isExpanded ? 'active-article' : ''}`}>
                  <div 
                    className="article-header-row"
                    onClick={() => setExpandedArticleId(isExpanded ? null : article.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="article-meta-left">
                      <span className="badge badge-green text-xs">{article.category}</span>
                      <span className="read-time-pill">
                        <Clock size={12} /> {article.readTime}
                      </span>
                    </div>

                    <h2 className="article-stream-title">{article.title}</h2>
                    <p className="article-stream-summary">{article.summary}</p>

                    <div className="article-toggle-line">
                      <span className="toggle-label text-accent font-semibold text-sm">
                        {isExpanded ? 'Hide Detailed Guide ▲' : 'Read Full Farm Guide & Key Takeaways ▼'}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Body Content */}
                  {isExpanded && (
                    <div className="article-expanded-body mt-4">
                      {/* Key Takeaways Box */}
                      <div className="key-points-box mb-4">
                        <h4>⚡ Core Takeaways for Your Farm:</h4>
                        <ul>
                          {article.keyPoints.map((point, kIdx) => (
                            <li key={kIdx}>
                              <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Complete Text */}
                      <div className="article-prose-text">
                        {article.content.split('\n\n').map((para, pIdx) => (
                          <p key={pIdx} className="mb-3">{para}</p>
                        ))}
                      </div>

                      {/* WhatsApp Share or Ask Button */}
                      <div className="article-footer-actions mt-4">
                        <button 
                          onClick={onOpenAskModal}
                          className="btn btn-secondary btn-sm"
                        >
                          <HelpCircle size={14} />
                          <span>Ask a Follow-Up Question on This Topic</span>
                        </button>

                        <a 
                          href={`https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Classic Dairy Farm, I read your article on "${article.title}" and would like to ask a question.`)}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp btn-sm"
                        >
                          <MessageCircle size={14} />
                          <span>Discuss with Farm Manager on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Ask the Farm Interactive Box (Weakness #2 Direct Fix) */}
          <div className="card ask-farm-jumbotron mt-5">
            <div className="ask-jumbotron-grid">
              <div className="ask-jumbotron-text">
                <span className="badge badge-blue mb-2">Technical Helpline</span>
                <h2>Have a Question About Your Dairy Cows?</h2>
                <p>
                  Submit your challenge to our farm team in Nkubu. We troubleshoot low milk yields, mastitis recurrence, feed rations, and shed ventilation daily.
                </p>
                <div className="ask-features-list mt-3">
                  <div className="ask-feat">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Real answers based on Mount Kenya climate & fodder</span>
                  </div>
                  <div className="ask-feat">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Typically replied within 15 minutes on WhatsApp</span>
                  </div>
                </div>
              </div>

              <div className="ask-jumbotron-cta-box text-center">
                <button 
                  onClick={onOpenAskModal}
                  className="btn btn-primary btn-lg btn-full mb-3"
                >
                  <Send size={18} />
                  <span>Submit Your Question Online</span>
                </button>

                <a 
                  href={`https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Classic Dairy Farm, I am a farmer in Meru and need dairy advice on my herd.')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg btn-full"
                >
                  <MessageCircle size={18} />
                  <span>Ask Directly on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">
              <HelpCircle size={12} /> Answers on Demand
            </span>
            <h2 className="section-title">Frequently Asked Farm Questions</h2>
            <p className="section-subtitle">
              Answers to visiting, purchasing, and biosecurity questions in Nkubu, Meru.
            </p>
          </div>

          <div className="faq-accordion-box">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item-card ${activeFaq === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  aria-expanded={activeFaq === index}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <ChevronRight size={18} className="faq-chevron" />
                </button>

                {activeFaq === index && (
                  <div className="faq-answer-panel">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
