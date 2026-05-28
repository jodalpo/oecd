import React from 'react';

function ScoreSummaryTable({ players, scores, allRulesForMenu }) {
  const activePlayers = players.filter(p => p !== '');
  const holes = Array.from({ length: 18 }, (_, i) => i + 1);

  if (activePlayers.length === 0) return null;

  // 금액이 0보다 큰 벌칙 룰인지 판별 (음수 금액 보너스는 제외)
  const isPenalty = (ruleKey) => {
    const rule = allRulesForMenu?.[ruleKey];
    return rule ? rule.amount >= 0 : true;
  };

  // Calculate stats filtering out negative rules (bonuses)
  const getHoleScoreCount = (holeNum, playerIndex) => {
    const playerHoleScores = scores[holeNum]?.[playerIndex] || [];
    return playerHoleScores.filter(isPenalty).length;
  };

  const getPlayerTotalPenalties = (playerIndex) => {
    return Object.values(scores).reduce((sum, holeScores) => {
      const playerHoleScores = holeScores[playerIndex] || [];
      return sum + playerHoleScores.filter(isPenalty).length;
    }, 0);
  };

  return (
    <div className="p-6 bg-card-bg rounded-lg border border-border-color shadow-sm transition-all duration-300">
      <h2 className="text-xl font-bold mb-4 text-primary flex items-center">
        <span role="img" aria-label="summary-icon" className="mr-2">📊</span>
        18홀 통합 요약 표
      </h2>
      <p className="text-xs text-text-secondary mb-4">
        각 홀별 플레이어의 벌칙 기록 횟수가 실시간 집계됩니다. (숫자가 높을수록 벌칙이 많이 부과됨)
      </p>
      
      <div className="overflow-x-auto border border-border-color rounded-lg scrollbar-thin">
        <table className="w-full text-center border-collapse text-xs min-w-[700px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border-color text-primary font-bold">
              <th className="py-3 px-4 text-left font-bold sticky left-0 bg-card-bg shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] border-r border-border-color w-20">
                플레이어
              </th>
              {holes.map(hole => (
                <th key={hole} className="py-2.5 px-1 font-bold border-r border-border-color/50 min-w-[32px]">
                  {hole}
                </th>
              ))}
              <th className="py-3 px-4 font-bold bg-primary/10 text-primary border-l border-border-color min-w-[50px]">
                합계
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, playerIndex) => {
              if (!player) return null;
              const totalPenalties = getPlayerTotalPenalties(playerIndex);
              
              return (
                <tr 
                  key={playerIndex} 
                  className="border-b border-border-color/60 last:border-b-0 hover:bg-background/30 transition-colors"
                >
                  <td className="py-3 px-4 text-left font-bold text-text-primary sticky left-0 bg-card-bg shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] border-r border-border-color w-20 truncate">
                    {player}
                  </td>
                  {holes.map(hole => {
                    const count = getHoleScoreCount(hole, playerIndex);
                    const hasPenalties = count > 0;
                    
                    return (
                      <td 
                        key={hole} 
                        className={`py-2.5 px-1 border-r border-border-color/40 text-sm font-medium ${
                          hasPenalties 
                            ? 'bg-danger/5 text-danger font-bold' 
                            : 'text-text-secondary/60'
                        }`}
                      >
                        {hasPenalties ? count : '-'}
                      </td>
                    );
                  })}
                  <td className="py-3 px-4 font-extrabold bg-primary/5 text-primary border-l border-border-color text-sm">
                    {totalPenalties}회
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScoreSummaryTable;
