import React from "react";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      {/* Left Section */}
      <aside className="profile-sidebar">
        <div className="profile-avatar">
          <div className="avatar-placeholder">J</div>
        </div>
        <div className="profile-status">
          <p>5% profile filled</p>
          <p>Last seen 7 hours ago</p>
          <p>Newbie</p>
        </div>
        <div className="profile-stats">
          <p>28 days on Platform</p>
          <p>3 profile views</p>
          <p>0 subscribers</p>
          <p>0 comments left</p>
        </div>
      </aside>

      {/* Main Section */}
      <main className="profile-main">
        <div className="profile-header">
          <h1>jhjhkhk</h1>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>

        <div className="profile-content">
          {/* Tabs */}
          <div className="profile-tabs">
            <button className="active">My Profile</button>
            <button>Videos</button>
            <button>Galleries</button>
            <button>Posts</button>
            <button>Friends</button>
            <button>Favorites</button>
          </div>

          {/* Status Input */}
          <div className="status-input">
            <textarea placeholder="Write your status here..."></textarea>
          </div>

          {/* Personal Information */}
          <div className="personal-info">
            <h2>Personal Information</h2>
            <p>
              I am: <span>Heterosexual</span>
            </p>
            <p>
              From: <span>Bangladesh</span>
            </p>
            <div className="profile-tasks">
              <button className="task-btn">Describe your appearance +5%</button>
              <button className="task-btn">Tell about yourself +50%</button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <h2>Comments</h2>
            <div className="comment-box">
              <div className="comment-avatar">J</div>
              <textarea placeholder="Leave a comment..."></textarea>
            </div>
          </div>
        </div>
      </main>

      {/* Right Section */}
      <aside className="profile-actions">
        <div className="actions-header">Complete Your Profile</div>
        <ul className="actions-list">
          <li>
            <button className="action-btn">Verify your identity +20%</button>
          </li>
          <li>
            <button className="action-btn">Upload your first video</button>
          </li>
          <li>
            <button className="action-btn">Enable Twitter video promotion</button>
          </li>
          <li>
            <button className="action-btn">Upload your first photo</button>
          </li>
          <li>
            <button className="action-btn">Create your first post</button>
          </li>
          <li>
            <button className="action-btn">Meet new friends</button>
          </li>
        </ul>
      </aside>

      {/* Footer */}
      <footer className="profile-footer">
        <nav className="footer-nav">
          <a href="#terms">Terms of Use</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#support">Support</a>
        </nav>
        <p>&copy; 2024 Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProfilePage;
