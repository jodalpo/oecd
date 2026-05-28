import React from 'react';

function Hole({ holeNumber, players, scores, allRulesForMenu, addRuleToPlayer, removeRuleFromPlayer, resetHole }) {
    return (
        <div className="border border-border-color bg-background/20 rounded-lg p-4 transition-all hover:border-primary/30">
            <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-primary">{holeNumber}번 홀</span>
                <button 
                    className="bg-card-bg text-text-secondary border border-border-color py-1 px-2.5 rounded-md text-xs cursor-pointer hover:bg-background transition-colors"
                    onClick={() => resetHole(holeNumber)}
                >
                    초기화
                </button>
            </div>
            <div className="space-y-4">
                {players.map((player, playerIndex) => {
                    if (!player) return null;
                    const playerScores = scores[holeNumber]?.[playerIndex] || [];
                    return (
                        <div key={playerIndex} className="border-t border-border-color/30 pt-3 first:border-none first:pt-0">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-text-primary">{player}</span>
                                <select
                                    className="bg-card-bg text-text-primary text-xs px-2.5 py-1 rounded-md border border-border-color hover:border-primary/50 cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary/35"
                                    onChange={(e) => addRuleToPlayer(holeNumber, playerIndex, e.target.value)}
                                    value=""
                                >
                                    <option value="" disabled>+ 룰 추가</option>
                                    {Object.entries(allRulesForMenu).map(([key, rule]) => (
                                        <option key={key} value={key}>{rule.name}</option>
                                    ))}
                                </select>
                            </div>
                            {playerScores.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {playerScores.map((ruleKey, ruleIndex) => {
                                        const rule = allRulesForMenu[ruleKey];
                                        if (!rule) return null;
                                        const isPositive = rule.amount >= 0;
                                        
                                        // Dynamic glassmorphism badge colors that work in both light and dark modes
                                        const badgeClass = isPositive 
                                            ? 'bg-danger/10 text-danger border border-danger/25' 
                                            : 'bg-primary/10 text-primary border border-primary/25';
                                            
                                        return (
                                            <span
                                                key={ruleIndex}
                                                className={`flex items-center px-2 py-0.5 rounded-full text-xs font-semibold cursor-pointer border ${badgeClass} transition-opacity hover:opacity-80`}
                                                onClick={() => removeRuleFromPlayer(holeNumber, playerIndex, ruleIndex)}
                                                title="클릭하여 삭제"
                                            >
                                                {rule.name}
                                                <span className="ml-1.5 opacity-70">×</span>
                                            </span>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


function Scorecard({ players, scores, allRulesForMenu, addRuleToPlayer, removeRuleFromPlayer, resetHole }) {
  return (
    <div className="p-6 bg-card-bg rounded-lg border border-border-color shadow-sm transition-all duration-300">
       <h2 className="text-xl font-bold mb-5 text-primary flex items-center">
        <span role="img" aria-label="scorecard-icon" className="mr-2">⛳</span>
        홀별 스코어 기록
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
        {[...Array(18)].map((_, i) => (
          <Hole
            key={i + 1}
            holeNumber={i + 1}
            players={players}
            scores={scores}
            allRulesForMenu={allRulesForMenu}
            addRuleToPlayer={addRuleToPlayer}
            removeRuleFromPlayer={removeRuleFromPlayer}
            resetHole={resetHole}
          />
        ))}
      </div>
    </div>
  );
}

export default Scorecard;