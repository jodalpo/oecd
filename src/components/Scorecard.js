import React from 'react';

function Hole({ holeNumber, players, scores, allRulesForMenu, addRuleToPlayer, removeRuleFromPlayer, resetHole }) {
    // A simplified design for the hole, based on the screenshot
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-bold text-primary">{holeNumber}번 홀</span>
                <button 
                    className="bg-light-gray text-dark-gray border border-gray-300 py-1 px-3 rounded-md text-xs cursor-pointer hover:bg-gray-200"
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
                        <div key={playerIndex}>
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-text-primary">{player}</span>
                                <select
                                    className="bg-gray-100 text-dark-gray text-xs px-2 py-1 rounded-full border border-transparent hover:bg-gray-200 cursor-pointer focus:outline-none"
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
                                        const bgColor = isPositive ? 'bg-red-100' : 'bg-green-100';
                                        const textColor = isPositive ? 'text-danger' : 'text-primary';
                                        return (
                                            <span
                                                key={ruleIndex}
                                                className={`flex items-center px-2 py-1 rounded-full text-xs cursor-pointer ${bgColor} ${textColor}`}
                                                onClick={() => removeRuleFromPlayer(holeNumber, playerIndex, ruleIndex)}
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
    <div className="p-6 bg-white rounded-lg shadow-md">
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