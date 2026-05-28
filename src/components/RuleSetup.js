import React from 'react';

function RuleSetup({
  rules,
  handleRuleAmountChange,
  customRules,
  customRuleName,
  setCustomRuleName,
  customRuleAmount,
  setCustomRuleAmount,
  addCustomRule,
  removeCustomRule,
}) {
  return (
    <div className="p-6 bg-card-bg rounded-lg border border-border-color shadow-sm transition-all duration-300">
      <h2 className="text-xl font-bold mb-5 text-primary flex items-center">
        <span role="img" aria-label="rules-icon" className="mr-2">⚙️</span>
        룰 별 벌금 설정
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(rules).map(([key, rule]) => (
          <div className="flex items-center gap-2 bg-background/50 p-3 rounded-lg border border-border-color/30" key={key}>
            <label className="flex-1 text-sm font-semibold text-text-primary">{rule.name}</label>
            <input
              type="number"
              value={rule.amount}
              min="0"
              step="100"
              className="w-28 p-2 bg-card-bg border border-border-color rounded-md text-center text-sm text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/35"
              onChange={(e) => handleRuleAmountChange(key, e.target.value)}
            />
            <span className="text-sm font-medium text-text-secondary">원</span>
          </div>
        ))}
      </div>

      <div className="rounded-lg p-5 mt-6 border border-border-color bg-background/30">
        <h3 className="text-base font-bold mb-4 text-primary flex items-center">
          <span role="img" aria-label="custom-rule-icon" className="mr-2">🎯</span>
          커스텀 룰 추가/제거
        </h3>
        <div className="flex flex-wrap gap-3 mb-4 items-center">
          <input
            type="text"
            placeholder="룰 이름 (예: 원펏, 양파)"
            maxLength="15"
            className="flex-1 min-w-[150px] p-2 bg-transparent border-b-2 border-border-color focus:outline-none focus:border-primary text-text-primary transition-colors placeholder:text-text-secondary/50 text-sm"
            value={customRuleName}
            onChange={(e) => setCustomRuleName(e.target.value)}
          />
          <input
            type="number"
            placeholder="금액"
            step="100"
            className="w-32 p-2 bg-transparent border-b-2 border-border-color focus:outline-none focus:border-primary text-text-primary transition-colors text-center text-sm"
            value={customRuleAmount}
            onChange={(e) => setCustomRuleAmount(e.target.value)}
          />
          <button 
            className="bg-secondary text-white border-none py-2 px-5 rounded-md cursor-pointer text-sm font-semibold transition-colors hover:opacity-90 shadow-sm"
            onClick={addCustomRule}
          >
            + 추가
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {Object.entries(customRules).map(([name, rule]) => (
               <div className="flex items-center py-2 px-3 bg-card-bg rounded-full border border-border-color text-xs shadow-sm" key={name}>
                  <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-primary">{name}</span>
                      <span className={`font-bold ${rule.amount >= 0 ? 'text-danger' : 'text-primary'}`}>
                          {`${rule.amount >= 0 ? '+' : ''}${rule.amount.toLocaleString()}원`}
                      </span>
                  </div>
                  <button 
                    className="bg-transparent border-none text-danger text-lg ml-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity leading-none" 
                    onClick={() => removeCustomRule(name)}
                  >
                    ×
                  </button>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RuleSetup;