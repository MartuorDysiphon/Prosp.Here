import React, { useState } from 'react';
import styles from './Blog.module.css';

import financesImage from '../../assets/finance.jpg';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPost = {
    id: 1,
    title: 'How to Manage Your Finances as a Student',
    excerpt: 'Simple and practical tips to help you take control of your money while studying.',
    content: 'Managing money as a student can be challenging. Between tuition, books, transport, and living expenses, it is easy to feel overwhelmed. But with a few simple habits, you can take control of your finances and reduce stress.\n\nCreate a simple budget. Write down all your income including bursaries, allowances, or part time work. Then list your expenses. This helps you see where your money is going each month.\n\nTrack every small expense. That daily coffee or airtime adds up quickly. Use a notebook or a free app on your phone to track what you spend. You will be surprised where your money goes.\n\nCook at home instead of eating out. Learning to prepare simple meals saves a lot of money. Invite friends over for a home cooked meal instead of going to restaurants.\n\nUse student discounts. Many shops, cinemas, and software companies offer discounts for students. Always ask if there is a student price before you pay.\n\nBuy second hand textbooks. Textbooks are very expensive. Look for previous students selling their books or check online marketplaces. Some libraries also have copies you can borrow.\n\nAvoid unnecessary debt. Credit cards and loans can trap you in a cycle of debt. Only borrow when absolutely necessary and always understand the interest rates.\n\nOpen a savings account. Even putting away a small amount each month builds a safety net for emergencies. Aim to save at least 10 percent of whatever money you receive.\n\nPlan for big expenses. Knowing when tuition or exam fees are due helps you prepare ahead of time. Do not wait until the last moment.\n\nRemember, good financial habits start small. The choices you make as a student will shape your financial future. Start today, even with a small budget. Every bit of planning helps.',
    category: 'finances',
    image: financesImage,
    author: 'Prosp.Here Team',
    authorRole: 'Financial Wellness',
    date: 'May 3 2026',
    readTime: '4 min read'
  };

  const openPostModal = () => {
    setSelectedPost(blogPost);
    document.body.style.overflow = 'hidden';
  };

  const closePostModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="blog" className={styles.blogWrap}>
      <div className="container">
        <div className={styles.blogHeader}>
          <div className={styles.labelTag}>
            <i className="fas fa-pen-fancy"></i> Latest Article
          </div>
          <h1 className={styles.blogTitle}>Blog</h1>
          <p className={styles.blogSubtitle}>
            Tips and advice for your financial journey
          </p>
        </div>

        <div className={styles.postCard} onClick={openPostModal}>
          <div className={styles.postImage}>
            <img src={blogPost.image} alt={blogPost.title} />
          </div>
          <div className={styles.postContent}>
            <div className={styles.postMeta}>
              <span><i className="far fa-calendar-alt"></i> {blogPost.date}</span>
              <span><i className="far fa-clock"></i> {blogPost.readTime}</span>
            </div>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.excerpt}</p>
            <div className={styles.postAuthor}>
              <div className={styles.authorAvatar}>
                <span><img src="/logo.png" alt="" /></span>
              </div>
              <div>
                <strong>{blogPost.author} </strong>
                <span> {blogPost.authorRole}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedPost && (
        <div className={styles.modalOverlay} onClick={closePostModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closePostModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <img src={selectedPost.image} alt={selectedPost.title} className={styles.modalImage} />
            
            <div className={styles.modalBody}>
              <div className={styles.modalMeta}>
                <span><i className="far fa-calendar-alt"></i> {selectedPost.date}</span>
                <span><i className="far fa-clock"></i> {selectedPost.readTime}</span>
              </div>
              
              <h2 className={styles.modalTitle}>{selectedPost.title}</h2>
              
              <div className={styles.modalAuthor}>
                <div className={styles.modalAuthorAvatar}>
                  <span><img src="/logo.png" alt="" /></span>
                </div>
                <div>
                  <strong>{selectedPost.author}</strong>
                  <span>{selectedPost.authorRole}</span>
                </div>
              </div>
              
              <div className={styles.modalDivider}></div>
              
              <div className={styles.modalText}>
                {selectedPost.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;