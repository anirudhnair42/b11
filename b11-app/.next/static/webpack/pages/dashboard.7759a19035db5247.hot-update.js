"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/hocs/withAuth */ \"./src/hocs/withAuth.tsx\");\n/* harmony import */ var _src_lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/lib/api */ \"./src/lib/api.ts\");\n/* harmony import */ var _components_LeftNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/LeftNav */ \"./components/LeftNav.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/card */ \"./components/ui/card.tsx\");\n/* harmony import */ var _components_AddMetricModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AddMetricModal */ \"./components/AddMetricModal.tsx\");\n/* harmony import */ var modularize_import_loader_name_Loader2_from_default_as_default_join_esm_icons_loader_2_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! modularize-import-loader?name=Loader2&from=default&as=default&join=../esm/icons/loader-2!lucide-react */ \"./node_modules/next/dist/build/webpack/loaders/modularize-import-loader.js?name=Loader2&from=default&as=default&join=../esm/icons/loader-2!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/skeleton */ \"./components/ui/skeleton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    var _industries_find, _industries;\n    _s();\n    const [selectedCompany, setSelectedCompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { data: companies, isLoading, isError } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)([\n        \"companies\"\n    ], ()=>_src_lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/companies\").then((res)=>res.data));\n    const { data: industries, isLoading: isLoadingIndustries, isError: isErrorIndustries } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)([\n        \"industries\"\n    ], ()=>_src_lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/industries\").then((res)=>res.data));\n    const { data: locations, isLoading: isLoadingLocations, isError: isErrorLocations } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)([\n        \"locations\"\n    ], ()=>_src_lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/locations\").then((res)=>res.data));\n    const { data: metricSnapshots, isLoading: isLoadingMetricSnapshots, isError: isErrorMetricSnapshots } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)([\n        \"metricsnapshots\"\n    ], ()=>_src_lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/metricsnapshots\").then((res)=>res.data));\n    if (isError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"API Error\"\n        }, void 0, false, {\n            fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n            lineNumber: 56,\n            columnNumber: 12\n        }, undefined);\n    }\n    const activeIndustry = (_industries = industries) === null || _industries === void 0 ? void 0 : (_industries_find = _industries.find((industry)=>{\n        var _selectedCompany;\n        return industry.id === ((_selectedCompany = selectedCompany) === null || _selectedCompany === void 0 ? void 0 : _selectedCompany.industryId);\n    })) === null || _industries_find === void 0 ? void 0 : _industries_find.name;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LeftNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/3 p-4 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Companies\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500\",\n                                children: \"Select a company to view or edit details\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {\n                        className: \"w-[100px] h-[20px] rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined) : companies.map((company)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-4 m-2 bg-white rounded shadow cursor-pointer hover:bg-gray-200\",\n                            onClick: ()=>setSelectedCompany(company),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold\",\n                                children: company.name\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, undefined)\n                        }, company.id, false, {\n                            fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/3 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 m-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Company Details\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500\",\n                                children: \"Companies can only be edited by admins and moderators\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    selectedCompany && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                        className: \"p-4 m-2 bg-white rounded shadow-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {\n                                        children: selectedCompany.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardDescription, {\n                                        children: selectedCompany.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardDescription, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: selectedCompany.website,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            className: \"text-blue-500 hover:underline mb-4\",\n                                            children: [\n                                                selectedCompany.website,\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                                children: isLoadingIndustries ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Loader2_from_default_as_default_join_esm_icons_loader_2_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    className: \"mr-2 h-4 w-4 animate-spin\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 17\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col space-y-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-xs font-semibold text-gray-400 uppercase px-4 text-left\",\n                                            children: \"Industry\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-bold\",\n                                            children: activeIndustry\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardFooter, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddMetricModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    companyId: selectedCompany.id\n                                }, void 0, false, {\n                                    fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"SoFGQc5o9wLphEpywu6We0Zq0jc=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Dashboard));\nvar _c, _c1;\n$RefreshReg$(_c, \"Dashboard\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tEQUNkLDRFQUFDeUM7NENBQ0NDLE1BQU1qQyxnQkFBZ0JrQyxPQUFPOzRDQUM3QkMsUUFBTzs0Q0FDUEMsS0FBSTs0Q0FDSlosV0FBVTs7Z0RBRVR4QixnQkFBZ0JrQyxPQUFPO2dEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSWhDLDhEQUFDNUMsNERBQVdBOzBDQUNUbUIsb0NBQ0MsOERBQUNiLDBJQUFPQTtvQ0FBQzRCLFdBQVU7Ozs7OzhEQUVuQiw4REFBQ1A7b0NBQUlPLFdBQVU7O3NEQUNiLDhEQUFDUDs0Q0FBSU8sV0FBVTtzREFBK0Q7Ozs7OztzREFHOUUsOERBQUNNOzRDQUFHTixXQUFVO3NEQUFxQk47Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUl6Qyw4REFBQzFCLDJEQUFVQTswQ0FDVCw0RUFBQ0csa0VBQWNBO29DQUFDMEMsV0FBV3JDLGdCQUFnQnFCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzNEO0dBN0dNdkI7O1FBTUFiLDJEQUFRQTtRQVFSQSwyREFBUUE7UUFRUkEsMkRBQVFBO1FBUVJBLDJEQUFRQTs7O0tBOUJSYTtBQStHTiwrREFBZSxNQUFBWiw4REFBUUEsQ0FBQ1ksVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQudHN4P2Q3ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIkAvc3JjL2hvY3Mvd2l0aEF1dGhcIjtcbmltcG9ydCB7IENvbXBhbnkgfSBmcm9tIFwiQC9saWIvZHRvXCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zcmMvbGliL2FwaVwiO1xuaW1wb3J0IExlZnROYXYgZnJvbSBcIkAvY29tcG9uZW50cy9MZWZ0TmF2XCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ2FyZERlc2NyaXB0aW9uLFxuICBDYXJkRm9vdGVyLFxuICBDYXJkSGVhZGVyLFxuICBDYXJkVGl0bGUsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IEFkZE1ldHJpY01vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvQWRkTWV0cmljTW9kYWxcIjtcbmltcG9ydCB7IExvYWRlcjIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2tlbGV0b25cIjtcbmltcG9ydCB7IEluZHVzdHJ5RHRvIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Db21wYW55Rm9ybVwiO1xuXG5jb25zdCBEYXNoYm9hcmQ6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDb21wYW55LCBzZXRTZWxlY3RlZENvbXBhbnldID0gdXNlU3RhdGU8Q29tcGFueSB8IG51bGw+KG51bGwpO1xuICBjb25zdCB7XG4gICAgZGF0YTogY29tcGFuaWVzLFxuICAgIGlzTG9hZGluZyxcbiAgICBpc0Vycm9yLFxuICB9ID0gdXNlUXVlcnkoW1wiY29tcGFuaWVzXCJdLCAoKSA9PlxuICAgIGFwaS5nZXQoXCIvYXBpL2NvbXBhbmllc1wiKS50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxuICApO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiBpbmR1c3RyaWVzLFxuICAgIGlzTG9hZGluZzogaXNMb2FkaW5nSW5kdXN0cmllcyxcbiAgICBpc0Vycm9yOiBpc0Vycm9ySW5kdXN0cmllcyxcbiAgfSA9IHVzZVF1ZXJ5KFtcImluZHVzdHJpZXNcIl0sICgpID0+XG4gICAgYXBpLmdldChcIi9hcGkvaW5kdXN0cmllc1wiKS50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxuICApO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiBsb2NhdGlvbnMsXG4gICAgaXNMb2FkaW5nOiBpc0xvYWRpbmdMb2NhdGlvbnMsXG4gICAgaXNFcnJvcjogaXNFcnJvckxvY2F0aW9ucyxcbiAgfSA9IHVzZVF1ZXJ5KFtcImxvY2F0aW9uc1wiXSwgKCkgPT5cbiAgICBhcGkuZ2V0KFwiL2FwaS9sb2NhdGlvbnNcIikudGhlbigocmVzKSA9PiByZXMuZGF0YSlcbiAgKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogbWV0cmljU25hcHNob3RzLFxuICAgIGlzTG9hZGluZzogaXNMb2FkaW5nTWV0cmljU25hcHNob3RzLFxuICAgIGlzRXJyb3I6IGlzRXJyb3JNZXRyaWNTbmFwc2hvdHMsXG4gIH0gPSB1c2VRdWVyeShbXCJtZXRyaWNzbmFwc2hvdHNcIl0sICgpID0+XG4gICAgYXBpLmdldChcIi9hcGkvbWV0cmljc25hcHNob3RzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG4gICk7XG5cbiAgaWYgKGlzRXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5BUEkgRXJyb3I8L2Rpdj47XG4gIH1cblxuICBjb25zdCBhY3RpdmVJbmR1c3RyeTogSW5kdXN0cnlEdG8gPSBpbmR1c3RyaWVzPy5maW5kKFxuICAgIChpbmR1c3RyeTogSW5kdXN0cnlEdG8pID0+IGluZHVzdHJ5LmlkID09PSBzZWxlY3RlZENvbXBhbnk/LmluZHVzdHJ5SWRcbiAgKT8ubmFtZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxuICAgICAgPExlZnROYXYgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgcC00IG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBtLTJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+Q29tcGFuaWVzPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgIFNlbGVjdCBhIGNvbXBhbnkgdG8gdmlldyBvciBlZGl0IGRldGFpbHNcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LVsxMDBweF0gaC1bMjBweF0gcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBjb21wYW5pZXMubWFwKChjb21wYW55OiBDb21wYW55KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17Y29tcGFueS5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IG0tMiBiZy13aGl0ZSByb3VuZGVkIHNoYWRvdyBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ29tcGFueShjb21wYW55KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e2NvbXBhbnkubmFtZX08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbS0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPkNvbXBhbnkgRGV0YWlsczwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICBDb21wYW5pZXMgY2FuIG9ubHkgYmUgZWRpdGVkIGJ5IGFkbWlucyBhbmQgbW9kZXJhdG9yc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzZWxlY3RlZENvbXBhbnkgJiYgKFxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInAtNCBtLTIgYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPntzZWxlY3RlZENvbXBhbnkubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbj57c2VsZWN0ZWRDb21wYW55LmRlc2NyaXB0aW9ufTwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtzZWxlY3RlZENvbXBhbnkud2Vic2l0ZX1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lIG1iLTRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvbXBhbnkud2Vic2l0ZX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAge2lzTG9hZGluZ0luZHVzdHJpZXMgPyAoXG4gICAgICAgICAgICAgICAgPExvYWRlcjIgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00IGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMCB1cHBlcmNhc2UgcHgtNCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgSW5kdXN0cnlcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e2FjdGl2ZUluZHVzdHJ5fTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPENhcmRGb290ZXI+XG4gICAgICAgICAgICAgIDxBZGRNZXRyaWNNb2RhbCBjb21wYW55SWQ9e3NlbGVjdGVkQ29tcGFueS5pZH0gLz5cbiAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKERhc2hib2FyZCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVF1ZXJ5Iiwid2l0aEF1dGgiLCJhcGkiLCJMZWZ0TmF2IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2FyZEZvb3RlciIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJBZGRNZXRyaWNNb2RhbCIsIkxvYWRlcjIiLCJTa2VsZXRvbiIsIkRhc2hib2FyZCIsImluZHVzdHJpZXMiLCJzZWxlY3RlZENvbXBhbnkiLCJzZXRTZWxlY3RlZENvbXBhbnkiLCJkYXRhIiwiY29tcGFuaWVzIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsImdldCIsInRoZW4iLCJyZXMiLCJpc0xvYWRpbmdJbmR1c3RyaWVzIiwiaXNFcnJvckluZHVzdHJpZXMiLCJsb2NhdGlvbnMiLCJpc0xvYWRpbmdMb2NhdGlvbnMiLCJpc0Vycm9yTG9jYXRpb25zIiwibWV0cmljU25hcHNob3RzIiwiaXNMb2FkaW5nTWV0cmljU25hcHNob3RzIiwiaXNFcnJvck1ldHJpY1NuYXBzaG90cyIsImRpdiIsImFjdGl2ZUluZHVzdHJ5IiwiZmluZCIsImluZHVzdHJ5IiwiaWQiLCJpbmR1c3RyeUlkIiwibmFtZSIsImNsYXNzTmFtZSIsImgxIiwicCIsIm1hcCIsImNvbXBhbnkiLCJvbkNsaWNrIiwiaDIiLCJkZXNjcmlwdGlvbiIsImEiLCJocmVmIiwid2Vic2l0ZSIsInRhcmdldCIsInJlbCIsImNvbXBhbnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n"));

/***/ })

});