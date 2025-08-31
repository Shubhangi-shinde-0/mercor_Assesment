import React from 'react';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';
import { Candidate } from '../types';

interface DiversityDashboardProps {
  candidates: Candidate[];
}

export function DiversityDashboard({ candidates }: DiversityDashboardProps) {
  const diversityMetrics = {
    gender: candidates.reduce((acc, candidate) => {
      acc[candidate.diversity.gender] = (acc[candidate.diversity.gender] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    
    ethnicity: candidates.reduce((acc, candidate) => {
      acc[candidate.diversity.ethnicity] = (acc[candidate.diversity.ethnicity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    
    locations: candidates.reduce((acc, candidate) => {
      acc[candidate.location] = (acc[candidate.location] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    
    neurodiversity: candidates.filter(c => c.diversity.neurodiversity).length,
    veterans: candidates.filter(c => c.diversity.veteranStatus).length
  };

  if (candidates.length === 0) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-5 w-5 text-orange-500" />
          <h3 className="text-lg font-bold text-white">Team Diversity</h3>
        </div>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-8 w-8 text-orange-400" />
          </div>
          <p className="text-gray-400 text-sm">Select candidates to see diversity insights</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-6">
        <Users className="h-5 w-5 text-orange-500" />
        <h3 className="text-lg font-bold text-white">Team Diversity</h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-gray-300 mb-3 flex items-center gap-2">
            <Award className="h-4 w-4 text-orange-400" />
            Gender Distribution
          </h4>
          <div className="space-y-2">
            {Object.entries(diversityMetrics.gender).map(([gender, count]) => (
              <div key={gender} className="flex justify-between items-center p-2 rounded-lg bg-gray-700/50 backdrop-blur-sm">
                <span className="text-sm font-medium text-gray-300">{gender}</span>
                <span className="text-sm font-bold text-white bg-orange-500/20 px-2 py-1 rounded-full">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-300 mb-3 flex items-center gap-2">
            <Globe className="h-4 w-4 text-green-400" />
            Geographic Distribution
          </h4>
          <div className="space-y-2">
            {Object.entries(diversityMetrics.locations).map(([location, count]) => (
              <div key={location} className="flex justify-between items-center p-2 rounded-lg bg-gray-700/50 backdrop-blur-sm">
                <span className="text-sm font-medium text-gray-300">{location}</span>
                <span className="text-sm font-bold text-white bg-green-500/20 px-2 py-1 rounded-full">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {(diversityMetrics.neurodiversity > 0 || diversityMetrics.veterans > 0) && (
          <div>
            <h4 className="font-bold text-gray-300 mb-3">Inclusion Metrics</h4>
            <div className="space-y-2">
              {diversityMetrics.neurodiversity > 0 && (
                <div className="flex justify-between items-center p-2 rounded-lg bg-purple-500/10 backdrop-blur-sm">
                  <span className="text-sm font-medium text-purple-300">Neurodivergent</span>
                  <span className="text-sm font-bold text-white bg-purple-500/20 px-2 py-1 rounded-full">
                    {diversityMetrics.neurodiversity}
                  </span>
                </div>
              )}
              {diversityMetrics.veterans > 0 && (
                <div className="flex justify-between items-center p-2 rounded-lg bg-blue-500/10 backdrop-blur-sm">
                  <span className="text-sm font-medium text-blue-300">Veterans</span>
                  <span className="text-sm font-bold text-white bg-blue-500/20 px-2 py-1 rounded-full">
                    {diversityMetrics.veterans}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-gray-700/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-1">
              {candidates.length}/5
            </div>
            <div className="text-sm text-gray-400 font-medium">Team Members</div>
          </div>
        </div>
      </div>
    </div>
  );
}