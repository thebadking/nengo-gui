VIZ.Hotkeys = function () { 

    document.addEventListener('keydown', function(ev) {
        // bring up help sheet with ctrl-/ (which is the ? button)
        if (ev.ctrlKey == true && ev.keyCode == 191) {
            sim.ws.send('help');
        }
        // undoo with ctrl-z
        if (ev.ctrlKey == true && ev.keyCode == 90) {
            VIZ.netgraph.notify({ undo: "1" });
        }
        // redo with shift-ctrl-z
        if (ev.ctrlKey == true && ev.shiftKey == true && ev.keyCode == 90) {
            VIZ.netgraph.notify({ undo: "0" });
        }
        // redo with ctrl-y
        if (ev.ctrlKey == true && ev.keyCode == 89) {
            VIZ.netgraph.notify({ undo: "0" });
        }
        // run model with spacebar
        if (ev.keyCode == 32) {
            sim.on_pause_click();
        }
    });
}

VIZ.Hotkeys = new VIZ.Hotkeys();
