

const nodeFilterSelector = document.getElementById("nodeFilterSelect");
const nodeFilterSelectorApp = document.getElementById("nodeCount");
const edgeFilters = document.getElementsByName("edgesFilter");

function startNetwork(data) {

    //recListFunc();

    var data2 = getScaleFreeNetwork(10);

    const container = document.getElementById("mynetwork");

    var options = {
        physics: {
            repulsion: {
                nodeDistance: 450,
                damping: 1,
            },
            barnesHut: {
                springLength: 300,
                springConstant: 0.01,
                centralGravity: 0.01,
            },
            timestep: 0.99,
        },
        edges: {
            selectionWidth: 6,
        },
        groups: {
            app: {
                shape: "dot",
            },
            author: {
                shape: "icon",
                icon: {
                    face: "'FontAwesome'",
                    code: "\uf007",
                    size: 100,
                    color: "gray",
                },
            },
        }
    };

    new vis.Network(container, data, options);
}

/**
 * In this example we do not mutate nodes or edges source data.
 */
const nodes = new vis.DataSet([
    { id: 1, label: "Lim Yen Ping", group: "author"},
    { id: 2, label: "Emanuel Seuneke", group: "author"},
    { id: 3, label: "Rhonda Paschal", group: "author"},
    { id: 4, label: "Filipe Governa", group: "author"},
    { id: 5, label: "Andri Untoro", group: "author"},
    { id: 6, label: "Janko Kinčeš", group: "author"},
    { id: 7, label: "Edgar Rojas", group: "author"},
    { id: 8, label: "Saman Kianfar", group: "author"},
    { id: 9, label: "Christina Reed", group: "author"},
    { id: 10, label: "Josh Clark", group: "author"},
    { id: 11, label: "101-in-1 Games HD", group: "app"},
    { id: 12, label: "Adobe Acrobat Reader: PDF Viewer", group: "app"},
    { id: 13, label: "Airport City", group: "app"},
    { id: 14, label: "Bakery Story 2", group: "app"},
    { id: 15, label: "Candy Crush Soda Saga", group: "app", top: "yes"},
    { id: 16, label: "Castle Clash: Heroes of the Empire US", group: "app", top: "yes"},
    { id: 17, label: "Castle Story™", group: "app"},
    { id: 18, label: "Chrome Beta", group: "app"},
    { id: 19, label: "Contacts", group: "app"},
    { id: 20, label: "Farm Story 2", group: "app"},
    { id: 21, label: "Google Photos", group: "app", top: "yes"},
    { id: 22, label: "Google Play Movies & TV", group: "app"},
    { id: 23, label: "Google Play Music", group: "app", top: "yes"},
    { id: 24, label: "Google Sheets", group: "app"},
    { id: 25, label: "Mega Mall Story Lite", group: "app"},
    { id: 26, label: "Papa Pear Saga", group: "app"},
    { id: 27, label: "Restaurant Story 2", group: "app"},
    { id: 28, label: "Restaurant Story™", group: "app"},
    { id: 29, label: "Samsung Smart Switch Mobile", group: "app"},
    { id: 30, label: "Townsmen 6 FREE", group: "app"},
    { id: 31, label: "Transport Empire: Steam Tycoon", group: "app"},
    { id: 32, label: "Virus Cleaner 2019 - Antivirus", group: "app"},
    { id: 33, label: "2 Cars", group: "app"},
    { id: 34, label: "Amazing Brick", group: "app"},
    { id: 35, label: "Asphalt Nitro", group: "app"},
    { id: 36, label: "Crazy Circle", group: "app"},
    { id: 37, label: "Darts Master 3D", group: "app"},
    { id: 38, label: "Hop", group: "app"},
    { id: 39, label: "Jump Car", group: "app"},
    { id: 40, label: "Ketchapp Soccer", group: "app"},
    { id: 41, label: "Loop", group: "app"},
    { id: 42, label: "Mine Quest 2 - Mining RPG", group: "app"},
    { id: 43, label: "Move the Block : Slide Puzzle", group: "app"},
    { id: 44, label: "Skyward", group: "app"},
    { id: 45, label: "Spin", group: "app"},
    { id: 46, label: "Spiral Tower", group: "app"},
    { id: 47, label: "Stickman Downhill Monstertruck", group: "app"},
    { id: 48, label: "The Tower", group: "app"},
    { id: 49, label: "Wall Switch", group: "app"},
    { id: 50, label: "Wire", group: "app"},
    { id: 51, label: "AlphaBetty Saga", group: "app"},
    { id: 52, label: "BLOOD & GLORY (NR)", group: "app"},
    { id: 53, label: "BLOOD & GLORY: LEGEND", group: "app"},
    { id: 54, label: "Backgammon Plus", group: "app"},
    { id: 55, label: "Basketball Stars", group: "app"},
    { id: 56, label: "Bejeweled Classic", group: "app"},
    { id: 57, label: "Block! Hexa Puzzle™", group: "app"},
    { id: 58, label: "Chess Free", group: "app"},
    { id: 59, label: "EA SPORTS UFC®", group: "app"},
    { id: 60, label: "My Boo - Your Virtual Pet Game", group: "app"},
    { id: 61, label: "My Derp - The World's Dumbest Virtual Pet", group: "app"},
    { id: 62, label: "Real Racing 3", group: "app"},
    { id: 63, label: "Townsmen", group: "app"},
    { id: 64, label: "Block Craft 3D: Building Simulator Games For Free", group: "app"},
    { id: 65, label: "Border Siege [war & risk]", group: "app"},
    { id: 66, label: "Candy Crush Jelly Saga", group: "app", top: "yes"},
    { id: 67, label: "Easy Voice Recorder Pro", group: "app"},
    { id: 68, label: "Google Docs", group: "app", top: "yes"},
    { id: 69, label: "Let's Create! Pottery", group: "app"},
    { id: 70, label: "MX Player Pro", group: "app"},
    { id: 71, label: "Microsoft Office Lens - PDF Scanner", group: "app"},
    { id: 72, label: "Microsoft PowerPoint: Slideshows and Presentations", group: "app"},
    { id: 73, label: "Modern Combat 4: Zero Hour", group: "app"},
    { id: 74, label: "Okey Plus", group: "app"},
    { id: 75, label: "Spill Zone", group: "app"},
    { id: 76, label: "Springer", group: "app"},
    { id: 77, label: "Adobe Lightroom - Photo Editor", group: "app"},
    { id: 78, label: "Adobe Photoshop Express:Photo Editor Collage Maker", group: "app"},
    { id: 79, label: "Adobe Photoshop Mix - Cut-out", group: "app"},
    { id: 80, label: "Chrome Dev", group: "app"},
    { id: 81, label: "Facebook Ads Manager", group: "app"},
    { id: 83, label: "Google Duo - High Quality Video Calls", group: "app", top: "yes"},
    { id: 84, label: "Samsung Smart Home", group: "app"},
    { id: 85, label: "Samsung Smart View", group: "app"},
    { id: 86, label: "Trusted Contacts", group: "app"},
    { id: 87, label: "101-in-1 Games", group: "app"},
    { id: 88, label: "Box Fox Lite:Puzzle Platformer", group: "app"},
    { id: 89, label: "Bubble Level", group: "app"},
    { id: 90, label: "Coin Dozer - Free Prizes", group: "app"},
    { id: 91, label: "Coin Dozer: Casino", group: "app"},
    { id: 92, label: "Draw Something Classic", group: "app"},
    { id: 93, label: "Flappy Golf 2", group: "app"},
    { id: 94, label: "Let's Create! Pottery Lite",group: "app"},
    { id: 95, label: "Solitaire", group: "app"},
    { id: 96, label: "Card Wars - Adventure Time", group: "app"},
    { id: 97, label: "Google Maps Go - Directions", group: "app"},
    { id: 98, label: "Google Play Books - Ebooks", group: "app"},
    { id: 99, label: "Hotspot Shield Free VPN Proxy & Wi-Fi Security", group: "app"},
    { id: 100, label: "Just Dance Controller", group: "app"},
    { id: 101, label: "Maps - Navigate & Explore", group: "app"},
    { id: 102, label: "Rayman Fiesta Run", group: "app"},
    { id: 103, label: "Rayman Jungle Run", group: "app"},
    { id: 104, label: "Ringtones & Wallpapers for Me", group: "app"},
    { id: 105, label: "Android Accessibility Suite", group: "app"},
    { id: 106, label: "Intersection Explorer", group: "app"},
    { id: 107, label: "MX Player", group: "app", top: "yes"},
    { id: 108, label: "Your Phone Companion", group: "app"},
    { id: 109, label: "Bakery Story™", group: "app"},
    { id: 110, label: "Dragon Story™", group: "app"},
    { id: 111, label: "Fashion Story: Daring Red", group: "app"},
    { id: 112, label: "Fashion Story: Spring Runway", group: "app"},
    { id: 113, label: "Fashion Story™", group: "app"},
    { id: 114, label: "Make7! Hexa Puzzle", group: "app"},
    { id: 115, label: "Restaurant Story: Hearty Feast", group: "app"},
    { id: 116, label: "Asphalt 8: Airborne - Fun Real Car Racing Game", group: "app"},
    { id: 117, label: "Cameringo+ Filters Camera", group: "app"},
    { id: 118, label: "Candy Crush Saga", group: "app", top : "yes"},
    { id: 119, label: "Ketchapp Winter Sports", group: "app"},
    { id: 120, label: "Ski Safari: Adventure Time'", group: "app"},
]);

const edges = new vis.DataSet([
    {from: 1, to: 11, relation: "positive", color: { color: "blue" },},
    {from: 1, to: 12, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 13, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 14, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 15, relation: "negative", color: { color: "red" },},
    {from: 1, to: 16, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 17, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 18, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 19, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 20, relation: "positive", color: { color: "blue" },},
    {from: 1, to: 21, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 22, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 23, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 24, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 25, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 26, relation: "negative", color: { color: "red" },},
    {from: 1, to: 27, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 28, relation: "positive", color: { color: "blue" },},
    {from: 1, to: 29, relation: "negative", color: { color: "red" },},
    {from: 1, to: 30, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 31, relation: "neutral", color: { color: "black" },},
    {from: 1, to: 32, relation: "neutral", color: { color: "black" },},

    {from: 2, to: 33, relation: "negative", color: { color: "red" },},
    {from: 2, to: 34, relation: "negative", color: { color: "red" },},
    {from: 2, to: 35, relation: "negative", color: { color: "red" },},
    {from: 2, to: 15, relation: "negative", color: { color: "red" },},
    {from: 2, to: 36, relation: "negative", color: { color: "red" },},
    {from: 2, to: 37, relation: "negative", color: { color: "red" },},
    {from: 2, to: 21, relation: "neutral", color: { color: "black" },},
    {from: 2, to: 38, relation: "negative", color: { color: "red" },},
    {from: 2, to: 39, relation: "negative", color: { color: "red" },},
    {from: 2, to: 40, relation: "negative", color: { color: "red" },},
    {from: 2, to: 41, relation: "positive", color: { color: "blue" },},
    {from: 2, to: 42, relation: "negative", color: { color: "red" },},
    {from: 2, to: 43, relation: "negative", color: { color: "red" },},
    {from: 2, to: 44, relation: "negative", color: { color: "red" },},
    {from: 2, to: 45, relation: "negative", color: { color: "red" },},
    {from: 2, to: 46, relation: "negative", color: { color: "red" },},
    {from: 2, to: 47, relation: "negative", color: { color: "red" },},
    {from: 2, to: 48, relation: "negative", color: { color: "red" },},
    {from: 2, to: 49, relation: "positive", color: { color: "blue" },},
    {from: 2, to: 50, relation: "negative", color: { color: "red" },},

    {from: 3, to: 13, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 51, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 52, relation: "neutral", color: { color: "black" },},
    {from: 3, to: 53, relation: "negative", color: { color: "red" },},
    {from: 3, to: 54, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 55, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 56, relation: "negative", color: { color: "red" },},
    {from: 3, to: 57, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 15, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 58, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 59, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 21, relation: "neutral", color: { color: "black" },},
    {from: 3, to: 22, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 60, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 61, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 62, relation: "positive", color: { color: "blue" },},
    {from: 3, to: 29, relation: "neutral", color: { color: "black" },},
    {from: 3, to: 63, relation: "neutral", color: { color: "black" },},
    {from: 3, to: 31, relation: "positive", color: { color: "blue" },},

    {from: 4, to: 64, relation: "negative", color: { color: "red" },},
    {from: 4, to: 57, relation: "negative", color: { color: "red" },},
    {from: 4, to: 65, relation: "negative", color: { color: "red" },},
    {from: 4, to: 66, relation: "negative", color: { color: "red" },},
    {from: 4, to: 67, relation: "positive", color: { color: "blue" },},
    {from: 4, to: 68, relation: "negative", color: { color: "red" },},
    {from: 4, to: 21, relation: "negative", color: { color: "red" },},
    {from: 4, to: 22, relation: "positive", color: { color: "blue" },},
    {from: 4, to: 24, relation: "positive", color: { color: "blue" },},
    {from: 4, to: 69, relation: "negative", color: { color: "red" },},
    {from: 4, to: 70, relation: "positive", color: { color: "blue" },},
    {from: 4, to: 71, relation: "positive", color: { color: "blue" },},
    {from: 4, to: 72, relation: "positive", color: { color: "blue" },},
    {from: 4, to: 73, relation: "negative", color: { color: "red" },},
    {from: 4, to: 74, relation: "negative", color: { color: "red" },},
    {from: 4, to: 75, relation: "negative", color: { color: "red" },},
    {from: 4, to: 76, relation: "negative", color: { color: "red" },},

    {from: 5, to: 12, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 77, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 78, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 79, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 18, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 80, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 81, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 68, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 83, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 21, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 23, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 24, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 71, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 84, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 29, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 85, relation: "positive", color: { color: "blue" },},
    {from: 5, to: 86, relation: "positive", color: { color: "blue" },},

    {from: 6, to: 87, relation: "negative", color: { color: "red" },},
    {from: 6, to: 64, relation: "neutral", color: { color: "black" },},
    {from: 6, to: 88, relation: "neutral", color: { color: "black" },},
    {from: 6, to: 89, relation: "positive", color: { color: "blue" },},
    {from: 6, to: 90, relation: "neutral", color: { color: "black" },},
    {from: 6, to: 91, relation: "positive", color: { color: "blue" },},
    {from: 6, to: 92, relation: "negative", color: { color: "red" },},
    {from: 6, to: 93, relation: "neutral", color: { color: "black" },},
    {from: 6, to: 83, relation: "positive", color: { color: "blue" },},
    {from: 6, to: 22, relation: "negative", color: { color: "red" },},
    {from: 6, to: 23, relation: "negative", color: { color: "red" },},
    {from: 6, to: 94, relation: "negative", color: { color: "red" },},
    {from: 6, to: 43, relation: "negative", color: { color: "red" },},
    {from: 6, to: 29, relation: "neutral", color: { color: "black" },},
    {from: 6, to: 95, relation: "neutral", color: { color: "black" },},

    {from: 7, to: 78, relation: "neutral", color: { color: "black" },},
    {from: 7, to: 79, relation: "neutral", color: { color: "black" },},
    {from: 7, to: 96, relation: "negative", color: { color: "red" },},
    {from: 7, to: 68, relation: "negative", color: { color: "red" },},
    {from: 7, to: 83, relation: "positive", color: { color: "blue" },},
    {from: 7, to: 97, relation: "positive", color: { color: "blue" },},
    {from: 7, to: 21, relation: "negative", color: { color: "red" },},
    {from: 7, to: 98, relation: "positive", color: { color: "blue" },},
    {from: 7, to: 23, relation: "negative", color: { color: "red" },},
    {from: 7, to: 99, relation: "positive", color: { color: "blue" },},
    {from: 7, to: 100, relation: "positive", color: { color: "blue" },},
    {from: 7, to: 101, relation: "positive", color: { color: "blue" },},
    {from: 7, to: 71, relation: "negative", color: { color: "red" },},
    {from: 7, to: 72, relation: "positive", color: { color: "blue" },},
    {from: 7, to: 102, relation: "positive", color: { color: "blue" },},
    {from: 7, to: 103, relation: "negative", color: { color: "red" },},
    {from: 7, to: 104, relation: "positive", color: { color: "blue" },},

    {from: 8, to: 12, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 105, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 18, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 80, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 19, relation: "negative", color: { color: "red" },},
    {from: 8, to: 68, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 83, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 21, relation: "positive", color: { color: "blue" },},
    {from: 8, to: 98, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 22, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 23, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 24, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 106, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 107, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 101, relation: "neutral", color: { color: "black" },},
    {from: 8, to: 108, relation: "neutral", color: { color: "black" },},

    {from: 9, to: 13, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 14, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 109, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 66, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 17, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 110, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 20, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 111, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 112, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 83, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 22, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 114, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 27, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 28, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 31, relation: "positive", color: { color: "blue" },},
    {from: 9, to: 115, relation: "positive", color: { color: "blue" },},

    {from: 10, to: 78, relation: "positive", color: { color: "blue" },},
    {from: 10, to: 116, relation: "positive", color: { color: "blue" },},
    {from: 10, to: 52, relation: "negative", color: { color: "red" },},
    {from: 10, to: 53, relation: "neutral", color: { color: "black" },},
    {from: 10, to: 117, relation: "positive", color: { color: "blue" },},
    {from: 10, to: 118, relation: "positive", color: { color: "blue" },},
    {from: 10, to: 23, relation: "neutral", color: { color: "black" },},
    {from: 10, to: 119, relation: "negative", color: { color: "red" },},
    {from: 10, to: 70, relation: "negative", color: { color: "red" },},
    {from: 10, to: 102, relation: "negative", color: { color: "red" },},
    {from: 10, to: 120, relation: "positive", color: { color: "blue" },},
    {from: 10, to: 95, relation: "negative", color: { color: "red" },},
    {from: 10, to: 46, relation: "negative", color: { color: "red" },},
    {from: 10, to: 111, relation: "positive", color: { color: "blue" },},
    {from: 10, to: 112, relation: "positive", color: { color: "blue" },},
    {from: 10, to: 113, relation: "positive", color: { color: "blue" },},


]);

/**
 * filter values are updated in the outer scope.
 * in order to apply filters to new values, DataView.refresh() should be called
 */
let nodeFilterValue = "";
let nodeCount = "";
const edgesFilterValues = {
    positive: true,
    negative: true,
    neutral: true,
};

/*
      filter function should return true or false
      based on whether item in DataView satisfies a given condition.
    */
const nodesFilter = (node) => {
    console.log(nodeCount)
    if (nodeFilterValue === "") {
        return true;
    }
    if (nodeFilterValue !== "custom") {
        switch (nodeFilterValue) {
            case "app":
                return node.group === "app";
            case "top":
                return (node.group === "app" && node.top === "yes") || node.group === "author";
            case "author":
                return node.group === "author";
            default:
                return true;
        }
    } else {
        return node.label === nodeCount || node.group === "author"
    }
};

function getEdgesOfNode(nodeId) {
    return edges.get().filter(function (edge) {
        return edge.from === nodeId || edge.to === nodeId;
    });
}

const edgesFilter = (edge) => {
    return edgesFilterValues[edge.relation];
};

const nodesView = new vis.DataView(nodes, { filter: nodesFilter });
const edgesView = new vis.DataView(edges, { filter: edgesFilter });

nodeFilterSelector.addEventListener("change", (e) => {
    // set new value to filter variable
    nodeFilterValue = e.target.value;

    /*
          refresh DataView,
          so that its filter function is re-calculated with the new variable
        */
    nodesView.refresh();
});

nodeFilterSelectorApp.addEventListener("change", (e) => {
    // set new value to filter variable
    nodeCount = e.target.value;
    console.log("change")
    /*
          refresh DataView,
          so that its filter function is re-calculated with the new variable
        */
    nodesView.refresh();
});

edgeFilters.forEach((filter) =>
    filter.addEventListener("change", (e) => {
        const { value, checked } = e.target;
        edgesFilterValues[value] = checked;
        edgesView.refresh();

    })
);

function recListFull() {

  console.log(69)
  //var file = JSON.parse("/script/test.json")
  //var file = require.config("./script/test.json");
  var i;
  var groupVal;
  document.write("OY GEVALT")
  const options = {};
  const data = new vis.DataSet(options);

  /*for (i = 0; i < file["nodes"].length; i++) {
    console.log(file["nodes"][i]);
    if (file["nodes"][i]["bipartite"] == 0) {
      groupVal = "author";
    }
    else {
      groupVal = "app";
    }
    data.add([
      { id: i+1, id: file["nodes"][i]["id"], group: groupVal};
    ]);

  }
  console.log(data);*/
}

recListFull();

startNetwork({ nodes: nodesView, edges: edgesView });


