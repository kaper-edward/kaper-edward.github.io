"use strict";(self.webpackChunkclassnotes=self.webpackChunkclassnotes||[]).push([[6965],{6965:function(e,n,t){t.r(n),t.d(n,{CompletionAdapter:function(){return _n},DefinitionAdapter:function(){return Rn},DiagnosticsAdapter:function(){return pn},DocumentColorAdapter:function(){return Nn},DocumentFormattingEditProvider:function(){return Zn},DocumentHighlightAdapter:function(){return An},DocumentLinkAdapter:function(){return Fn},DocumentRangeFormattingEditProvider:function(){return jn},DocumentSymbolAdapter:function(){return Mn},FoldingRangeAdapter:function(){return Un},HoverAdapter:function(){return Cn},ReferenceAdapter:function(){return Dn},RenameAdapter:function(){return Pn},SelectionRangeAdapter:function(){return Wn},WorkerManager:function(){return le},fromPosition:function(){return wn},fromRange:function(){return kn},setupMode:function(){return Kn},setupMode1:function(){return Hn},toRange:function(){return yn},toTextEdit:function(){return En}});var r,i,o=t(136),a=t(7277),s=t(5671),u=t(3144),c=t(4942),d=t(7762),g=t(4389),f=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,v=Object.prototype.hasOwnProperty,p=function(e,n,t,r){if(n&&"object"===typeof n||"function"===typeof n){var i,o=(0,d.Z)(h(n));try{var a=function(){var o=i.value;v.call(e,o)||o===t||f(e,o,{get:function(){return n[o]},enumerable:!(r=l(n,o))||r.enumerable})};for(o.s();!(i=o.n()).done;)a()}catch(s){o.e(s)}finally{o.f()}}return e},m={};p(m,r=g,"default"),i&&p(i,r,"default");var _,w,k,y,b,E,C,x,I,A,S,R,T,D,P,M,L,F,Z,j,O,N,U,W,V,H,K,z,X,B,$,q,Q,G,J,Y,ee,ne,te,re,ie,oe,ae,se,ue,ce,de,ge,fe,le=function(){function e(n){var t=this;(0,s.Z)(this,e),(0,c.Z)(this,"_defaults",void 0),(0,c.Z)(this,"_idleCheckInterval",void 0),(0,c.Z)(this,"_lastUsedTime",void 0),(0,c.Z)(this,"_configChangeListener",void 0),(0,c.Z)(this,"_worker",void 0),(0,c.Z)(this,"_client",void 0),this._defaults=n,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return(0,u.Z)(e,[{key:"_stopWorker",value:function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}},{key:"dispose",value:function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}},{key:"_checkIfIdle",value:function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())}},{key:"_getClient",value:function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=m.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}},{key:"getLanguageServiceWorker",value:function(){for(var e,n=this,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this._getClient().then((function(n){e=n})).then((function(e){if(n._worker)return n._worker.withSyncedResources(r)})).then((function(n){return e}))}}]),e}();(w=_||(_={})).MIN_VALUE=-2147483648,w.MAX_VALUE=2147483647,(y=k||(k={})).MIN_VALUE=0,y.MAX_VALUE=2147483647,(E=b||(b={})).create=function(e,n){return e===Number.MAX_VALUE&&(e=k.MAX_VALUE),n===Number.MAX_VALUE&&(n=k.MAX_VALUE),{line:e,character:n}},E.is=function(e){var n=e;return hn.objectLiteral(n)&&hn.uinteger(n.line)&&hn.uinteger(n.character)},(x=C||(C={})).create=function(e,n,t,r){if(hn.uinteger(e)&&hn.uinteger(n)&&hn.uinteger(t)&&hn.uinteger(r))return{start:b.create(e,n),end:b.create(t,r)};if(b.is(e)&&b.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+r+"]")},x.is=function(e){var n=e;return hn.objectLiteral(n)&&b.is(n.start)&&b.is(n.end)},(A=I||(I={})).create=function(e,n){return{uri:e,range:n}},A.is=function(e){var n=e;return hn.defined(n)&&C.is(n.range)&&(hn.string(n.uri)||hn.undefined(n.uri))},(R=S||(S={})).create=function(e,n,t,r){return{targetUri:e,targetRange:n,targetSelectionRange:t,originSelectionRange:r}},R.is=function(e){var n=e;return hn.defined(n)&&C.is(n.targetRange)&&hn.string(n.targetUri)&&(C.is(n.targetSelectionRange)||hn.undefined(n.targetSelectionRange))&&(C.is(n.originSelectionRange)||hn.undefined(n.originSelectionRange))},(D=T||(T={})).create=function(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}},D.is=function(e){var n=e;return hn.numberRange(n.red,0,1)&&hn.numberRange(n.green,0,1)&&hn.numberRange(n.blue,0,1)&&hn.numberRange(n.alpha,0,1)},(M=P||(P={})).create=function(e,n){return{range:e,color:n}},M.is=function(e){var n=e;return C.is(n.range)&&T.is(n.color)},(F=L||(L={})).create=function(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}},F.is=function(e){var n=e;return hn.string(n.label)&&(hn.undefined(n.textEdit)||G.is(n))&&(hn.undefined(n.additionalTextEdits)||hn.typedArray(n.additionalTextEdits,G.is))},(j=Z||(Z={})).Comment="comment",j.Imports="imports",j.Region="region",(N=O||(O={})).create=function(e,n,t,r,i){var o={startLine:e,endLine:n};return hn.defined(t)&&(o.startCharacter=t),hn.defined(r)&&(o.endCharacter=r),hn.defined(i)&&(o.kind=i),o},N.is=function(e){var n=e;return hn.uinteger(n.startLine)&&hn.uinteger(n.startLine)&&(hn.undefined(n.startCharacter)||hn.uinteger(n.startCharacter))&&(hn.undefined(n.endCharacter)||hn.uinteger(n.endCharacter))&&(hn.undefined(n.kind)||hn.string(n.kind))},(W=U||(U={})).create=function(e,n){return{location:e,message:n}},W.is=function(e){var n=e;return hn.defined(n)&&I.is(n.location)&&hn.string(n.message)},(H=V||(V={})).Error=1,H.Warning=2,H.Information=3,H.Hint=4,(z=K||(K={})).Unnecessary=1,z.Deprecated=2,(X||(X={})).is=function(e){var n=e;return void 0!==n&&null!==n&&hn.string(n.href)},($=B||(B={})).create=function(e,n,t,r,i,o){var a={range:e,message:n};return hn.defined(t)&&(a.severity=t),hn.defined(r)&&(a.code=r),hn.defined(i)&&(a.source=i),hn.defined(o)&&(a.relatedInformation=o),a},$.is=function(e){var n,t=e;return hn.defined(t)&&C.is(t.range)&&hn.string(t.message)&&(hn.number(t.severity)||hn.undefined(t.severity))&&(hn.integer(t.code)||hn.string(t.code)||hn.undefined(t.code))&&(hn.undefined(t.codeDescription)||hn.string(null===(n=t.codeDescription)||void 0===n?void 0:n.href))&&(hn.string(t.source)||hn.undefined(t.source))&&(hn.undefined(t.relatedInformation)||hn.typedArray(t.relatedInformation,U.is))},(Q=q||(q={})).create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return hn.defined(t)&&t.length>0&&(i.arguments=t),i},Q.is=function(e){var n=e;return hn.defined(n)&&hn.string(n.title)&&hn.string(n.command)},(J=G||(G={})).replace=function(e,n){return{range:e,newText:n}},J.insert=function(e,n){return{range:{start:e,end:e},newText:n}},J.del=function(e){return{range:e,newText:""}},J.is=function(e){var n=e;return hn.objectLiteral(n)&&hn.string(n.newText)&&C.is(n.range)},(ee=Y||(Y={})).create=function(e,n,t){var r={label:e};return void 0!==n&&(r.needsConfirmation=n),void 0!==t&&(r.description=t),r},ee.is=function(e){var n=e;return void 0!==n&&hn.objectLiteral(n)&&hn.string(n.label)&&(hn.boolean(n.needsConfirmation)||void 0===n.needsConfirmation)&&(hn.string(n.description)||void 0===n.description)},(ne||(ne={})).is=function(e){return"string"===typeof e},(re=te||(te={})).replace=function(e,n,t){return{range:e,newText:n,annotationId:t}},re.insert=function(e,n,t){return{range:{start:e,end:e},newText:n,annotationId:t}},re.del=function(e,n){return{range:e,newText:"",annotationId:n}},re.is=function(e){var n=e;return G.is(n)&&(Y.is(n.annotationId)||ne.is(n.annotationId))},(oe=ie||(ie={})).create=function(e,n){return{textDocument:e,edits:n}},oe.is=function(e){var n=e;return hn.defined(n)&&_e.is(n.textDocument)&&Array.isArray(n.edits)},(se=ae||(ae={})).create=function(e,n,t){var r={kind:"create",uri:e};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(r.options=n),void 0!==t&&(r.annotationId=t),r},se.is=function(e){var n=e;return n&&"create"===n.kind&&hn.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||hn.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||hn.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||ne.is(n.annotationId))},(ce=ue||(ue={})).create=function(e,n,t,r){var i={kind:"rename",oldUri:e,newUri:n};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(i.options=t),void 0!==r&&(i.annotationId=r),i},ce.is=function(e){var n=e;return n&&"rename"===n.kind&&hn.string(n.oldUri)&&hn.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||hn.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||hn.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||ne.is(n.annotationId))},(ge=de||(de={})).create=function(e,n,t){var r={kind:"delete",uri:e};return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(r.options=n),void 0!==t&&(r.annotationId=t),r},ge.is=function(e){var n=e;return n&&"delete"===n.kind&&hn.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||hn.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||hn.boolean(n.options.ignoreIfNotExists)))&&(void 0===n.annotationId||ne.is(n.annotationId))},(fe||(fe={})).is=function(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||n.documentChanges.every((function(e){return hn.string(e.kind)?ae.is(e)||ue.is(e)||de.is(e):ie.is(e)})))};var he,ve,pe,me,_e,we,ke,ye,be,Ee,Ce,xe,Ie,Ae,Se,Re,Te,De,Pe,Me,Le,Fe,Ze,je,Oe,Ne,Ue,We,Ve,He,Ke,ze,Xe,Be,$e,qe,Qe,Ge,Je,Ye,en,nn,tn,rn,on,an,sn,un,cn,dn,gn,fn=function(){function e(e,n){this.edits=e,this.changeAnnotations=n}return e.prototype.insert=function(e,n,t){var r,i;if(void 0===t?r=G.insert(e,n):ne.is(t)?(i=t,r=te.insert(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=te.insert(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,n,t){var r,i;if(void 0===t?r=G.replace(e,n):ne.is(t)?(i=t,r=te.replace(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=te.replace(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,n){var t,r;if(void 0===n?t=G.del(e):ne.is(n)?(r=n,t=te.del(e,n)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(n),t=te.del(e,r)),this.edits.push(t),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ln=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,n){var t;if(ne.is(e)?t=e:(t=this.nextId(),n=e),void 0!==this._annotations[t])throw new Error("Id "+t+" is already in use.");if(void 0===n)throw new Error("No annotation provided for id "+t);return this._annotations[t]=n,this._size++,t},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var n=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new ln(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(ie.is(e)){var t=new fn(e.edits,n._changeAnnotations);n._textEditChanges[e.textDocument.uri]=t}}))):e.changes&&Object.keys(e.changes).forEach((function(t){var r=new fn(e.changes[t]);n._textEditChanges[t]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(_e.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[n.uri])){var t={textDocument:n,edits:i=[]};this._workspaceEdit.documentChanges.push(t),r=new fn(i,this._changeAnnotations),this._textEditChanges[n.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new fn(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new ln,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(Y.is(n)||ne.is(n)?r=n:t=n,void 0===r?i=ae.create(e,t):(o=ne.is(r)?r:this._changeAnnotations.manage(r),i=ae.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,n,t,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(Y.is(t)||ne.is(t)?i=t:r=t,void 0===i?o=ue.create(e,n,r):(a=ne.is(i)?i:this._changeAnnotations.manage(i),o=ue.create(e,n,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(Y.is(n)||ne.is(n)?r=n:t=n,void 0===r?i=de.create(e,t):(o=ne.is(r)?r:this._changeAnnotations.manage(r),i=de.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}();(ve=he||(he={})).create=function(e){return{uri:e}},ve.is=function(e){var n=e;return hn.defined(n)&&hn.string(n.uri)},(me=pe||(pe={})).create=function(e,n){return{uri:e,version:n}},me.is=function(e){var n=e;return hn.defined(n)&&hn.string(n.uri)&&hn.integer(n.version)},(we=_e||(_e={})).create=function(e,n){return{uri:e,version:n}},we.is=function(e){var n=e;return hn.defined(n)&&hn.string(n.uri)&&(null===n.version||hn.integer(n.version))},(ye=ke||(ke={})).create=function(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}},ye.is=function(e){var n=e;return hn.defined(n)&&hn.string(n.uri)&&hn.string(n.languageId)&&hn.integer(n.version)&&hn.string(n.text)},(Ee=be||(be={})).PlainText="plaintext",Ee.Markdown="markdown",function(e){e.is=function(n){var t=n;return t===e.PlainText||t===e.Markdown}}(be||(be={})),(Ce||(Ce={})).is=function(e){var n=e;return hn.objectLiteral(e)&&be.is(n.kind)&&hn.string(n.value)},(Ie=xe||(xe={})).Text=1,Ie.Method=2,Ie.Function=3,Ie.Constructor=4,Ie.Field=5,Ie.Variable=6,Ie.Class=7,Ie.Interface=8,Ie.Module=9,Ie.Property=10,Ie.Unit=11,Ie.Value=12,Ie.Enum=13,Ie.Keyword=14,Ie.Snippet=15,Ie.Color=16,Ie.File=17,Ie.Reference=18,Ie.Folder=19,Ie.EnumMember=20,Ie.Constant=21,Ie.Struct=22,Ie.Event=23,Ie.Operator=24,Ie.TypeParameter=25,(Se=Ae||(Ae={})).PlainText=1,Se.Snippet=2,(Re||(Re={})).Deprecated=1,(De=Te||(Te={})).create=function(e,n,t){return{newText:e,insert:n,replace:t}},De.is=function(e){var n=e;return n&&hn.string(n.newText)&&C.is(n.insert)&&C.is(n.replace)},(Me=Pe||(Pe={})).asIs=1,Me.adjustIndentation=2,(Le||(Le={})).create=function(e){return{label:e}},(Fe||(Fe={})).create=function(e,n){return{items:e||[],isIncomplete:!!n}},(je=Ze||(Ze={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},je.is=function(e){var n=e;return hn.string(n)||hn.objectLiteral(n)&&hn.string(n.language)&&hn.string(n.value)},(Oe||(Oe={})).is=function(e){var n=e;return!!n&&hn.objectLiteral(n)&&(Ce.is(n.contents)||Ze.is(n.contents)||hn.typedArray(n.contents,Ze.is))&&(void 0===e.range||C.is(e.range))},(Ne||(Ne={})).create=function(e,n){return n?{label:e,documentation:n}:{label:e}},(Ue||(Ue={})).create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return hn.defined(n)&&(i.documentation=n),hn.defined(t)?i.parameters=t:i.parameters=[],i},(Ve=We||(We={})).Text=1,Ve.Read=2,Ve.Write=3,(He||(He={})).create=function(e,n){var t={range:e};return hn.number(n)&&(t.kind=n),t},(ze=Ke||(Ke={})).File=1,ze.Module=2,ze.Namespace=3,ze.Package=4,ze.Class=5,ze.Method=6,ze.Property=7,ze.Field=8,ze.Constructor=9,ze.Enum=10,ze.Interface=11,ze.Function=12,ze.Variable=13,ze.Constant=14,ze.String=15,ze.Number=16,ze.Boolean=17,ze.Array=18,ze.Object=19,ze.Key=20,ze.Null=21,ze.EnumMember=22,ze.Struct=23,ze.Event=24,ze.Operator=25,ze.TypeParameter=26,(Xe||(Xe={})).Deprecated=1,(Be||(Be={})).create=function(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o},(qe=$e||($e={})).create=function(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},qe.is=function(e){var n=e;return n&&hn.string(n.name)&&hn.number(n.kind)&&C.is(n.range)&&C.is(n.selectionRange)&&(void 0===n.detail||hn.string(n.detail))&&(void 0===n.deprecated||hn.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))&&(void 0===n.tags||Array.isArray(n.tags))},(Ge=Qe||(Qe={})).Empty="",Ge.QuickFix="quickfix",Ge.Refactor="refactor",Ge.RefactorExtract="refactor.extract",Ge.RefactorInline="refactor.inline",Ge.RefactorRewrite="refactor.rewrite",Ge.Source="source",Ge.SourceOrganizeImports="source.organizeImports",Ge.SourceFixAll="source.fixAll",(Ye=Je||(Je={})).create=function(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t},Ye.is=function(e){var n=e;return hn.defined(n)&&hn.typedArray(n.diagnostics,B.is)&&(void 0===n.only||hn.typedArray(n.only,hn.string))},(nn=en||(en={})).create=function(e,n,t){var r={title:e},i=!0;return"string"===typeof n?(i=!1,r.kind=n):q.is(n)?r.command=n:r.edit=n,i&&void 0!==t&&(r.kind=t),r},nn.is=function(e){var n=e;return n&&hn.string(n.title)&&(void 0===n.diagnostics||hn.typedArray(n.diagnostics,B.is))&&(void 0===n.kind||hn.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||q.is(n.command))&&(void 0===n.isPreferred||hn.boolean(n.isPreferred))&&(void 0===n.edit||fe.is(n.edit))},(rn=tn||(tn={})).create=function(e,n){var t={range:e};return hn.defined(n)&&(t.data=n),t},rn.is=function(e){var n=e;return hn.defined(n)&&C.is(n.range)&&(hn.undefined(n.command)||q.is(n.command))},(an=on||(on={})).create=function(e,n){return{tabSize:e,insertSpaces:n}},an.is=function(e){var n=e;return hn.defined(n)&&hn.uinteger(n.tabSize)&&hn.boolean(n.insertSpaces)},(un=sn||(sn={})).create=function(e,n,t){return{range:e,target:n,data:t}},un.is=function(e){var n=e;return hn.defined(n)&&C.is(n.range)&&(hn.undefined(n.target)||hn.string(n.target))},(dn=cn||(cn={})).create=function(e,n){return{range:e,parent:n}},dn.is=function(e){var n=e;return void 0!==n&&C.is(n.range)&&(void 0===n.parent||dn.is(n.parent))},function(e){function n(e,t){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);n(i,t),n(o,t);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=t(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,n,t,r){return new vn(e,n,t,r)},e.is=function(e){var n=e;return!!(hn.defined(n)&&hn.string(n.uri)&&(hn.undefined(n.languageId)||hn.string(n.languageId))&&hn.uinteger(n.lineCount)&&hn.func(n.getText)&&hn.func(n.positionAt)&&hn.func(n.offsetAt))},e.applyEdits=function(e,t){for(var r=e.getText(),i=n(t,(function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(gn||(gn={}));var hn,vn=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,r=n.length;if(0===r)return b.create(0,e);for(;t<r;){var i=Math.floor((t+r)/2);n[i]>e?r=i:t=i+1}var o=t-1;return b.create(o,e-n[o])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();!function(e){var n=Object.prototype.toString;e.defined=function(e){return"undefined"!==typeof e},e.undefined=function(e){return"undefined"===typeof e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===n.call(e)},e.number=function(e){return"[object Number]"===n.call(e)},e.numberRange=function(e,t,r){return"[object Number]"===n.call(e)&&t<=e&&e<=r},e.integer=function(e){return"[object Number]"===n.call(e)&&-2147483648<=e&&e<=2147483647},e.uinteger=function(e){return"[object Number]"===n.call(e)&&0<=e&&e<=2147483647},e.func=function(e){return"[object Function]"===n.call(e)},e.objectLiteral=function(e){return null!==e&&"object"===typeof e},e.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}}(hn||(hn={}));var pn=function(){function e(n,t,r){var i=this;(0,s.Z)(this,e),(0,c.Z)(this,"_disposables",[]),(0,c.Z)(this,"_listener",Object.create(null)),this._languageId=n,this._worker=t;var o=function(e){var n,t=e.getLanguageId();t===i._languageId&&(i._listener[e.uri.toString()]=e.onDidChangeContent((function(){window.clearTimeout(n),n=window.setTimeout((function(){return i._doValidate(e.uri,t)}),500)})),i._doValidate(e.uri,t))},a=function(e){m.editor.setModelMarkers(e,i._languageId,[]);var n=e.uri.toString(),t=i._listener[n];t&&(t.dispose(),delete i._listener[n])};this._disposables.push(m.editor.onDidCreateModel(o)),this._disposables.push(m.editor.onWillDisposeModel(a)),this._disposables.push(m.editor.onDidChangeModelLanguage((function(e){a(e.model),o(e.model)}))),this._disposables.push(r((function(e){m.editor.getModels().forEach((function(e){e.getLanguageId()===i._languageId&&(a(e),o(e))}))}))),this._disposables.push({dispose:function(){for(var e in m.editor.getModels().forEach(a),i._listener)i._listener[e].dispose()}}),m.editor.getModels().forEach(o)}return(0,u.Z)(e,[{key:"dispose",value:function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables.length=0}},{key:"_doValidate",value:function(e,n){this._worker(e).then((function(n){return n.doValidation(e.toString())})).then((function(t){var r=t.map((function(e){return function(e,n){var t="number"===typeof n.code?String(n.code):n.code;return{severity:mn(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}(0,e)})),i=m.editor.getModel(e);i&&i.getLanguageId()===n&&m.editor.setModelMarkers(i,n,r)})).then(void 0,(function(e){console.error(e)}))}}]),e}();function mn(e){switch(e){case V.Error:return m.MarkerSeverity.Error;case V.Warning:return m.MarkerSeverity.Warning;case V.Information:return m.MarkerSeverity.Info;case V.Hint:return m.MarkerSeverity.Hint;default:return m.MarkerSeverity.Info}}var _n=function(){function e(n,t){(0,s.Z)(this,e),this._worker=n,this._triggerCharacters=t}return(0,u.Z)(e,[{key:"triggerCharacters",get:function(){return this._triggerCharacters}},{key:"provideCompletionItems",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doComplete(i.toString(),wn(n))})).then((function(t){if(t){var r=e.getWordUntilPosition(n),i=new m.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),o=t.items.map((function(e){var n,t,r={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:bn(e.kind)};return e.textEdit&&("undefined"!==typeof(t=e.textEdit).insert&&"undefined"!==typeof t.replace?r.range={insert:yn(e.textEdit.insert),replace:yn(e.textEdit.replace)}:r.range=yn(e.textEdit.range),r.insertText=e.textEdit.newText),e.additionalTextEdits&&(r.additionalTextEdits=e.additionalTextEdits.map(En)),e.insertTextFormat===Ae.Snippet&&(r.insertTextRules=m.languages.CompletionItemInsertTextRule.InsertAsSnippet),r}));return{isIncomplete:t.isIncomplete,suggestions:o}}}))}}]),e}();function wn(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function kn(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function yn(e){if(e)return new m.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function bn(e){var n=m.languages.CompletionItemKind;switch(e){case xe.Text:return n.Text;case xe.Method:return n.Method;case xe.Function:return n.Function;case xe.Constructor:return n.Constructor;case xe.Field:return n.Field;case xe.Variable:return n.Variable;case xe.Class:return n.Class;case xe.Interface:return n.Interface;case xe.Module:return n.Module;case xe.Property:return n.Property;case xe.Unit:return n.Unit;case xe.Value:return n.Value;case xe.Enum:return n.Enum;case xe.Keyword:return n.Keyword;case xe.Snippet:return n.Snippet;case xe.Color:return n.Color;case xe.File:return n.File;case xe.Reference:return n.Reference}return n.Property}function En(e){if(e)return{range:yn(e.range),text:e.newText}}var Cn=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideHover",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),wn(n))})).then((function(e){if(e)return{range:yn(e.range),contents:In(e.contents)}}))}}]),e}();function xn(e){return"string"===typeof e?{value:e}:(n=e)&&"object"===typeof n&&"string"===typeof n.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var n}function In(e){if(e)return Array.isArray(e)?e.map(xn):[xn(e)]}var An=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideDocumentHighlights",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.findDocumentHighlights(r.toString(),wn(n))})).then((function(e){if(e)return e.map((function(e){return{range:yn(e.range),kind:Sn(e.kind)}}))}))}}]),e}();function Sn(e){switch(e){case We.Read:return m.languages.DocumentHighlightKind.Read;case We.Write:return m.languages.DocumentHighlightKind.Write;case We.Text:return m.languages.DocumentHighlightKind.Text}return m.languages.DocumentHighlightKind.Text}var Rn=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideDefinition",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.findDefinition(r.toString(),wn(n))})).then((function(e){if(e)return[Tn(e)]}))}}]),e}();function Tn(e){return{uri:m.Uri.parse(e.uri),range:yn(e.range)}}var Dn=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideReferences",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.findReferences(i.toString(),wn(n))})).then((function(e){if(e)return e.map(Tn)}))}}]),e}(),Pn=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideRenameEdits",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doRename(i.toString(),wn(n),t)})).then((function(e){return function(e){if(!e||!e.changes)return;var n=[];for(var t in e.changes){var r,i=m.Uri.parse(t),o=(0,d.Z)(e.changes[t]);try{for(o.s();!(r=o.n()).done;){var a=r.value;n.push({resource:i,versionId:void 0,textEdit:{range:yn(a.range),text:a.newText}})}}catch(s){o.e(s)}finally{o.f()}}return{edits:n}}(e)}))}}]),e}();var Mn=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideDocumentSymbols",value:function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentSymbols(t.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:Ln(e.kind),range:yn(e.location.range),selectionRange:yn(e.location.range),tags:[]}}))}))}}]),e}();function Ln(e){var n=m.languages.SymbolKind;switch(e){case Ke.File:return n.Array;case Ke.Module:return n.Module;case Ke.Namespace:return n.Namespace;case Ke.Package:return n.Package;case Ke.Class:return n.Class;case Ke.Method:return n.Method;case Ke.Property:return n.Property;case Ke.Field:return n.Field;case Ke.Constructor:return n.Constructor;case Ke.Enum:return n.Enum;case Ke.Interface:return n.Interface;case Ke.Function:return n.Function;case Ke.Variable:return n.Variable;case Ke.Constant:return n.Constant;case Ke.String:return n.String;case Ke.Number:return n.Number;case Ke.Boolean:return n.Boolean;case Ke.Array:return n.Array}return n.Function}var Fn=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideLinks",value:function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentLinks(t.toString())})).then((function(e){if(e)return{links:e.map((function(e){return{range:yn(e.range),url:e.target}}))}}))}}]),e}(),Zn=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideDocumentFormattingEdits",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.format(r.toString(),null,On(n)).then((function(e){if(e&&0!==e.length)return e.map(En)}))}))}}]),e}(),jn=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideDocumentRangeFormattingEdits",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.format(i.toString(),kn(n),On(t)).then((function(e){if(e&&0!==e.length)return e.map(En)}))}))}}]),e}();function On(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Nn=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideDocumentColors",value:function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentColors(t.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:yn(e.range)}}))}))}},{key:"provideColorPresentations",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),n.color,kn(n.range))})).then((function(e){if(e)return e.map((function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=En(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(En)),n}))}))}}]),e}(),Un=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideFoldingRanges",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getFoldingRanges(r.toString(),n)})).then((function(e){if(e)return e.map((function(e){var n={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(n.kind=function(e){switch(e){case Z.Comment:return m.languages.FoldingRangeKind.Comment;case Z.Imports:return m.languages.FoldingRangeKind.Imports;case Z.Region:return m.languages.FoldingRangeKind.Region}return}(e.kind)),n}))}))}}]),e}();var Wn=function(){function e(n){(0,s.Z)(this,e),this._worker=n}return(0,u.Z)(e,[{key:"provideSelectionRanges",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),n.map(wn))})).then((function(e){if(e)return e.map((function(e){for(var n=[];e;)n.push({range:yn(e.range)}),e=e.parent;return n}))}))}}]),e}(),Vn=function(e){(0,o.Z)(t,e);var n=(0,a.Z)(t);function t(e){return(0,s.Z)(this,t),n.call(this,e,[".",":","<",'"',"=","/"])}return(0,u.Z)(t)}(_n);function Hn(e){var n=new le(e),t=function(){return n.getLanguageServiceWorker.apply(n,arguments)},r=e.languageId;m.languages.registerCompletionItemProvider(r,new Vn(t)),m.languages.registerHoverProvider(r,new Cn(t)),m.languages.registerDocumentHighlightProvider(r,new An(t)),m.languages.registerLinkProvider(r,new Fn(t)),m.languages.registerFoldingRangeProvider(r,new Un(t)),m.languages.registerDocumentSymbolProvider(r,new Mn(t)),m.languages.registerSelectionRangeProvider(r,new Wn(t)),m.languages.registerRenameProvider(r,new Pn(t)),"html"===r&&(m.languages.registerDocumentFormattingEditProvider(r,new Zn(t)),m.languages.registerDocumentRangeFormattingEditProvider(r,new jn(t)))}function Kn(e){var n=[],t=[],r=new le(e);n.push(r);var i=function(){return r.getLanguageServiceWorker.apply(r,arguments)};return function(){var n=e.languageId,r=e.modeConfiguration;Xn(t),r.completionItems&&t.push(m.languages.registerCompletionItemProvider(n,new Vn(i))),r.hovers&&t.push(m.languages.registerHoverProvider(n,new Cn(i))),r.documentHighlights&&t.push(m.languages.registerDocumentHighlightProvider(n,new An(i))),r.links&&t.push(m.languages.registerLinkProvider(n,new Fn(i))),r.documentSymbols&&t.push(m.languages.registerDocumentSymbolProvider(n,new Mn(i))),r.rename&&t.push(m.languages.registerRenameProvider(n,new Pn(i))),r.foldingRanges&&t.push(m.languages.registerFoldingRangeProvider(n,new Un(i))),r.selectionRanges&&t.push(m.languages.registerSelectionRangeProvider(n,new Wn(i))),r.documentFormattingEdits&&t.push(m.languages.registerDocumentFormattingEditProvider(n,new Zn(i))),r.documentRangeFormattingEdits&&t.push(m.languages.registerDocumentRangeFormattingEditProvider(n,new jn(i)))}(),n.push(zn(t)),zn(n)}function zn(e){return{dispose:function(){return Xn(e)}}}function Xn(e){for(;e.length;)e.pop().dispose()}}}]);
//# sourceMappingURL=6965.d946f43e.chunk.js.map