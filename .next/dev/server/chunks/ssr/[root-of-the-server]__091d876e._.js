module.exports = [
"[project]/src/components/Header.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "bg-primary text-white p-8 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-2",
                children: "🏌️ 골프 OECD 스코어보드"
            }, void 0, false, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-base opacity-90",
                children: "재밌게 칩시다~"
            }, void 0, false, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Header;
}),
"[project]/src/components/PlayerSetup.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function PlayerSetup({ players, handlePlayerNameChange, addPlayer, removePlayer, resetAll, resetScoresFn }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "p-6 bg-white rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-5 text-primary flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        role: "img",
                        "aria-label": "player-icon",
                        className: "mr-2",
                        children: "👥"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerSetup.js",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    "플레이어 설정 (최대 5명)"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerSetup.js",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                id: "playerInputs",
                className: "space-y-4",
                children: players.map((player, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: `플레이어 ${index + 1} 이름`,
                                maxLength: "10",
                                className: "flex-1 p-2 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-primary transition-colors",
                                value: player,
                                onChange: (e)=>handlePlayerNameChange(index, e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerSetup.js",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "bg-transparent border-none text-danger text-2xl cursor-pointer p-1 opacity-70 hover:opacity-100 transition-opacity",
                                onClick: ()=>removePlayer(index),
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerSetup.js",
                                lineNumber: 22,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/PlayerSetup.js",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerSetup.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mt-6 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "bg-primary text-white border-none py-2 px-4 rounded-md cursor-pointer text-base font-medium transition-all hover:bg-primary-dark",
                        onClick: addPlayer,
                        children: "+ 플레이어 추가"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerSetup.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "bg-light-gray text-dark-gray border border-gray-300 py-2 px-4 rounded-md cursor-pointer text-base font-medium transition-all hover:bg-gray-200 flex items-center justify-center",
                        onClick: resetAll,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "lucide lucide-rotate-cw w-4 h-4 mr-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                        d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerSetup.js",
                                        lineNumber: 43,
                                        columnNumber: 238
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                        d: "M21 3v5h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerSetup.js",
                                        lineNumber: 43,
                                        columnNumber: 305
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PlayerSetup.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            "전체 초기화"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PlayerSetup.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "bg-danger text-white border-none py-2 px-4 rounded-md cursor-pointer text-base font-medium transition-all hover:opacity-90",
                        onClick: resetScoresFn,
                        children: "스코어 기록 초기화"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerSetup.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerSetup.js",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlayerSetup.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = PlayerSetup;
}),
"[project]/src/components/RuleSetup.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function RuleSetup({ rules, handleRuleAmountChange, customRules, customRuleName, setCustomRuleName, customRuleAmount, setCustomRuleAmount, addCustomRule, removeCustomRule }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "p-6 bg-white rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-5 text-primary flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        role: "img",
                        "aria-label": "rules-icon",
                        className: "mr-2",
                        children: "⚙️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RuleSetup.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    "룰 별 벌금 설정"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RuleSetup.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: Object.entries(rules).map(([key, rule])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-background p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                className: "flex-1 text-base font-medium text-text-primary",
                                children: rule.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleSetup.js",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: rule.amount,
                                min: "0",
                                step: "100",
                                className: "w-24 p-2 bg-white border border-gray-300 rounded-md text-center text-sm",
                                onChange: (e)=>handleRuleAmountChange(key, e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleSetup.js",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-text-primary",
                                children: "원"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleSetup.js",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/src/components/RuleSetup.js",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/RuleSetup.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "rounded-lg p-5 mt-6 border border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mb-4 text-primary flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                role: "img",
                                "aria-label": "custom-rule-icon",
                                className: "mr-2",
                                children: "🎯"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleSetup.js",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            "커스텀 룰 추가/제거"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RuleSetup.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-4 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "룰 이름 (예: 원펏, 양파)",
                                maxLength: "15",
                                className: "flex-1 p-2 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-primary transition-colors",
                                value: customRuleName,
                                onChange: (e)=>setCustomRuleName(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleSetup.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "금액",
                                step: "100",
                                className: "w-32 p-2 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-primary transition-colors text-center",
                                value: customRuleAmount,
                                onChange: (e)=>setCustomRuleAmount(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleSetup.js",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "bg-secondary text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm font-medium transition-colors hover:opacity-90",
                                onClick: addCustomRule,
                                children: "+ 추가"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleSetup.js",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RuleSetup.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mt-4",
                        children: Object.entries(customRules).map(([name, rule])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center py-2 px-3 bg-gray-100 rounded-full border border-gray-200 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-text-primary",
                                                children: name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RuleSetup.js",
                                                lineNumber: 70,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: `text-xs ${rule.amount >= 0 ? 'text-danger' : 'text-primary'}`,
                                                children: `${rule.amount >= 0 ? '+' : ''}${rule.amount.toLocaleString()}원`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RuleSetup.js",
                                                lineNumber: 71,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RuleSetup.js",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "bg-transparent border-none text-danger text-lg ml-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity",
                                        onClick: ()=>removeCustomRule(name),
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RuleSetup.js",
                                        lineNumber: 75,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, name, true, {
                                fileName: "[project]/src/components/RuleSetup.js",
                                lineNumber: 68,
                                columnNumber: 16
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RuleSetup.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RuleSetup.js",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RuleSetup.js",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = RuleSetup;
}),
"[project]/src/components/Scorecard.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function Hole({ holeNumber, players, scores, allRulesForMenu, addRuleToPlayer, removeRuleFromPlayer, resetHole }) {
    // A simplified design for the hole, based on the screenshot
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "border border-gray-200 rounded-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-lg font-bold text-primary",
                        children: [
                            holeNumber,
                            "번 홀"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Scorecard.js",
                        lineNumber: 8,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "bg-light-gray text-dark-gray border border-gray-300 py-1 px-3 rounded-md text-xs cursor-pointer hover:bg-gray-200",
                        onClick: ()=>resetHole(holeNumber),
                        children: "초기화"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Scorecard.js",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Scorecard.js",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: players.map((player, playerIndex)=>{
                    if (!player) return null;
                    const playerScores = scores[holeNumber]?.[playerIndex] || [];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-text-primary",
                                        children: player
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Scorecard.js",
                                        lineNumber: 23,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                        className: "bg-gray-100 text-dark-gray text-xs px-2 py-1 rounded-full border border-transparent hover:bg-gray-200 cursor-pointer focus:outline-none",
                                        onChange: (e)=>addRuleToPlayer(holeNumber, playerIndex, e.target.value),
                                        value: "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                children: "+ 룰 추가"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Scorecard.js",
                                                lineNumber: 29,
                                                columnNumber: 37
                                            }, this),
                                            Object.entries(allRulesForMenu).map(([key, rule])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: key,
                                                    children: rule.name
                                                }, key, false, {
                                                    fileName: "[project]/src/components/Scorecard.js",
                                                    lineNumber: 31,
                                                    columnNumber: 41
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Scorecard.js",
                                        lineNumber: 24,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Scorecard.js",
                                lineNumber: 22,
                                columnNumber: 29
                            }, this),
                            playerScores.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5 pt-2",
                                children: playerScores.map((ruleKey, ruleIndex)=>{
                                    const rule = allRulesForMenu[ruleKey];
                                    if (!rule) return null;
                                    const isPositive = rule.amount >= 0;
                                    const bgColor = isPositive ? 'bg-red-100' : 'bg-green-100';
                                    const textColor = isPositive ? 'text-danger' : 'text-primary';
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: `flex items-center px-2 py-1 rounded-full text-xs cursor-pointer ${bgColor} ${textColor}`,
                                        onClick: ()=>removeRuleFromPlayer(holeNumber, playerIndex, ruleIndex),
                                        children: [
                                            rule.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "ml-1.5 opacity-70",
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Scorecard.js",
                                                lineNumber: 50,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, ruleIndex, true, {
                                        fileName: "[project]/src/components/Scorecard.js",
                                        lineNumber: 44,
                                        columnNumber: 45
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/Scorecard.js",
                                lineNumber: 36,
                                columnNumber: 33
                            }, this)
                        ]
                    }, playerIndex, true, {
                        fileName: "[project]/src/components/Scorecard.js",
                        lineNumber: 21,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Scorecard.js",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Scorecard.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
function Scorecard({ players, scores, allRulesForMenu, addRuleToPlayer, removeRuleFromPlayer, resetHole }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "p-6 bg-white rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-5 text-primary flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        role: "img",
                        "aria-label": "scorecard-icon",
                        className: "mr-2",
                        children: "⛳"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Scorecard.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    "홀별 스코어 기록"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Scorecard.js",
                lineNumber: 68,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-5 mt-4",
                children: [
                    ...Array(18)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Hole, {
                        holeNumber: i + 1,
                        players: players,
                        scores: scores,
                        allRulesForMenu: allRulesForMenu,
                        addRuleToPlayer: addRuleToPlayer,
                        removeRuleFromPlayer: removeRuleFromPlayer,
                        resetHole: resetHole
                    }, i + 1, false, {
                        fileName: "[project]/src/components/Scorecard.js",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Scorecard.js",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Scorecard.js",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Scorecard;
}),
"[project]/src/components/Totals.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function Totals({ totalScores, totalSectionRef }) {
    const hasScores = Object.keys(totalScores).length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "p-6 bg-white rounded-lg shadow-md",
        ref: totalSectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-5 text-primary flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        role: "img",
                        "aria-label": "totals-icon",
                        className: "mr-2",
                        children: "🏆"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Totals.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    "최종 정산"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Totals.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            hasScores ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",
                children: Object.entries(totalScores).map(([player, total])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-background p-4 rounded-lg text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-sm text-text-primary opacity-80 mb-2",
                                children: player
                            }, void 0, false, {
                                fileName: "[project]/src/components/Totals.js",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `text-2xl font-bold ${total >= 0 ? 'text-danger' : 'text-primary'}`,
                                children: `${total >= 0 ? '+' : ''}${total.toLocaleString()}원`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Totals.js",
                                lineNumber: 17,
                                columnNumber: 21
                            }, this)
                        ]
                    }, player, true, {
                        fileName: "[project]/src/components/Totals.js",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Totals.js",
                lineNumber: 13,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-6xl text-primary mb-4",
                        children: "🏆"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Totals.js",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-text-primary",
                        children: "플레이어를 추가하고 스코어를 기록하세요"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Totals.js",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Totals.js",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Totals.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Totals;
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerSetup$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlayerSetup.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RuleSetup$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RuleSetup.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Scorecard$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Scorecard.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Totals$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Totals.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
function HomePage() {
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([
        ''
    ]);
    const [rules, setRules] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        ob: {
            name: '오비',
            amount: 1000,
            color: 'danger'
        },
        hazard: {
            name: '해저드',
            amount: 1000,
            color: 'warning'
        },
        mulligan: {
            name: '멀리건',
            amount: 1000,
            color: 'orange-600'
        },
        bunker: {
            name: '벙커',
            amount: 1000,
            color: 'warning'
        },
        threePutt: {
            name: '쓰리퍼트',
            amount: 1000,
            color: 'purple-500'
        },
        tripleBogey: {
            name: '트리플보기',
            amount: 1000,
            color: 'orange-500'
        } // Using a direct Tailwind color here
    });
    const [customRules, setCustomRules] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [scores, setScores] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [totalScores, setTotalScores] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [customRuleName, setCustomRuleName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [customRuleAmount, setCustomRuleAmount] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [isAtTotal, setIsAtTotal] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [lastScrollPosition, setLastScrollPosition] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const totalSectionRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null); // Create a ref for the total section
    // This useEffect will run once on mount to load data from localStorage
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const savedState = localStorage.getItem('golfOECDGame');
        if (savedState) {
            const state = JSON.parse(savedState);
            if (state.players) setPlayers(state.players);
            if (state.ruleValues) {
                const newRules = {
                    ...rules
                };
                for(const key in state.ruleValues){
                    if (newRules[key]) {
                        newRules[key].amount = parseInt(state.ruleValues[key], 10);
                    }
                }
                setRules(newRules);
            }
            if (state.customRules) setCustomRules(state.customRules);
            if (state.scores) setScores(state.scores);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array means this effect runs only once
    // This useEffect will run whenever players, rules, customRules or scores change to save to localStorage and update totals
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const playerTotals = players.reduce((acc, player)=>{
            if (player) acc[player] = 0;
            return acc;
        }, {});
        const allRules = {
            ...rules,
            ...Object.fromEntries(Object.entries(customRules).map(([name, rule])=>[
                    name,
                    {
                        ...rule,
                        name
                    }
                ]))
        };
        for(const hole in scores){
            for(const playerIndex in scores[hole]){
                const player = players[playerIndex];
                if (player) {
                    scores[hole][playerIndex].forEach((ruleKey)=>{
                        const rule = allRules[ruleKey];
                        if (rule) {
                            playerTotals[player] += rule.amount;
                        }
                    });
                }
            }
        }
        setTotalScores(playerTotals);
        const stateToSave = {
            players,
            ruleValues: Object.fromEntries(Object.entries(rules).map(([key, rule])=>[
                    key,
                    rule.amount
                ])),
            customRules,
            scores
        };
        localStorage.setItem('golfOECDGame', JSON.stringify(stateToSave));
    }, [
        players,
        rules,
        customRules,
        scores
    ]);
    const handlePlayerNameChange = (index, newName)=>{
        const updatedPlayers = [
            ...players
        ];
        updatedPlayers[index] = newName;
        setPlayers(updatedPlayers);
    };
    const addPlayer = ()=>{
        if (players.length < 5) {
            setPlayers([
                ...players,
                ''
            ]);
        } else {
            alert('최대 5명까지만 추가할 수 있습니다.');
        }
    };
    const removePlayer = (index)=>{
        const updatedPlayers = [
            ...players
        ];
        updatedPlayers.splice(index, 1);
        setPlayers(updatedPlayers);
    };
    const handleRuleAmountChange = (ruleKey, newAmount)=>{
        const updatedRules = {
            ...rules
        };
        updatedRules[ruleKey].amount = parseInt(newAmount, 10) || 0;
        setRules(updatedRules);
    };
    const addCustomRule = ()=>{
        if (!customRuleName) {
            alert('룰 이름을 입력해주세요.');
            return;
        }
        if (customRules[customRuleName] || Object.values(rules).some((r)=>r.name === customRuleName)) {
            alert('이미 존재하는 룰 이름입니다.');
            return;
        }
        const newCustomRules = {
            ...customRules
        };
        newCustomRules[customRuleName] = {
            amount: parseInt(customRuleAmount, 10) || 0
        };
        setCustomRules(newCustomRules);
        setCustomRuleName('');
        setCustomRuleAmount('');
    };
    const removeCustomRule = (ruleName)=>{
        const newCustomRules = {
            ...customRules
        };
        delete newCustomRules[ruleName];
        setCustomRules(newCustomRules);
    };
    const addRuleToPlayer = (holeNumber, playerIndex, ruleKey, ruleData)=>{
        const newScores = {
            ...scores
        };
        if (!newScores[holeNumber]) newScores[holeNumber] = {};
        if (!newScores[holeNumber][playerIndex]) newScores[holeNumber][playerIndex] = [];
        newScores[holeNumber][playerIndex].push(ruleKey);
        setScores(newScores);
    };
    const removeRuleFromPlayer = (holeNumber, playerIndex, ruleIndex)=>{
        const newScores = {
            ...scores
        };
        if (newScores[holeNumber] && newScores[holeNumber][playerIndex]) {
            newScores[holeNumber][playerIndex].splice(ruleIndex, 1);
            setScores(newScores);
        }
    };
    const resetHole = (holeNumber)=>{
        if (!window.confirm(`${holeNumber}번 홀의 모든 기록을 초기화하시겠습니까?`)) return;
        const newScores = {
            ...scores
        };
        if (newScores[holeNumber]) {
            delete newScores[holeNumber];
            setScores(newScores);
        }
    };
    const resetAll = ()=>{
        if (!window.confirm('모든 데이터를 초기화하시겠습니까?')) return;
        setPlayers([
            ''
        ]);
        setRules({
            ob: {
                name: '오비',
                amount: 1000,
                color: 'danger'
            },
            hazard: {
                name: '해저드',
                amount: 1000,
                color: 'warning'
            },
            mulligan: {
                name: '멀리건',
                amount: 1000,
                color: 'orange-600'
            },
            bunker: {
                name: '벙커',
                amount: 1000,
                color: 'warning'
            },
            threePutt: {
                name: '쓰리퍼트',
                amount: 1000,
                color: 'purple-500'
            },
            tripleBogey: {
                name: '트리플보기',
                amount: 1000,
                color: 'orange-500'
            }
        });
        setCustomRules({});
        setScores({});
    };
    const resetScoresFn = ()=>{
        if (!window.confirm('모든 홀의 스코어 기록을 초기화하시겠습니까?')) return;
        setScores({});
    };
    const scrollToTotal = ()=>{
        if (totalSectionRef.current) {
            if (isAtTotal) {
                window.scrollTo({
                    top: lastScrollPosition,
                    behavior: 'smooth'
                });
                setIsAtTotal(false);
            } else {
                setLastScrollPosition(window.scrollY);
                totalSectionRef.current.scrollIntoView({
                    behavior: 'smooth'
                }); // Use the ref here
                setIsAtTotal(true);
            }
        }
    };
    const allRulesForMenu = {
        ...rules,
        ...Object.fromEntries(Object.entries(customRules).map(([name, rule])=>[
                name,
                {
                    ...rule,
                    name
                }
            ]))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto p-4 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "space-y-8 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerSetup$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        players: players,
                        handlePlayerNameChange: handlePlayerNameChange,
                        addPlayer: addPlayer,
                        removePlayer: removePlayer,
                        resetAll: resetAll,
                        resetScoresFn: resetScoresFn
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RuleSetup$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        rules: rules,
                        handleRuleAmountChange: handleRuleAmountChange,
                        customRules: customRules,
                        customRuleName: customRuleName,
                        setCustomRuleName: setCustomRuleName,
                        customRuleAmount: customRuleAmount,
                        setCustomRuleAmount: setCustomRuleAmount,
                        addCustomRule: addCustomRule,
                        removeCustomRule: removeCustomRule
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Scorecard$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        players: players,
                        scores: scores,
                        allRulesForMenu: allRulesForMenu,
                        addRuleToPlayer: addRuleToPlayer,
                        removeRuleFromPlayer: removeRuleFromPlayer,
                        resetHole: resetHole
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Totals$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        totalScores: totalScores,
                        totalSectionRef: totalSectionRef
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                className: "fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full text-2xl cursor-pointer shadow-lg transition-all hover:bg-primary-dark hover:scale-110 flex justify-center items-center",
                onClick: scrollToTotal,
                children: isAtTotal ? '⇑' : '🏆'
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 237,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = HomePage;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__091d876e._.js.map