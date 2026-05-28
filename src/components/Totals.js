import React from 'react';

function Totals({ totalScores, totalSectionRef }) {
  const hasScores = Object.keys(totalScores).length > 0;

  return (
    <div className="p-6 bg-card-bg rounded-lg border border-border-color shadow-sm transition-all duration-300" ref={totalSectionRef}>
      <h2 className="text-xl font-bold mb-5 text-primary flex items-center">
        <span role="img" aria-label="totals-icon" className="mr-2">🏆</span>
        최종 정산
      </h2>
      {hasScores ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Object.entries(totalScores).map(([player, total]) => (
                <div className="bg-background/60 backdrop-blur-sm p-5 rounded-lg border border-border-color text-center transition-all hover:scale-[1.02] hover:shadow-md" key={player}>
                    <div className="text-sm font-semibold text-text-secondary mb-2">{player}</div>
                    <div className={`text-2xl font-black tracking-tight ${total > 0 ? 'text-danger' : total < 0 ? 'text-primary' : 'text-text-primary'}`}>
                        {`${total > 0 ? '+' : ''}${total.toLocaleString()}원`}
                    </div>
                </div>
            ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-background/20 rounded-lg border border-dashed border-border-color">
            <div className="text-6xl mb-4 animate-bounce">🏆</div>
            <p className="text-text-secondary font-medium">플레이어를 추가하고 스코어를 기록하세요</p>
        </div>
      )}
    </div>
  );
}

export default Totals;