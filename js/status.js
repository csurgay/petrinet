class Status extends Label {
    constructor(label,x,y,callback) {
        super(label,x,y);
        pn.l.pop();
        pn.addStatus(this);
        this.callback=callback;
    }
    draw() {
        if (DEBUG) {
            super.draw();
            g.fillText(this.callback(),this.x+50,this.y);
        }
    }
    
    dragTo() {}
}

const sx=40,sy=60,dy=15;
var i=0;

function setupStatus() {
    new Status("debug",sx,sy+i++*dy,function(){return DEBUG;});
    new Status("marking",sx,sy+i++*dy,function(){return pn.markings.length;});
    new Status("mptr",sx,sy+i++*dy,function(){return pn.mptr;});
    new Status("undo",sx,sy+i++*dy,function(){return undo.length;});
    new Status("uptr",sx,sy+i++*dy,function(){return undoPtr;});
    new Status("place",sx,sy+i++*dy,function(){return pn.p.length;});
    new Status("trans",sx,sy+i++*dy,function(){return pn.t.length;});
    new Status("flow",sx,sy+i++*dy,function(){return pn.f.length;});
    new Status("label",sx,sy+i++*dy,function(){return pn.l.length;});
    new Status("zoom",sx,sy+i++*dy,function(){return pn.zoom;});
    new Status("cxy",sx,sy+i++*dy,function(){return pn.cx.toFixed()+" "+pn.cy.toFixed();});
    new Status("vpxy",sx,sy+i++*dy,function(){return pn.vpx.toFixed()+" "+pn.vpy.toFixed();});
    new Status("cur",sx,sy+i++*dy,function(){return cursor.x.toFixed()+" "+cursor.y.toFixed();});
    new Status("ccur",sx,sy+i++*dy,function(){return ccursor.x.toFixed()+" "+ccursor.y.toFixed();});
    new Status("s",sx,sy+i++*dy,function(){return states[state];});
    new Status("o",sx,sy+i++*dy,function(){return o?objects[o.type]:"";});
    new Status("hl",sx,sy+i++*dy,function(){return pn.highlighted?objects[pn.highlighted.type]:"";});
    new Status("",sx,sy+i++*dy,function(){return ms;});
}
