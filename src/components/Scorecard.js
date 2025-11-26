import React from 'react';

function Hole({ holeNumber, players, scores, allRulesForMenu, addRuleToPlayer, removeRuleFromPlayer, resetHole }) {
    return (
        <div className="bg-white border border-light-gray rounded-lg p-5 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-lg hover:-translate-y-0.5">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-light-gray">
                <span className="text-xl font-bold text-primary">{holeNumber}번 홀</span>
                <button 
                    className="bg-danger text-white border-none py-1.5 px-3 rounded-md text-xs cursor-pointer opacity-80 hover:opacity-100 transition-opacity" 
                    onClick={() => resetHole(holeNumber)}
                >
                    초기화
                </button>
            </div>
            <div className="space-y-3">
                {players.map((player, playerIndex) => player && (
                    <div key={playerIndex}>
                        <div className="flex items-center gap-2 mb-2 p-2 bg-light-gray rounded-md">
                            <span className="flex-1 text-base font-medium">{player}</span>
                            <select
                                className="bg-gray-200 text-dark-gray text-xs px-2 py-1 rounded-full border border-transparent hover:bg-gray-300 cursor-pointer transition-all focus:outline-none"
                                onChange={(e) => addRuleToPlayer(holeNumber, playerIndex, e.target.value, allRulesForMenu[e.target.value])}
                                value=""
                            >
                                <option value="" disabled>+ 룰 추가</option>
                                {Object.entries(allRulesForMenu).map(([key, rule]) => (
                                    <option key={key} value={key}>{rule.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                            {(scores[holeNumber]?.[playerIndex] || []).map((ruleKey, ruleIndex) => {
                                const rule = allRulesForMenu[ruleKey];
                                if (!rule) return null;
                                const bgColor = rule.amount > 0 ? 'bg-danger' : (rule.amount < 0 ? 'bg-success' : 'bg-secondary');
                                return (
                                    <span
                                        key={ruleIndex}
                                        className={`flex items-center px-2 py-1 rounded-full text-xs text-white cursor-pointer shadow-sm transition-transform hover:scale-105 ${bgColor}`}
                                        onClick={() => removeRuleFromPlayer(holeNumber, playerIndex, ruleIndex)}
                                    >
                                        {rule.name}
                                        <span className="ml-1.5 text-white text-opacity-80">×</span>
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


function Scorecard({ players, scores, allRulesForMenu, addRuleToPlayer, removeRuleFromPlayer, resetHole }) {
  return (
    <div className="p-6 border-b border-light-gray">
       <h2 className="text-2xl font-bold mb-5 flex items-center">
        <span className="w-1 h-5 bg-primary rounded-sm mr-2.5"></span>
        ⛳ 홀별 스코어 기록
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