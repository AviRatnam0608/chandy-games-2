"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/connections/page",{

/***/ "(app-pages-browser)/./components/connections/GameBoard.tsx":
/*!**********************************************!*\
  !*** ./components/connections/GameBoard.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: function() { return /* binding */ GameBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _GameProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameProvider */ \"(app-pages-browser)/./components/connections/GameProvider.tsx\");\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ \"(app-pages-browser)/./components/connections/Grid.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _GameOverPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameOverPopup */ \"(app-pages-browser)/./components/connections/GameOverPopup.tsx\");\n/* __next_internal_client_entry_do_not_use__ GameBoard auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// At the top of the file, add these colors\nconst GROUP_COLORS = [\n    \"bg-yellow-300\",\n    \"bg-green-300\",\n    \"bg-blue-300\",\n    \"bg-purple-300\"\n];\nfunction GameBoard() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { mistakes, submitGuess, selectedTiles, gameComplete, foundGroupsWithThemes, startNewGame } = (0,_GameProvider__WEBPACK_IMPORTED_MODULE_1__.useGame)();\n    const isGameOver = mistakes >= 4;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-md mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Mistakes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-1\",\n                        children: [\n                            ...Array(4)\n                        ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-2 h-2 rounded-full \".concat(i < mistakes ? \"bg-red-500\" : \"bg-gray-800\")\n                            }, i, false, {\n                                fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    gameComplete && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Game Complete!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: foundGroupsWithThemes.map((group, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-2 p-2 \".concat(GROUP_COLORS[index], \" rounded\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-bold text-sm mb-1\",\n                                children: group.theme\n                            }, void 0, false, {\n                                fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-4 gap-1\",\n                                children: group.words.map((word, wordIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\".concat(GROUP_COLORS[index].replace(\"bg-\", \"bg-\").replace(\"-300\", \"-200\"), \" p-1 text-center rounded text-sm\"),\n                                        children: word\n                                    }, wordIndex, false, {\n                                        fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Grid__WEBPACK_IMPORTED_MODULE_2__.Grid, {}, void 0, false, {\n                fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            mistakes < 4 && !gameComplete && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    onClick: submitGuess,\n                    disabled: selectedTiles.length !== 4,\n                    variant: \"brutal_lime\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this),\n            (gameComplete || isGameOver) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameOverPopup__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                startNewGame: startNewGame,\n                router: router\n            }, void 0, false, {\n                fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/avinashratnam/Downloads/chandy-games-2/components/connections/GameBoard.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(GameBoard, \"5j1R23BJt4qAJbcmSeSlExwWPc0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _GameProvider__WEBPACK_IMPORTED_MODULE_1__.useGame\n    ];\n});\n_c = GameBoard;\nvar _c;\n$RefreshReg$(_c, \"GameBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29ubmVjdGlvbnMvR2FtZUJvYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDeUM7QUFDWDtBQUNrQjtBQUNKO0FBQ0E7QUFFNUMsMkNBQTJDO0FBQzNDLE1BQU1LLGVBQWU7SUFDbkI7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVNLFNBQVNDOztJQUNkLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNLEVBQ0pLLFFBQVEsRUFDUkMsV0FBVyxFQUNYQyxhQUFhLEVBQ2JDLFlBQVksRUFDWkMscUJBQXFCLEVBQ3JCQyxZQUFZLEVBQ2IsR0FBR2Isc0RBQU9BO0lBRVgsTUFBTWMsYUFBYU4sWUFBWTtJQUUvQixxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQUs7Ozs7OztrQ0FDTiw4REFBQ0Y7d0JBQUlDLFdBQVU7a0NBQ1o7K0JBQUlFLE1BQU07eUJBQUcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNyQiw4REFBQ047Z0NBRUNDLFdBQVcsd0JBRVYsT0FEQ0ssSUFBSWIsV0FBVyxlQUFlOytCQUYzQmE7Ozs7Ozs7Ozs7b0JBT1ZWLDhCQUFnQiw4REFBQ0k7a0NBQUk7Ozs7Ozs7Ozs7OzswQkFJeEIsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNaSixzQkFBc0JPLEdBQUcsQ0FBQyxDQUFDRyxPQUFPQyxzQkFDakMsOERBQUNSO3dCQUVDQyxXQUFXLFlBQWdDLE9BQXBCWCxZQUFZLENBQUNrQixNQUFNLEVBQUM7OzBDQUUzQyw4REFBQ1I7Z0NBQUlDLFdBQVU7MENBQTBCTSxNQUFNRSxLQUFLOzs7Ozs7MENBQ3BELDhEQUFDVDtnQ0FBSUMsV0FBVTswQ0FDWk0sTUFBTUcsS0FBSyxDQUFDTixHQUFHLENBQUMsQ0FBQ08sTUFBTUMsMEJBQ3RCLDhEQUFDWjt3Q0FFQ0MsV0FBVyxHQUVnQixPQUZiWCxZQUFZLENBQUNrQixNQUFNLENBQzlCSyxPQUFPLENBQUMsT0FBTyxPQUNmQSxPQUFPLENBQUMsUUFBUSxTQUFRO2tEQUUxQkY7dUNBTElDOzs7Ozs7Ozs7Ozt1QkFQTko7Ozs7Ozs7Ozs7MEJBb0JYLDhEQUFDdEIsdUNBQUlBOzs7OztZQUVKTyxXQUFXLEtBQUssQ0FBQ0csOEJBQ2hCLDhEQUFDSTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2QseURBQU1BO29CQUNMMkIsU0FBU3BCO29CQUNUcUIsVUFBVXBCLGNBQWNxQixNQUFNLEtBQUs7b0JBQ25DQyxTQUFROzhCQUNUOzs7Ozs7Ozs7OztZQU1IckIsQ0FBQUEsZ0JBQWdCRyxVQUFTLG1CQUN6Qiw4REFBQ1Ysc0RBQWFBO2dCQUFDUyxjQUFjQTtnQkFBY04sUUFBUUE7Ozs7Ozs7Ozs7OztBQUkzRDtHQXpFZ0JEOztRQUNDSCxzREFBU0E7UUFRcEJILGtEQUFPQTs7O0tBVEdNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29ubmVjdGlvbnMvR2FtZUJvYXJkLnRzeD81M2I3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlR2FtZSB9IGZyb20gXCIuL0dhbWVQcm92aWRlclwiO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL0dyaWRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgR2FtZU92ZXJQb3B1cCBmcm9tIFwiLi9HYW1lT3ZlclBvcHVwXCI7XG5cbi8vIEF0IHRoZSB0b3Agb2YgdGhlIGZpbGUsIGFkZCB0aGVzZSBjb2xvcnNcbmNvbnN0IEdST1VQX0NPTE9SUyA9IFtcbiAgXCJiZy15ZWxsb3ctMzAwXCIsXG4gIFwiYmctZ3JlZW4tMzAwXCIsXG4gIFwiYmctYmx1ZS0zMDBcIixcbiAgXCJiZy1wdXJwbGUtMzAwXCIsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUJvYXJkKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge1xuICAgIG1pc3Rha2VzLFxuICAgIHN1Ym1pdEd1ZXNzLFxuICAgIHNlbGVjdGVkVGlsZXMsXG4gICAgZ2FtZUNvbXBsZXRlLFxuICAgIGZvdW5kR3JvdXBzV2l0aFRoZW1lcyxcbiAgICBzdGFydE5ld0dhbWUsXG4gIH0gPSB1c2VHYW1lKCk7XG5cbiAgY29uc3QgaXNHYW1lT3ZlciA9IG1pc3Rha2VzID49IDQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBteC1hdXRvIHAtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c3Bhbj5NaXN0YWtlczwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XG4gICAgICAgICAge1suLi5BcnJheSg0KV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0yIGgtMiByb3VuZGVkLWZ1bGwgJHtcbiAgICAgICAgICAgICAgICBpIDwgbWlzdGFrZXMgPyBcImJnLXJlZC01MDBcIiA6IFwiYmctZ3JheS04MDBcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Z2FtZUNvbXBsZXRlICYmIDxkaXY+R2FtZSBDb21wbGV0ZSE8L2Rpdj59XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIERpc3BsYXkgZm91bmQgZ3JvdXBzIHdpdGggdGhlbWVzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIHtmb3VuZEdyb3Vwc1dpdGhUaGVtZXMubWFwKChncm91cCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWItMiBwLTIgJHtHUk9VUF9DT0xPUlNbaW5kZXhdfSByb3VuZGVkYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNtIG1iLTFcIj57Z3JvdXAudGhlbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTFcIj5cbiAgICAgICAgICAgICAge2dyb3VwLndvcmRzLm1hcCgod29yZCwgd29yZEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXt3b3JkSW5kZXh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake0dST1VQX0NPTE9SU1tpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJiZy1cIiwgXCJiZy1cIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCItMzAwXCIsIFwiLTIwMFwiKX0gcC0xIHRleHQtY2VudGVyIHJvdW5kZWQgdGV4dC1zbWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3dvcmR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxHcmlkIC8+XG5cbiAgICAgIHttaXN0YWtlcyA8IDQgJiYgIWdhbWVDb21wbGV0ZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEd1ZXNzfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkVGlsZXMubGVuZ3RoICE9PSA0fVxuICAgICAgICAgICAgdmFyaWFudD1cImJydXRhbF9saW1lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7KGdhbWVDb21wbGV0ZSB8fCBpc0dhbWVPdmVyKSAmJiAoXG4gICAgICAgIDxHYW1lT3ZlclBvcHVwIHN0YXJ0TmV3R2FtZT17c3RhcnROZXdHYW1lfSByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlR2FtZSIsIkdyaWQiLCJCdXR0b24iLCJ1c2VSb3V0ZXIiLCJHYW1lT3ZlclBvcHVwIiwiR1JPVVBfQ09MT1JTIiwiR2FtZUJvYXJkIiwicm91dGVyIiwibWlzdGFrZXMiLCJzdWJtaXRHdWVzcyIsInNlbGVjdGVkVGlsZXMiLCJnYW1lQ29tcGxldGUiLCJmb3VuZEdyb3Vwc1dpdGhUaGVtZXMiLCJzdGFydE5ld0dhbWUiLCJpc0dhbWVPdmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIkFycmF5IiwibWFwIiwiXyIsImkiLCJncm91cCIsImluZGV4IiwidGhlbWUiLCJ3b3JkcyIsIndvcmQiLCJ3b3JkSW5kZXgiLCJyZXBsYWNlIiwib25DbGljayIsImRpc2FibGVkIiwibGVuZ3RoIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/connections/GameBoard.tsx\n"));

/***/ })

});