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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/hocs/withAuth */ \"./src/hocs/withAuth.tsx\");\n/* harmony import */ var _src_lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/lib/api */ \"./src/lib/api.ts\");\n/* harmony import */ var _components_LeftNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/LeftNav */ \"./components/LeftNav.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/card */ \"./components/ui/card.tsx\");\n/* harmony import */ var _components_AddMetricModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AddMetricModal */ \"./components/AddMetricModal.tsx\");\n/* harmony import */ var modularize_import_loader_name_Loader2_from_default_as_default_join_esm_icons_loader_2_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! modularize-import-loader?name=Loader2&from=default&as=default&join=../esm/icons/loader-2!lucide-react */ \"./node_modules/next/dist/build/webpack/loaders/modularize-import-loader.js?name=Loader2&from=default&as=default&join=../esm/icons/loader-2!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/skeleton */ \"./components/ui/skeleton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    var _industries;\n    _s();\n    const [selectedCompany, setSelectedCompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { data: companies, isLoading, isError } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)([\n        \"companies\"\n    ], ()=>_src_lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/companies\").then((res)=>res.data));\n    const { data: industries, isLoading: isLoadingIndustries, isError: isErrorIndustries } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)([\n        \"industries\"\n    ], ()=>_src_lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/industries\").then((res)=>res.data));\n    const { data: locations, isLoading: isLoadingLocations, isError: isErrorLocations } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)([\n        \"locations\"\n    ], ()=>_src_lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/locations\").then((res)=>res.data));\n    const { data: metricSnapshots, isLoading: isLoadingMetricSnapshots, isError: isErrorMetricSnapshots } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)([\n        \"metricsnapshots\"\n    ], ()=>_src_lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/metricsnapshots\").then((res)=>res.data));\n    if (isError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"API Error\"\n        }, void 0, false, {\n            fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n            lineNumber: 56,\n            columnNumber: 12\n        }, undefined);\n    }\n    const activeIndustry = (_industries = industries) === null || _industries === void 0 ? void 0 : _industries.find((industry)=>{\n        var _selectedCompany;\n        return industry.id === ((_selectedCompany = selectedCompany) === null || _selectedCompany === void 0 ? void 0 : _selectedCompany.industryId);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LeftNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/3 p-4 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Companies\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500\",\n                                children: \"Select a company to view or edit details\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {\n                        className: \"w-[100px] h-[20px] rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined) : companies.map((company)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-4 m-2 bg-white rounded shadow cursor-pointer hover:bg-gray-200\",\n                            onClick: ()=>setSelectedCompany(company),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold\",\n                                children: company.name\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, undefined)\n                        }, company.id, false, {\n                            fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/3 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 m-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Company Details\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500\",\n                                children: \"Companies can only be edited by admins and moderators\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    selectedCompany && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                        className: \"p-4 m-2 bg-white rounded shadow-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {\n                                        children: selectedCompany.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardDescription, {\n                                        children: selectedCompany.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardDescription, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: selectedCompany.website,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            className: \"text-blue-500 hover:underline mb-4\",\n                                            children: [\n                                                selectedCompany.website,\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                                children: isLoadingIndustries ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Loader2_from_default_as_default_join_esm_icons_loader_2_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    className: \"mr-2 h-4 w-4 animate-spin\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 17\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col space-y-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-xs font-semibold text-gray-400 uppercase text-left\",\n                                            children: \"Industry\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-bold\",\n                                            children: activeIndustry.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardFooter, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddMetricModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    companyId: selectedCompany.id\n                                }, void 0, false, {\n                                    fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anirudhnair/Documents/Code/b11/b11-app/pages/dashboard.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"SoFGQc5o9wLphEpywu6We0Zq0jc=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Dashboard));\nvar _c, _c1;\n$RefreshReg$(_c, \"Dashboard\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRDQUM3QkMsUUFBTzs0Q0FDUEMsS0FBSTs0Q0FDSmIsV0FBVTs7Z0RBRVR2QixnQkFBZ0JrQyxPQUFPO2dEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSWhDLDhEQUFDNUMsNERBQVdBOzBDQUNUbUIsb0NBQ0MsOERBQUNiLDBJQUFPQTtvQ0FBQzJCLFdBQVU7Ozs7OzhEQUVuQiw4REFBQ047b0NBQUlNLFdBQVU7O3NEQUNiLDhEQUFDTjs0Q0FBSU0sV0FBVTtzREFBMEQ7Ozs7OztzREFHekUsOERBQUNNOzRDQUFHTixXQUFVO3NEQUFxQkwsZUFBZVksSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSTVELDhEQUFDdEMsMkRBQVVBOzBDQUNULDRFQUFDRyxrRUFBY0E7b0NBQUMwQyxXQUFXckMsZ0JBQWdCcUIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0Q7R0E3R012Qjs7UUFNQWIsMkRBQVFBO1FBUVJBLDJEQUFRQTtRQVFSQSwyREFBUUE7UUFRUkEsMkRBQVFBOzs7S0E5QlJhO0FBK0dOLCtEQUFlLE1BQUFaLDhEQUFRQSxDQUFDWSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC50c3g/ZDdmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiQC9zcmMvaG9jcy93aXRoQXV0aFwiO1xuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gXCJAL2xpYi9kdG9cIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NyYy9saWIvYXBpXCI7XG5pbXBvcnQgTGVmdE5hdiBmcm9tIFwiQC9jb21wb25lbnRzL0xlZnROYXZcIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDYXJkRGVzY3JpcHRpb24sXG4gIENhcmRGb290ZXIsXG4gIENhcmRIZWFkZXIsXG4gIENhcmRUaXRsZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgQWRkTWV0cmljTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9BZGRNZXRyaWNNb2RhbFwiO1xuaW1wb3J0IHsgTG9hZGVyMiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9za2VsZXRvblwiO1xuaW1wb3J0IHsgSW5kdXN0cnlEdG8gfSBmcm9tIFwiQC9jb21wb25lbnRzL0NvbXBhbnlGb3JtXCI7XG5cbmNvbnN0IERhc2hib2FyZDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZENvbXBhbnksIHNldFNlbGVjdGVkQ29tcGFueV0gPSB1c2VTdGF0ZTxDb21wYW55IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiBjb21wYW5pZXMsXG4gICAgaXNMb2FkaW5nLFxuICAgIGlzRXJyb3IsXG4gIH0gPSB1c2VRdWVyeShbXCJjb21wYW5pZXNcIl0sICgpID0+XG4gICAgYXBpLmdldChcIi9hcGkvY29tcGFuaWVzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG4gICk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IGluZHVzdHJpZXMsXG4gICAgaXNMb2FkaW5nOiBpc0xvYWRpbmdJbmR1c3RyaWVzLFxuICAgIGlzRXJyb3I6IGlzRXJyb3JJbmR1c3RyaWVzLFxuICB9ID0gdXNlUXVlcnkoW1wiaW5kdXN0cmllc1wiXSwgKCkgPT5cbiAgICBhcGkuZ2V0KFwiL2FwaS9pbmR1c3RyaWVzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG4gICk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IGxvY2F0aW9ucyxcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZ0xvY2F0aW9ucyxcbiAgICBpc0Vycm9yOiBpc0Vycm9yTG9jYXRpb25zLFxuICB9ID0gdXNlUXVlcnkoW1wibG9jYXRpb25zXCJdLCAoKSA9PlxuICAgIGFwaS5nZXQoXCIvYXBpL2xvY2F0aW9uc1wiKS50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxuICApO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiBtZXRyaWNTbmFwc2hvdHMsXG4gICAgaXNMb2FkaW5nOiBpc0xvYWRpbmdNZXRyaWNTbmFwc2hvdHMsXG4gICAgaXNFcnJvcjogaXNFcnJvck1ldHJpY1NuYXBzaG90cyxcbiAgfSA9IHVzZVF1ZXJ5KFtcIm1ldHJpY3NuYXBzaG90c1wiXSwgKCkgPT5cbiAgICBhcGkuZ2V0KFwiL2FwaS9tZXRyaWNzbmFwc2hvdHNcIikudGhlbigocmVzKSA9PiByZXMuZGF0YSlcbiAgKTtcblxuICBpZiAoaXNFcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkFQSSBFcnJvcjwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZUluZHVzdHJ5OiBJbmR1c3RyeUR0byA9IGluZHVzdHJpZXM/LmZpbmQoXG4gICAgKGluZHVzdHJ5OiBJbmR1c3RyeUR0bykgPT4gaW5kdXN0cnkuaWQgPT09IHNlbGVjdGVkQ29tcGFueT8uaW5kdXN0cnlJZFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XG4gICAgICA8TGVmdE5hdiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBwLTQgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG0tMlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5Db21wYW5pZXM8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgU2VsZWN0IGEgY29tcGFueSB0byB2aWV3IG9yIGVkaXQgZGV0YWlsc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cInctWzEwMHB4XSBoLVsyMHB4XSByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGNvbXBhbmllcy5tYXAoKGNvbXBhbnk6IENvbXBhbnkpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtjb21wYW55LmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTQgbS0yIGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93IGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWdyYXktMjAwXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDb21wYW55KGNvbXBhbnkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57Y29tcGFueS5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIHAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBtLTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+Q29tcGFueSBEZXRhaWxzPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgIENvbXBhbmllcyBjYW4gb25seSBiZSBlZGl0ZWQgYnkgYWRtaW5zIGFuZCBtb2RlcmF0b3JzXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NlbGVjdGVkQ29tcGFueSAmJiAoXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwicC00IG0tMiBiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3NlbGVjdGVkQ29tcGFueS5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPntzZWxlY3RlZENvbXBhbnkuZGVzY3JpcHRpb259PC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3NlbGVjdGVkQ29tcGFueS53ZWJzaXRlfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmUgbWItNFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcGFueS53ZWJzaXRlfXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICB7aXNMb2FkaW5nSW5kdXN0cmllcyA/IChcbiAgICAgICAgICAgICAgICA8TG9hZGVyMiBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTQgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNDAwIHVwcGVyY2FzZSB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgSW5kdXN0cnlcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e2FjdGl2ZUluZHVzdHJ5Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZEZvb3Rlcj5cbiAgICAgICAgICAgICAgPEFkZE1ldHJpY01vZGFsIGNvbXBhbnlJZD17c2VsZWN0ZWRDb21wYW55LmlkfSAvPlxuICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoRGFzaGJvYXJkKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUXVlcnkiLCJ3aXRoQXV0aCIsImFwaSIsIkxlZnROYXYiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkRm9vdGVyIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkFkZE1ldHJpY01vZGFsIiwiTG9hZGVyMiIsIlNrZWxldG9uIiwiRGFzaGJvYXJkIiwiaW5kdXN0cmllcyIsInNlbGVjdGVkQ29tcGFueSIsInNldFNlbGVjdGVkQ29tcGFueSIsImRhdGEiLCJjb21wYW5pZXMiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZ2V0IiwidGhlbiIsInJlcyIsImlzTG9hZGluZ0luZHVzdHJpZXMiLCJpc0Vycm9ySW5kdXN0cmllcyIsImxvY2F0aW9ucyIsImlzTG9hZGluZ0xvY2F0aW9ucyIsImlzRXJyb3JMb2NhdGlvbnMiLCJtZXRyaWNTbmFwc2hvdHMiLCJpc0xvYWRpbmdNZXRyaWNTbmFwc2hvdHMiLCJpc0Vycm9yTWV0cmljU25hcHNob3RzIiwiZGl2IiwiYWN0aXZlSW5kdXN0cnkiLCJmaW5kIiwiaW5kdXN0cnkiLCJpZCIsImluZHVzdHJ5SWQiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJtYXAiLCJjb21wYW55Iiwib25DbGljayIsImgyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiYSIsImhyZWYiLCJ3ZWJzaXRlIiwidGFyZ2V0IiwicmVsIiwiY29tcGFueUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n"));

/***/ })

});