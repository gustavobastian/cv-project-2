(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/face.2e7b3f20.jpeg"},function(e,t,n){e.exports=n(37)},,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(10),o=n.n(c),r=(n(21),n(11)),l=n(2),s=n(3),d=n(5),u=n(4),h=n(6),p=(n(23),n(1)),m=(n(25),function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(d.a)(this,Object(u.a)(t).call(this,e)),console.log(e.values),n.state=e.values,n.handleClickContact=n.handleClickContact.bind(Object(p.a)(Object(p.a)(n))),n.handleClickTelephone=n.handleClickTelephone.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClickTelephone",value:function(){console.log("this is:",this.state.telephone);var e=prompt("telephone:",this.state.telephone);""===e||null===e?console.log("here"):(this.setState({name:this.state.name,telephone:e,contact:this.state.contact,title:this.state.title,educations:this.state.educations,education:this.state.education,experiences:this.state.experiences,experience:this.state.experience}),this.props.values.telephone=e)}},{key:"handleClickContact",value:function(){console.log("the email is:",this.state.contact);var e=prompt("Email:",this.state.contact);""!==e&&null!==e&&(this.setState({name:this.state.name,telephone:this.state.telephone,contact:e,title:this.state.title,educations:this.state.educations,education:this.state.education,experiences:this.state.experiences,experience:this.state.experience}),this.props.values.contact=e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"Header"},i.a.createElement("div",{className:"telephone"},i.a.createElement("div",{className:"LabelHeader"},"Tel:"),i.a.createElement("div",{className:"dataHeader"},i.a.createElement("div",{id:"telephone",onClick:this.handleClickTelephone}," ",this.props.values.telephone))),i.a.createElement("div",{className:"address"},i.a.createElement("div",{className:"LabelHeader"},"Contact: "),i.a.createElement("div",{className:"dataHeader"}," ",i.a.createElement("div",{id:"contact",onClick:this.handleClickContact}," ",this.state.contact))))}}]),t}(a.Component)),E=(n(27),n(12)),y=n.n(E),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state=e.values,n.handleClickName=n.handleClickName.bind(Object(p.a)(Object(p.a)(n))),n.handleClickTitle=n.handleClickTitle.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClickName",value:function(){console.log("this is:",this.name);var e=prompt("name:",this.name);""!==e&&null!==e&&(this.setState({name:e,telephone:this.state.telephone,contact:this.state.contact,title:this.state.title,educations:this.state.educations,education:this.state.education,experiences:this.state.experiences,experience:this.state.experience}),this.props.values.name=e)}},{key:"handleClickTitle",value:function(){console.log("the ocuppation is:",this.state.title);var e=prompt("title:",this.state.title);""!==e&&null!==e&&(this.setState({title:e}),this.setState({name:this.state.name,telephone:this.state.telephone,contact:this.state.contact,title:e,educations:this.state.educations,education:this.state.education,experiences:this.state.experiences,experience:this.state.experience}),this.props.values.title=e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"Section1"},i.a.createElement("img",{src:y.a,alt:"Person Pic"}),i.a.createElement("div",{className:"TitleSection"},i.a.createElement("div",{className:"labelSection1"},i.a.createElement("div",{id:"namePerson",onClick:this.handleClickName},this.state.name)),i.a.createElement("div",{onClick:this.handleClickTitle},i.a.createElement("div",{id:"titlePerson",className:"dataSection1"},this.state.title))))}}]),t}(a.Component),f=(n(29),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={universityName:e.university,title:e.title,dateEnd:e.dateEnd,dateEntry:e.dateEntry,note:e.Note},n.handleClickNoteEducation=n.handleClickNoteEducation.bind(Object(p.a)(Object(p.a)(n))),n.handleClickLabelEducation=n.handleClickLabelEducation.bind(Object(p.a)(Object(p.a)(n))),n.handleClickTitleEducation=n.handleClickTitleEducation.bind(Object(p.a)(Object(p.a)(n))),n.handleClickDateEntry=n.handleClickDateEntry.bind(Object(p.a)(Object(p.a)(n))),n.handleClickDateEnd=n.handleClickDateEnd.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClickDateEnd",value:function(){var e=prompt("DateEnd:",this.state.dateEnd);""===e||null===e?console.log("here"):this.setState({dateEnd:parseInt(e)})}},{key:"handleClickDateEntry",value:function(){var e=prompt("DateEntry:",this.state.dateEntry);""===e||null===e?console.log("here"):this.setState({dateEntry:parseInt(e)})}},{key:"handleClickNoteEducation",value:function(){var e=prompt("Note:",this.state.note);""===e||null===e?console.log("here"):this.setState({note:e})}},{key:"handleClickLabelEducation",value:function(){var e=prompt("University/Company:",this.state.universityName);""===e||null===e?console.log("here"):this.setState({universityName:e})}},{key:"handleClickTitleEducation",value:function(){var e=prompt("Title/Degree:",this.state.title);""===e||null===e?console.log("here"):this.setState({title:e})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"educationElement"},i.a.createElement("div",{className:"labelEducation",onClick:this.handleClickLabelEducation},this.state.universityName),i.a.createElement("div",{className:"titleEducation",onClick:this.handleClickTitleEducation}," ",this.state.title),i.a.createElement("div",{className:"datesEducation",onClick:this.handleClickDateEntry}," ",this.state.dateEntry,"/"),i.a.createElement("div",{className:"datesEducation",onClick:this.handleClickDateEnd},this.state.dateEnd)),i.a.createElement("div",{className:"Note",onClick:this.handleClickNoteEducation}," Note: ",this.state.note))}}]),t}(a.Component)),x=(n(31),function(e){function t(e){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Section2"},i.a.createElement("ul",null,this.props.educations.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(f,{university:e.universityName,title:e.title,dateEntry:e.dateEntry,dateEnd:e.dateEnd,Note:e.note}),i.a.createElement("button",null,"Del"))})))}}]),t}(a.Component)),b=(n(33),n(35),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={companyName:e.companyName,titleName:e.titleName,dateEntry:e.dateEntry,dateEnd:e.dateEnd,note:e.Note},n.handleClickDateEnd=n.handleClickDateEnd.bind(Object(p.a)(Object(p.a)(n))),n.handleClickDateEntry=n.handleClickDateEntry.bind(Object(p.a)(Object(p.a)(n))),n.handleClickTitleExperience=n.handleClickTitleExperience.bind(Object(p.a)(Object(p.a)(n))),n.handleClickCompanyExperience=n.handleClickCompanyExperience.bind(Object(p.a)(Object(p.a)(n))),n.handleClickNoteExperience=n.handleClickNoteExperience.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClickDateEnd",value:function(){var e=prompt("DateEnd:",this.state.dateEnd);""===e||null===e?console.log("here"):this.setState({dateEnd:parseInt(e)})}},{key:"handleClickDateEntry",value:function(){var e=prompt("DateEntry:",this.state.dateEntry);""===e||null===e?console.log("here"):this.setState({dateEntry:parseInt(e)})}},{key:"handleClickTitleExperience",value:function(){var e=prompt("TitleName:",this.state.titleName);""===e||null===e?console.log("here"):this.setState({titleName:e})}},{key:"handleClickCompanyExperience",value:function(){var e=prompt("Company Name:",this.state.companyName);""===e||null===e?console.log("here"):this.setState({companyName:e})}},{key:"handleClickNoteExperience",value:function(){var e=prompt("Note:",this.state.note);""===e||null===e?console.log("here"):this.setState({note:e})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"experienceElement"},i.a.createElement("div",{className:"labelCompany",onClick:this.handleClickCompanyExperience},this.state.companyName),i.a.createElement("div",{className:"titleExperience",onClick:this.handleClickTitleExperience}," ",this.state.titleName),i.a.createElement("div",{className:"datesExperience",onClick:this.handleClickDateEntry},this.state.dateEntry,"/"),i.a.createElement("div",{className:"datesExperience",onClick:this.handleClickDateEnd},this.state.dateEnd)),i.a.createElement("div",{className:"Note",onClick:this.handleClickNoteExperience}," Note: ",this.state.note))}}]),t}(a.Component)),g=function(e){function t(e){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Section3"},i.a.createElement("ul",null,this.props.experiences.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(b,{companyName:e.companyName,titleName:e.titleName,dateEntry:e.dateEntry,dateEnd:e.dateEnd,Note:e.note}))})))}}]),t}(a.Component),C=n(7),N=n.n(C);function k(){k=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",r=i.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,n){return e[t]=n}}function s(e,t,n,i){var c=t&&t.prototype instanceof h?t:h,o=Object.create(c.prototype),r=new j(i||[]);return a(o,"_invoke",{value:g(e,n,r)}),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var u={};function h(){}function p(){}function m(){}var E={};l(E,c,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(S([])));v&&v!==t&&n.call(v,c)&&(E=v);var f=m.prototype=h.prototype=Object.create(E);function x(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var i;a(this,"_invoke",{value:function(a,c){function o(){return new t(function(i,o){!function a(i,c,o,r){var l=d(e[i],e,c);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){a("next",e,o,r)},function(e){a("throw",e,o,r)}):t.resolve(u).then(function(e){s.value=e,o(s)},function(e){return a("throw",e,o,r)})}r(l.arg)}(a,c,i,o)})}return i=i?i.then(o,o):o()}})}function g(e,t,n){var a="suspendedStart";return function(i,c){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===i)throw c;return w()}for(n.method=i,n.arg=c;;){var o=n.delegate;if(o){var r=C(o,n);if(r){if(r===u)continue;return r}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=d(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function C(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),u;var i=d(a,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,u;var c=i.arg;return c?c.done?(t[e.resultName]=c.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function S(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:w}}function w(){return{value:void 0,done:!0}}return p.prototype=m,a(f,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,r,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,r,"GeneratorFunction")),e.prototype=Object.create(f),e},e.awrap=function(e){return{__await:e}},x(b.prototype),l(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,a,i,c){void 0===c&&(c=Promise);var o=new b(s(t,n,a,i),c);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},x(f),l(f,r,"Generator"),l(f,c,function(){return this}),l(f,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],o=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var r=n.call(c,"catchLoc"),l=n.call(c,"finallyLoc");if(r&&l){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(r){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var c=i;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var i=a.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).onSubmitTaskEd=function(t){null!=t?t.preventDefault():console.log("init ed"),e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations.concat(e.state.education),education:{universityName:"university",title:"title",dateEnd:"dateEnd",dateEntry:"dateEntry",note:"Note",id:N()()},experiences:e.state.experiences,experience:e.state.experience}),document.getElementById("educationForm").style.visibility="hidden"},e.handleChangeUn=function(t){e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:{universityName:t.target.value,title:e.state.education.title,dateEnd:e.state.education.dateEnd,dateEntry:e.state.education.dateEntry,note:e.state.education.note,id:e.state.education.id},experiences:e.state.experiences,experience:e.state.experience})},e.handleChangeEdTit=function(t){e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:{universityName:e.state.education.universityName,title:t.target.value,dateEnd:e.state.education.dateEnd,dateEntry:e.state.education.dateEntry,note:e.state.education.note,id:e.state.education.id},experiences:e.state.experiences,experience:e.state.experience})},e.handleChangeEdStart=function(t){e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:{universityName:e.state.education.universityName,title:e.state.education.title,dateEnd:e.state.education.dateEnd,dateEntry:t.target.value,note:e.state.education.note,id:e.state.education.id},experiences:e.state.experiences,experience:e.state.experience})},e.handleChangeEdEnd=function(t){e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:{universityName:e.state.education.universityName,title:e.state.education.title,dateEnd:t.target.value,dateEntry:e.state.education.dateEntry,note:e.state.education.note,id:e.state.education.id},experiences:e.state.experiences,experience:e.state.experience})},e.handleChangeEdNote=function(t){e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:{universityName:e.state.education.universityName,title:e.state.education.title,dateEnd:e.state.education.dateEnd,dateEntry:e.state.education.dateEntry,note:t.target.value,id:e.state.education.id},experiences:e.state.experiences,experience:e.state.experience})},e.handleCancelEdForm=function(e){console.log("need more experience"),document.getElementById("educationForm").style.visibility="hidden"},e.onSubmitTaskEx=function(t){null!=t?t.preventDefault():console.log("init"),e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:e.state.education,experiences:e.state.experiences.concat(e.state.experience),experience:{companyName:"companyName",titleName:"titleName",dateEntry:"dateEntry",dateEnd:"dateEnd",note:"Note",id:N()()}}),document.getElementById("experienceForm").style.visibility="hidden"},e.handleChangeExComp=function(t){e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:e.state.education,experiences:e.state.experiences,experience:{companyName:t.target.value,titleName:e.state.experience.titleName,dateEntry:e.state.experience.dateEntry,dateEnd:e.state.experience.dateEnd,note:e.state.experience.note,id:e.state.experience.id}}),console.log(JSON.stringify(e.state.education))},e.handleChangeExTit=function(t){e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:e.state.education,experiences:e.state.experiences,experience:{companyName:e.state.experience.companyName,titleName:t.target.value,dateEntry:e.state.experience.dateEntry,dateEnd:e.state.experience.dateEnd,note:e.state.experience.note,id:e.state.experience.id}}),console.log(JSON.stringify(e.state.education))},e.handleChangeExStart=function(t){e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:e.state.education,experiences:e.state.experiences,experience:{companyName:e.state.experience.companyName,titleName:e.state.experience.titleName,dateEntry:t.target.value,dateEnd:e.state.experience.dateEnd,note:e.state.experience.note,id:e.state.experience.id}}),console.log(JSON.stringify(e.state.education))},e.handleChangeExEnd=function(t){e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:e.state.education,experiences:e.state.experiences,experience:{companyName:e.state.experience.companyName,titleName:e.state.experience.titleName,dateEntry:e.state.experience.dateEntry,dateEnd:t.target.value,note:e.state.experience.note,id:e.state.experience.id}}),console.log(JSON.stringify(e.state.education))},e.handleChangeExNote=function(t){e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:e.state.education,experiences:e.state.experiences,experience:{companyName:e.state.experience.companyName,titleName:e.state.experience.titleName,dateEntry:e.state.experience.dateEntry,dateEnd:e.state.experience.dateEnd,note:t.target.value,id:e.state.experience.id}}),console.log(JSON.stringify(e.state.education))},e.handleChangeEdForm=function(t){console.log("need more education"),e.setState({name:e.state.name,telephone:e.state.telephone,contact:e.state.contact,title:e.state.title,educations:e.state.educations,education:e.state.education,experiences:e.state.experiences,experience:{companyName:e.state.experience.companyName,titleName:e.state.experience.titleName,dateEntry:e.state.experience.dateEntry,dateEnd:t.target.value,note:e.state.experience.note,id:e.state.experience.id}}),document.getElementById("educationForm").style.visibility=""},e.handleChangeExForm=function(e){console.log("need more experience"),document.getElementById("experienceForm").style.visibility=""},e.handleCancelExForm=function(e){console.log("need more experience"),document.getElementById("experienceForm").style.visibility="hidden"},e.state={name:"Peter Ivanovic",telephone:"44468321",contact:"PeterIvanovic@hotmail.com",title:"Phd. AstroPhysics ",educations:[],education:{universityName:"Moon university",title:"Tactile button engineer",dateEnd:"2005",dateEntry:"2002",note:"first tactile button based on wood.",id:N()()},experiences:[],experience:{companyName:"My comp",titleName:"First job",dateEntry:"1999",dateEnd:"2001",note:"Nothing done well",id:N()()}},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(r.a)(k().mark(function e(){return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==this.state.educations.length){e.next=3;break}return e.next=3,this.onSubmitTaskEd();case 3:if(0!==this.state.experiences.length){e.next=6;break}return e.next=6,this.onSubmitTaskEx();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=(e.education,e.educations),n=(e.experience,e.experiences);return i.a.createElement("div",null,i.a.createElement(m,{values:this.state}),i.a.createElement(v,{values:this.state}),i.a.createElement("div",{className:"educationLine"},i.a.createElement("p",null,"Education:"),i.a.createElement("button",{className:"buttonPlus",onClick:this.handleChangeEdForm},"+")),i.a.createElement("hr",null),i.a.createElement(x,{educations:t}),i.a.createElement("form",null,i.a.createElement("div",{className:"myForm",id:"educationForm"},i.a.createElement("hr",null),i.a.createElement("div",{className:"line1"},i.a.createElement("label",{htmlFor:"UniversityInput"},"University"),i.a.createElement("input",{type:"text",id:"UniversityInput",onChange:this.handleChangeUn,placeholder:"university"}),i.a.createElement("label",{htmlFor:"titleInput"},"Title"),i.a.createElement("input",{type:"text",id:"titleInput",onChange:this.handleChangeEdTit,placeholder:"title/degree"})),i.a.createElement("div",{className:"line1"},i.a.createElement("label",{htmlFor:"entryInput"},"Start"),i.a.createElement("input",{type:"text",id:"entryInput",onChange:this.handleChangeEdStart,placeholder:"2000"}),i.a.createElement("label",{htmlFor:"endInput"},"End"),i.a.createElement("input",{type:"text",id:"endInput",onChange:this.handleChangeEdEnd,placeholder:"2002"})),i.a.createElement("div",{className:"line1"},i.a.createElement("label",{htmlFor:"noteInput"},"Note"),i.a.createElement("textarea",{rows:"5",columns:"50",id:"noteInput",placeholder:"Something done",onChange:this.handleChangeEdNote})),i.a.createElement("div",{className:"buttonsLine"},i.a.createElement("button",{type:"button",onClick:this.onSubmitTaskEd},"Submit"),i.a.createElement("button",{type:"button",onClick:this.handleCancelEdForm},"Cancel")))),i.a.createElement("div",{className:"educationLine"},i.a.createElement("p",null,"Experience:"),i.a.createElement("button",{className:"buttonPlus",onClick:this.handleChangeExForm},"+")),i.a.createElement("hr",null),i.a.createElement(g,{experiences:n}),i.a.createElement("form",{id:"experienceForm"},i.a.createElement("div",{className:"myForm"},i.a.createElement("hr",null),i.a.createElement("div",{className:"line1"},i.a.createElement("label",{htmlFor:"CompanyInput"},"Company"),i.a.createElement("input",{type:"text",id:"CompanyInput",onChange:this.handleChangeExComp,placeholder:"Company"}),i.a.createElement("label",{htmlFor:"titleInput"},"Title"),i.a.createElement("input",{type:"text",id:"titleInput",onChange:this.handleChangeExTit,placeholder:"title"})),i.a.createElement("div",{className:"line1"},i.a.createElement("label",{htmlFor:"entryInput2"},"Start"),i.a.createElement("input",{type:"text",id:"entryInput2",onChange:this.handleChangeExStart,placeholder:"2000"}),i.a.createElement("label",{htmlFor:"endInput2"},"End"),i.a.createElement("input",{type:"text",id:"endInput2",onChange:this.handleChangeExEnd,placeholder:"2002"})),i.a.createElement("div",{className:"line1"},i.a.createElement("label",{htmlFor:"noteInput2"},"Note"),i.a.createElement("textarea",{rows:"5",columns:"50",id:"noteInput2",placeholder:"Something done",onChange:this.handleChangeExNote})),i.a.createElement("div",{className:"buttonsLine"},i.a.createElement("button",{type:"button",onClick:this.onSubmitTaskEx},"Submit"),i.a.createElement("button",{type:"button",onClick:this.handleCancelExForm},"Cancel")))))}}]),t}(a.Component),j=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,38)).then(function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(O,null))),j()}],[[13,3,2]]]);
//# sourceMappingURL=main.8efaa6bc.chunk.js.map