'use client';

import { Category, VotingState } from '../types';
import DancerCard from './DancerCard';
import { Users, Clock, Award, Sparkles, ArrowUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface CategorySectionProps {
  category: Category;
  votingState: VotingState;
  onVote: (categoryId: string, dancerId: string) => void;
}

export default function CategorySection({ category, votingState, onVote }: CategorySectionProps) {
  const hasVoted = votingState.hasVoted[category.id] || false;
  const votedDancers = votingState.votedDancers[category.id] || [];
  const totalVotes = category.dancers.reduce((sum, dancer) => sum + dancer.votes, 0);
  const maxVotes = Math.max(...category.dancers.map(d => d.votes), 1);

  return (
    <div className="space-y-8">
      {/* Category Header */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <div className="text-6xl">{category.icon}</div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">
              {category.name}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
        
        <div className="glass-secondary rounded-2xl p-6 max-w-md mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-xl font-bold text-white">{category.dancers.length}</div>
              <div className="text-sm text-white/60">Nominees</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white">{totalVotes}</div>
              <div className="text-sm text-white/60">Total Votes</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white">3</div>
              <div className="text-sm text-white/60">Max Votes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Voting Instructions */}
      {!hasVoted && (
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 glass-secondary rounded-full px-6 py-3 border border-white/10">
            <ArrowUp className="w-4 h-4 text-white/70" />
            <span className="text-white/80 text-sm font-medium">Select up to 3 dancers</span>
          </div>
        </div>
      )}

      {/* Live Results */}
      {totalVotes > 0 && (
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-5 h-5 text-white" />
            <h3 className="text-lg font-semibold text-white">Live Rankings</h3>
          </div>
          
          <div className="space-y-3">
            {category.dancers
              .filter(dancer => dancer.votes > 0)
              .sort((a, b) => b.votes - a.votes)
              .slice(0, 5)
              .map((dancer, index) => (
                <div key={dancer.id} className="glass-secondary rounded-xl p-4 minimal-hover">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border ${
                        index === 0 ? 'bg-white/20 border-white/40 text-white winner-minimal' :
                        'bg-white/10 border-white/20 text-white/80'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-white">{dancer.name}</div>
                        <div className="text-sm text-white/60">{dancer.city}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full progress-minimal rounded-full"
                          style={{ width: `${(dancer.votes / maxVotes) * 100}%` }}
                        />
                      </div>
                      <div className="badge-minimal rounded-lg px-3 py-1">
                        <span className="text-sm font-medium text-white">{dancer.votes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Dancers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {category.dancers.map((dancer) => (
          <DancerCard
            key={dancer.id}
            dancer={dancer}
            isSelected={votedDancers.includes(dancer.id)}
            hasVoted={hasVoted}
            onVote={(dancerId) => onVote(category.id, dancerId)}
          />
        ))}
      </div>

      {/* Vote Confirmation */}
      {hasVoted && (
        <div className="text-center">
          <div className="glass-secondary rounded-2xl p-6 max-w-sm mx-auto border border-white/20">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Votes Recorded
            </h3>
            <p className="text-white/70 text-sm">
              You voted for {votedDancers.length} dancer{votedDancers.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
        </div>
      )}
    </div>
  );
}