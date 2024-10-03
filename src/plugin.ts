penpot.ui.open("Penpot plugin starter template", `?theme=${penpot.theme}`);

penpot.ui.onMessage<string>((message) => {
  if (message === "create-rectangle-with-text") {
    const rectangle = penpot.createRectangle();
    rectangle.resize(175, 30);

    const text = penpot.createText("Hello QA team!");
    if (text) {
      text.align = "center";
      text.verticalAlign = "center";
      text.resize(175, 30);
      const group = penpot.group([rectangle, text]);

      if (group) {
        group.x = penpot.viewport.center.x;
        group.y = penpot.viewport.center.y;
  
        penpot.selection = [group];
      }
    }
  }
});

// Update the theme in the iframe
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});
