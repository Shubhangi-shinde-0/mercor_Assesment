import React, { useState } from 'react';
import { MapPin, Star, ExternalLink, Github, Linkedin, Check, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { Candidate } from '../types';

interface CandidateCardProps {
  candidate: Candidate;
  isSelected: boolean;
  onSelect: (candidateId: string) => void;
  disabled?: boolean;
}

export function CandidateCard({ candidate, isSelected, onSelect, disabled }: CandidateCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [personalRating, setPersonalRating] = useState(candidate.rating || 0);

  const handleRatingClick = (rating: number) => {
    setPersonalRating(rating);
  };

  return (
    <div className={`group bg-gray-800/50 backdrop-blur-xl border rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
      isSelected 
        ? 'border-orange-500/50 ring-2 ring-orange-500/30 shadow-xl shadow-orange-500/20' 
        : 'border-gray-700/50 hover:border-gray-600/50'
    } ${disabled ? 'opacity-60' : ''}`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {candidate.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-800"></div>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">{candidate.name}</h3>
              <p className="text-gray-300 font-medium">{candidate.role}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              <Star className="h-3 w-3 fill-current" />
              {candidate.score}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <MapPin className="h-4 w-4" />
          <span className="font-medium">{candidate.location}</span>
          <span className="text-gray-500">•</span>
          <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">
            {candidate.experience}
          </span>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed line-clamp-2">{candidate.summary}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {candidate.skills.slice(0, 3).map(skill => (
            <span key={skill} className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-gray-300 rounded-lg text-sm font-medium">
              {skill}
            </span>
          ))}
          {candidate.skills.length > 3 && (
            <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 rounded-lg text-sm font-medium">
              +{candidate.skills.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {candidate.portfolio && (
              <a href={candidate.portfolio} target="_blank" rel="noopener noreferrer" 
                 className="p-2 text-gray-400 hover:text-orange-400 transition-all duration-300 hover:scale-110 rounded-lg hover:bg-orange-500/10">
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {candidate.github && (
              <a href={candidate.github} target="_blank" rel="noopener noreferrer"
                 className="p-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 rounded-lg hover:bg-gray-700/50">
                <Github className="h-4 w-4" />
              </a>
            )}
            {candidate.linkedin && (
              <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer"
                 className="p-2 text-gray-400 hover:text-orange-400 transition-all duration-300 hover:scale-110 rounded-lg hover:bg-orange-500/10">
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>

          <button
            onClick={() => onSelect(candidate.id)}
            disabled={disabled}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
              isSelected
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl'
                : disabled
                ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700'
            }`}
          >
            {isSelected ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {isSelected ? 'Selected' : 'Select'}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-700/50 animate-fade-in">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-white mb-3">Previous Experience</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.previousCompanies.map(company => (
                    <span key={company} className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-gray-300 rounded-lg text-sm font-medium">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-2">Education</h4>
                <p className="text-gray-300">{candidate.education}</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3">Your Rating</h4>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      onClick={() => handleRatingClick(star)}
                      className="transition-all duration-200 hover:scale-110"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= personalRating 
                            ? 'text-orange-400 fill-current' 
                            : 'text-gray-600 hover:text-orange-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 flex items-center justify-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-all duration-300 py-2 rounded-lg hover:bg-orange-500/10"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Show More
            </>
          )}
        </button>
      </div>
    </div>
  );
}