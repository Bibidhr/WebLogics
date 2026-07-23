import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Quote, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { team, locationChips } from '../../data/team';
import './HumanTeamSystem.css';

export default function HumanTeamSystem() {
  const [activeMemberId, setActiveMemberId] = useState(team[0].id);

  return (
    <div className="human-team-wrapper">
      {/* Section Header */}
      <div className="team-header-block text-center">
        <span className="section-label">Team & Capability Pillars</span>
        <h2 className="display-sm text-heading">THE PEOPLE BEHIND THE WORK.</h2>
        <p className="lead lead-muted mt-3 max-w-750 mx-auto">
          Strategy, creativity, technology, and performance — brought together by people who care about the businesses they work with.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="human-team-grid mt-8">
        {team.map((member) => {
          const isSelected = member.id === activeMemberId;
          return (
            <motion.div 
              key={member.id}
              className={`human-team-card ${isSelected ? 'active-card' : ''}`}
              onClick={() => setActiveMemberId(member.id)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              {/* Card Header */}
              <div className="member-card-header">
                <div className="member-avatar-box">
                  <span>{member.initials}</span>
                </div>
                <div className="member-meta-info">
                  <span className="member-location-chip">{member.location}</span>
                  <h3 className="member-name-text">{member.name}</h3>
                  <span className="member-role-title">{member.role}</span>
                </div>
              </div>

              {/* Core Expertise Tags */}
              <div className="member-expertise-wrapper mt-4">
                <span className="expertise-header">CORE CAPABILITIES:</span>
                <div className="expertise-tags-list">
                  {member.expertise.map((exp, idx) => (
                    <span key={idx} className="expertise-tag">{exp}</span>
                  ))}
                </div>
              </div>

              {/* Operational Philosophy */}
              <div className="member-philosophy-box mt-4">
                <Quote size={18} className="philosophy-quote-icon" />
                <p className="philosophy-text">"{member.philosophy}"</p>
              </div>

              {/* Direct Contribution */}
              <div className="member-contribution-block mt-4">
                <div className="contribution-header">
                  <CheckCircle2 size={15} className="text-accent" />
                  <span>KEY RESPONSIBILITIES:</span>
                </div>
                <p className="contribution-text">{member.contribution}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Direct Access & Transparent Communication Banner */}
      <div className="team-commitment-banner mt-12">
        <div className="commitment-left">
          <MessageSquare size={26} className="text-accent" />
          <div>
            <h4>DIRECT ACCESS. CLEAR COMMUNICATION. NO UNNECESSARY LAYERS.</h4>
            <p>When you work with Weblogic Technologies, you work directly with the people responsible for your project, strategy, and growth.</p>
          </div>
        </div>

        <div className="commitment-right">
          <span className="presence-label">LOCATION & REACH:</span>
          <div className="presence-flags-list">
            {locationChips.map((chip, idx) => (
              <span key={idx} className="presence-chip">
                <span>{chip.flag}</span>
                <span>{chip.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
