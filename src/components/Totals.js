import React, { useState } from 'react';

function Totals({ totalScores, totalSectionRef }) {
  const hasScores = Object.keys(totalScores).length > 0;
  const [copied, setCopied] = useState(false);

  const handleCopyResults = () => {
    if (!hasScores) return;

    let text = `⛳ 골프 OECD 최종 정산 결과 ⛳\n\n[플레이어별 정산 금액]\n`;
    Object.entries(totalScores).forEach(([player, total]) => {
      const sign = total > 0 ? '+' : '';
      text += `- ${player}: ${sign}${total.toLocaleString()}원\n`;
    });
    text += `\n즐거운 라운딩이었습니다! 🏌️‍♂️`;

    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => {
        console.error('클립보드 복사 실패:', err);
        alert('복사에 실패했습니다. 수동으로 복사해 주세요.');
      });
  };

  return (
    <div className="p-6 bg-card-bg rounded-lg border border-border-color shadow-sm transition-all duration-300" ref={totalSectionRef}>
      <h2 className="text-xl font-bold mb-5 text-primary flex items-center">
        <span role="img" aria-label="totals-icon" className="mr-2">🏆</span>
        최종 정산
      </h2>
      {hasScores ? (
        <div className="space-y-5">
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
          <div className="flex justify-end pt-2">
            <button
              onClick={handleCopyResults}
              className={`flex items-center gap-2 py-2.5 px-6 rounded-md text-sm font-semibold cursor-pointer transition-all shadow-sm ${
                copied
                  ? 'bg-success text-white ring-2 ring-success/20'
                  : 'bg-primary text-white hover:bg-primary-dark hover:shadow-md'
              }`}
            >
              {copied ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg>
                  복사 완료! ✅
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                  정산 결과 복사하기
                </>
              )}
            </button>
          </div>
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