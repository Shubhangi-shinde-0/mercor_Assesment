import React from 'react';
import { X, Download, Users, Award, TrendingUp, Sparkles, ArrowLeft } from 'lucide-react';
import { Candidate } from '../types';

interface SelectedTeamProps {
  candidates: Candidate[];
  onRemoveCandidate: (candidateId: string) => void;
}

export function SelectedTeam({ candidates, onRemoveCandidate }: SelectedTeamProps) {
  const averageScore = candidates.length > 0 
    ? (candidates.reduce((sum, c) => sum + c.score, 0) / candidates.length).toFixed(1)
    : '0';

  const skillCoverage = [...new Set(candidates.flatMap(c => c.skills))];
  
  const diversityScore = () => {
    const genders = new Set(candidates.map(c => c.diversity.gender));
    const ethnicities = new Set(candidates.map(c => c.diversity.ethnicity));
    const locations = new Set(candidates.map(c => c.location));
    
    return Math.round(((genders.size + ethnicities.size + locations.size) / (candidates.length * 3)) * 100);
  };

  const exportTeam = () => {
    const teamData = {
      selectedTeam: candidates.map(c => ({
        name: c.name,
        role: c.role,
        score: c.score,
        location: c.location,
        skills: c.skills,
        diversity: c.diversity
      })),
      metrics: {
        averageScore,
        skillCoverage: skillCoverage.length,
        diversityScore: diversityScore(),
        totalCandidates: candidates.length
      },
      exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(teamData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'selected-team.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Your Dream Team</h2>
              <p className="text-gray-400">Carefully curated for success</p>
            </div>
          </div>
          
          {candidates.length > 0 && (
            <button
              onClick={exportTeam}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download className="h-4 w-4" />
              Export Team
            </button>
          )}
        </div>

        {candidates.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-12 w-12 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Something Amazing?</h3>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              Start selecting candidates to assemble your perfect team of 5 talented individuals
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 text-center">
                <TrendingUp className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-300">{averageScore}</div>
                <div className="text-sm font-medium text-orange-400">Average Score</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 text-center">
                <Award className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-300">{skillCoverage.length}</div>
                <div className="text-sm font-medium text-green-400">Unique Skills</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center">
                <Sparkles className="h-10 w-10 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-300">{diversityScore()}%</div>
                <div className="text-sm font-medium text-purple-400">Diversity Score</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {candidates.map((candidate, index) => (
                <div 
                  key={candidate.id} 
                  className="bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6 relative hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:border-orange-500/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => onRemoveCandidate(candidate.id)}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 rounded-lg hover:bg-red-500/10"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{candidate.name}</h3>
                      <p className="text-gray-300 font-medium">{candidate.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Location & Experience</span>
                      <p className="text-white font-medium">{candidate.location} • {candidate.experience}</p>
                    </div>
                    
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Key Skills</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {candidate.skills.slice(0, 4).map(skill => (
                          <span key={skill} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 font-medium">Score:</span>
                        <span className="font-bold text-green-400 text-lg">{candidate.score}</span>
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        {candidate.diversity.gender} • {candidate.diversity.ethnicity}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {candidates.length === 5 && (
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 mt-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="h-8 w-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-300">Team Complete!</h3>
                </div>
                <p className="text-green-200 text-lg max-w-2xl mx-auto">
                  Congratulations! You've assembled an exceptional team of 5 diverse, talented individuals. 
                  Your startup is ready to conquer the market with this powerhouse team.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}