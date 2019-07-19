import React from "react";

function Terminal() {
  return (
    <div className="CodeMirror cm-s-nord CodeMirror-wrap">
      <div style={{overflow: 'hidden', position: 'relative', width: '3px', height: '0px', top: '52px', left: '16px'}}>
        <textarea autoCorrect="off" autoCapitalize="off" spellCheck="false" style={{position: 'absolute', bottom: '-1em', padding: '0px', width: '1000px', height: '1em', outline: 'none'}} tabIndex={0} defaultValue={""} />
      </div>
      
      <div className="CodeMirror-vscrollbar" tabIndex={-1} cm-not-content="true" style={{width: '18px', pointerEvents: 'none'}}>
        <div style={{minWidth: '1px', height: '0px'}} /></div>
        <div className="CodeMirror-hscrollbar" tabIndex={-1} cm-not-content="true" style={{height: '18px', pointerEvents: 'none'}}>
          <div style={{height: '100%', minHeight: '1px', width: '0px'}} /></div>
          <div className="CodeMirror-scrollbar-filler" cm-not-content="true" />
          <div className="CodeMirror-gutter-filler" cm-not-content="true" />
          <div className="CodeMirror-scroll" tabIndex={-1}>
            <div className="CodeMirror-sizer" style={{marginLeft: '0px', marginBottom: '0px', borderRightWidth: '30px', minHeight: '26px', paddingRight: '0px', paddingBottom: '0px'}}>
              <div style={{position: 'relative', top: '0px'}}>
                <div className="CodeMirror-lines" role="presentation">
                  <div role="presentation" style={{position: 'relative', outline: 'none'}}>
                    <div className="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div className="CodeMirror-measure" />
                    <div style={{position: 'relative', zIndex: 1}} />
                    <div className="CodeMirror-cursors" style={{}}>
                      <div className="CodeMirror-cursor" style={{left: '4px', top: '0px', height: '18px'}}>&nbsp;</div>
                      </div><div className="CodeMirror-code" role="presentation" style={{}}><pre className=" CodeMirror-line " role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span cm-text>​</span></span></pre></div></div></div></div></div><div style={{position: 'absolute', height: '30px', width: '1px', borderBottom: '0px solid transparent', top: '26px'}} /><div className="CodeMirror-gutters" style={{display: 'none', height: '56px'}} /></div></div>
  );
}

export default Terminal;
