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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-5 text-primary flex items-center">
        <span role="img" aria-label="rules-icon" className="mr-2">⚙️</span>
        룰 별 벌금 설정
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(rules).map(([key, rule]) => (
          <div className="flex items-center gap-2 bg-background p-3 rounded-lg" key={key}>
            <label className="flex-1 text-base font-medium text-text-primary">{rule.name}</label>
            <input
              type="number"
              value={rule.amount}
              min="0"
              step="100"
              className="w-24 p-2 bg-white border border-gray-300 rounded-md text-center text-sm"
              onChange={(e) => handleRuleAmountChange(key, e.target.value)}
            />
            <span className="text-text-primary">원</span>
          </div>
        ))}
      </div>

      <div className="rounded-lg p-5 mt-6 border border-gray-200">
        <h3 className="text-lg font-bold mb-4 text-primary flex items-center">
          <span role="img" aria-label="custom-rule-icon" className="mr-2">🎯</span>
          커스텀 룰 추가/제거
        </h3>
        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <input
            type="text"
            placeholder="룰 이름 (예: 원펏, 양파)"
            maxLength="15"
            className="flex-1 p-2 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-primary transition-colors"
            value={customRuleName}
            onChange={(e) => setCustomRuleName(e.target.value)}
          />
          <input
            type="number"
            placeholder="금액"
            step="100"
            className="w-32 p-2 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-primary transition-colors text-center"
            value={customRuleAmount}
            onChange={(e) => setCustomRuleAmount(e.target.value)}
          />
          <button 
            className="bg-secondary text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm font-medium transition-colors hover:opacity-90"
            onClick={addCustomRule}
          >
            + 추가
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {Object.entries(customRules).map(([name, rule]) => (
               <div className="flex items-center py-2 px-3 bg-gray-100 rounded-full border border-gray-200 text-sm" key={name}>
                  <div className="flex items-center gap-2">
                      <span className="font-medium text-text-primary">{name}</span>
                      <span className={`text-xs ${rule.amount >= 0 ? 'text-danger' : 'text-primary'}`}>
                          {`${rule.amount >= 0 ? '+' : ''}${rule.amount.toLocaleString()}원`}
                      </span>
                  </div>
                  <button 
                    className="bg-transparent border-none text-danger text-lg ml-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" 
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