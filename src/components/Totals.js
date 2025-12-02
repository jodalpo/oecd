import React from 'react';

function Totals({ totalScores, totalSectionRef }) {
  const hasScores = Object.keys(totalScores).length > 0;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md" ref={totalSectionRef}>
      <h2 className="text-xl font-bold mb-5 text-primary flex items-center">
        <span role="img" aria-label="totals-icon" className="mr-2">🏆</span>
        최종 정산
      </h2>
      {hasScores ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Object.entries(totalScores).map(([player, total]) => (
                <div className="bg-background p-4 rounded-lg text-center" key={player}>
                    <div className="text-sm text-text-primary opacity-80 mb-2">{player}</div>
                    <div className={`text-2xl font-bold ${total >= 0 ? 'text-danger' : 'text-primary'}`}>
                        {`${total >= 0 ? '+' : ''}${total.toLocaleString()}원`}
                    </div>
                </div>
            ))}
        </div>
      ) : (
        <div className="text-center py-12">
            <div className="text-6xl text-primary mb-4">🏆</div>
            <p className="text-text-primary">플레이어를 추가하고 스코어를 기록하세요</p>
        </div>
      )}
    </div>
  );
}

export default Totals;