import React from 'react';

function ScoreSummaryTable({ players, scores, allRulesForMenu }) {
  const activePlayers = players.filter(p => p !== '');
  const holes = Array.from({ length: 18 }, (_, i) => i + 1);

  if (activePlayers.length === 0) return null;

  // 벌칙(양수 금액) 판별
  const isPenalty = (ruleKey) => {
    const rule = allRulesForMenu?.[ruleKey];
    return rule ? rule.amount >= 0 : true;
  };

  // 보너스(음수 금액) 판별
  const isBonus = (ruleKey) => {
    const rule = allRulesForMenu?.[ruleKey];
    return rule ? rule.amount < 0 : false;
  };

  // 홀별 벌칙 횟수 산출
  const getHolePenaltyCount = (holeNum, playerIndex) => {
    const playerHoleScores = scores[holeNum]?.[playerIndex] || [];
    return playerHoleScores.filter(isPenalty).length;
  };

  // 홀별 보너스 횟수 산출
  const getHoleBonusCount = (holeNum, playerIndex) => {
    const playerHoleScores = scores[holeNum]?.[playerIndex] || [];
    return playerHoleScores.filter(isBonus).length;
  };

  // 누적 총 벌칙 횟수
  const getPlayerTotalPenalties = (playerIndex) => {
    return Object.values(scores).reduce((sum, holeScores) => {
      const playerHoleScores = holeScores[playerIndex] || [];
      return sum + playerHoleScores.filter(isPenalty).length;
    }, 0);
  };

  // 누적 총 보너스 횟수
  const getPlayerTotalBonuses = (playerIndex) => {
    return Object.values(scores).reduce((sum, holeScores) => {
      const playerHoleScores = holeScores[playerIndex] || [];
      return sum + playerHoleScores.filter(isBonus).length;
    }, 0);
  };

  return (
    <div className="p-6 bg-card-bg rounded-lg border border-border-color shadow-sm transition-all duration-300">
      <h2 className="text-xl font-bold mb-4 text-primary flex items-center">
        <span role="img" aria-label="summary-icon" className="mr-2">📊</span>
        18홀 통합 요약 표
      </h2>
      <p className="text-xs text-text-secondary mb-4">
        벌칙 횟수는 빨간색 숫자로, 감면 보너스 횟수는 녹색 괄호 <span className="text-success font-semibold">( )</span> 안의 숫자로 실시간 집계됩니다.
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
              <th className="py-3 px-4 font-bold bg-primary/10 text-primary border-l border-border-color min-w-[65px]">
                합계
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, playerIndex) => {
              if (!player) return null;
              const totalPenalties = getPlayerTotalPenalties(playerIndex);
              const totalBonuses = getPlayerTotalBonuses(playerIndex);
              
              return (
                <tr 
                  key={playerIndex} 
                  className="border-b border-border-color/60 last:border-b-0 hover:bg-background/30 transition-colors"
                >
                  <td className="py-3 px-4 text-left font-bold text-text-primary sticky left-0 bg-card-bg shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] border-r border-border-color w-20 truncate">
                    {player}
                  </td>
                  {holes.map(hole => {
                    const penaltyCount = getHolePenaltyCount(hole, playerIndex);
                    const bonusCount = getHoleBonusCount(hole, playerIndex);
                    const hasData = penaltyCount > 0 || bonusCount > 0;
                    
                    return (
                      <td 
                        key={hole} 
                        className={`py-2.5 px-1 border-r border-border-color/40 text-sm font-medium ${
                          hasData ? 'bg-background/10' : 'text-text-secondary/40'
                        }`}
                      >
                        {hasData ? (
                          <div className="flex items-center justify-center gap-0.5">
                            {penaltyCount > 0 && (
                              <span className="text-danger font-bold">{penaltyCount}</span>
                            )}
                            {bonusCount > 0 && (
                              <span className="text-success font-semibold">({bonusCount})</span>
                            )}
                          </div>
                        ) : '-'}
                      </td>
                    );
                  })}
                  <td className="py-3 px-4 font-extrabold bg-primary/5 text-primary border-l border-border-color text-sm">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-danger leading-tight">{totalPenalties}회</span>
                      {totalBonuses > 0 && (
                        <span className="text-success text-xs font-semibold leading-tight">({totalBonuses}회)</span>
                      )}
                    </div>
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
