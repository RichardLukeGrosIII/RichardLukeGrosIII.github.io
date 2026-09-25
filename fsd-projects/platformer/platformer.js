$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
      console.log(toggleGrid);

    // TODO 2 - Create Platforms
    createPlatform(500, 650, 200, 20, "red");
    createPlatform(850, 600, 50, 20, "purple");
    createPlatform(1000, 500, 100, 20, "blue");
    createPlatform(1200, 425, 100, 20, "yellow");
    createPlatform(800, 350, 150, 20, "orange");
    createPlatform(500, 250, 100, 20, "green");
    createPlatform(300, 200, 100, 20, "white");
    createPlatform(100, 100, 100, 100, "black");
    // TODO 3 - Create Collectables
    createCollectable("database", 600, 500);
    createCollectable("diamond", 1350, 300);
    createCollectable("grace", 1000, 300);
    createCollectable("kennedi", 700, 200);
    createCollectable("max", 200, 150);
    createCollectable("steve", 125, 50);
    // TODO 4 - Create Cannons
    createCannon("top", 800, 1500);
    createCannon("right", 775, 1000);
    createCannon("bottom", 200, 2000);
    createCannon("left", 190, 2500);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
