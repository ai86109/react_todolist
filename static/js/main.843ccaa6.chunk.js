(this.webpackJsonpreact_todolist=this.webpackJsonpreact_todolist||[]).push([[0],{24:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e(12),o=e.n(i),a=e(10),u=e(16),l=e(7),d=e(2),b=e(3);function j(){var n=Object(d.a)(["\n  padding: 5px 8px;\n"]);return j=function(){return n},n}function s(){var n=Object(d.a)(["\n  width: 92%;\n  height: 32px;\n  margin-right: 2px;\n"]);return s=function(){return n},n}function f(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 5px;\n"]);return f=function(){return n},n}var p=b.a.form(f()),x=b.a.input(s()),h=b.a.button(j());function O(n){var t=n.value,e=n.handleFormSubmit,c=n.handleInputChange;return Object(r.jsxs)(p,{onSubmit:e,children:[Object(r.jsx)(x,{value:t,onChange:c}),Object(r.jsx)(h,{children:"\u65b0\u589e"})]})}function v(){var n=Object(d.a)(["\n  color: white;\n  background: rgba(0.3, 0.3, 0.3, 0.6);\n  margin: 0 0 10px 10px;\n"]);return v=function(){return n},n}function g(){var n=Object(d.a)(["\n  padding: 8px 16px;\n  color: white;\n  cursor: pointer;\n  background: white;\n  color: black;\n"]);return g=function(){return n},n}function m(){var n=Object(d.a)(["\n  padding: 8px 16px;\n  color: white;\n  cursor: pointer;\n  &:hover {\n    background: white;\n    color: black;\n  }\n"]);return m=function(){return n},n}function k(){var n=Object(d.a)(["\n  display: flex;\n"]);return k=function(){return n},n}function w(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  background: grey;\n  padding: 10px 10px 0 10px;\n"]);return w=function(){return n},n}var C=b.a.div(w()),y=b.a.div(k()),S=b.a.div(m()),B=b.a.div(g()),T=b.a.button(v());function F(n){var t=n.filter,e=n.setFilter,c=n.handleClearAllButton;return Object(r.jsxs)(C,{children:[Object(r.jsxs)(y,{children:["all"===t?Object(r.jsx)(B,{children:"All"}):Object(r.jsx)(S,{onClick:function(){return e("all")},children:"All"}),"task"===t?Object(r.jsx)(B,{children:"Task"}):Object(r.jsx)(S,{onClick:function(){return e("task")},children:"Task"}),"completed"===t?Object(r.jsx)(B,{children:"Completed"}):Object(r.jsx)(S,{onClick:function(){return e("completed")},children:"Completed"})]}),Object(r.jsx)(T,{onClick:c,children:"clear all"})]})}function z(){var n=Object(d.a)(["\n  &:hover {\n    color: brown;\n    cursor: pointer;\n  }\n"]);return z=function(){return n},n}function A(){var n=Object(d.a)(["\n  font-size: 18px;\n  text-decoration: line-through;\n  color: rgb(111, 110, 110);\n"]);return A=function(){return n},n}function D(){var n=Object(d.a)(["\n  font-size: 18px;\n"]);return D=function(){return n},n}function I(){var n=Object(d.a)(["\n  &::after {\n    content: 'V';\n    font-weight: bold;\n    display: block;\n    margin: 0 20px 0 0;\n    width: 24px;\n    height: 24px;\n    border: solid 1px black;\n    border-radius: 50%;\n    text-align: center;\n    cursor: pointer;\n  }\n"]);return I=function(){return n},n}function J(){var n=Object(d.a)(["\n  margin: 0 20px 0 0;\n  width: 24px;\n  height: 24px;\n  border: solid 1px black;\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n"]);return J=function(){return n},n}function _(){var n=Object(d.a)(["\n  display: flex;\n  height: 24px;\n"]);return _=function(){return n},n}function E(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid black;\n  padding: 10px 16px;\n"]);return E=function(){return n},n}var R=b.a.div(E()),V=b.a.div(_()),X=b.a.div(J()),q=b.a.div(I()),G=b.a.div(D()),H=b.a.div(A()),K=b.a.div(z());function L(n){var t=n.todo,e=n.handleCheckboxButton,c=n.handleTodoDelete;return Object(r.jsxs)(R,{children:[Object(r.jsxs)(V,{children:[!0===t.completed?Object(r.jsx)(q,{onClick:function(){e(t.id)}}):Object(r.jsx)(X,{onClick:function(){e(t.id)}}),!0===t.completed?Object(r.jsx)(H,{children:t.content}):Object(r.jsx)(G,{children:t.content})]}),Object(r.jsx)(K,{onClick:function(){c(t.id)},children:"X"})]})}function M(){var n=Object(d.a)([""]);return M=function(){return n},n}function N(){var n=Object(d.a)(["\n  font-size: 48px;\n  font-weight: bold;\n  text-align: center;\n  padding: 20px 0 25px 0;\n"]);return N=function(){return n},n}function P(){var n=Object(d.a)(["\n  max-width: 700px;\n  margin: 20px auto;\n  border-radius: 4px;\n  position: relative;\n"]);return P=function(){return n},n}var Q=b.a.div(P()),U=b.a.div(N()),W=b.a.div(M());var Y=function(){var n=Object(c.useRef)(1),t=Object(c.useState)(),e=Object(l.a)(t,2),i=e[0],o=e[1],d=Object(c.useState)([]),b=Object(l.a)(d,2),j=b[0],s=b[1],f=Object(c.useState)("all"),p=Object(l.a)(f,2),x=p[0],h=p[1],v=function(n){s(j.filter((function(t){return t.id!==n})))},g=function(n){s(j.map((function(t){return t.id!==n?t:Object(a.a)(Object(a.a)({},t),{},{completed:!t.completed})})))};return Object(r.jsxs)(Q,{children:[Object(r.jsx)(U,{children:"Todolist"}),Object(r.jsx)(O,{value:i,handleFormSubmit:function(t){t.preventDefault(),s([].concat(Object(u.a)(j),[{id:n.current,content:i,completed:!1}])),o(""),n.current++},handleInputChange:function(n){o(n.target.value)}}),Object(r.jsx)(F,{filter:x,setFilter:h,handleClearallButton:function(){s([])}}),Object(r.jsx)(W,{children:j&&j.filter((function(n){return"task"===x?!1===n.completed:"completed"===x?!0===n.completed:n})).map((function(n){return Object(r.jsx)(L,{todo:n,handleTodoDelete:v,handleCheckboxButton:g},n.id)}))})]})};o.a.render(Object(r.jsx)(Y,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.843ccaa6.chunk.js.map