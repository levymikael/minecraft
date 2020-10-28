//class to create matrix:

class Array {
    constructor(length) {
        this.length = length;
    }
    createArray() {
        var array1 = [];
        for (var i = 0; i < this.length; i++) {
            array1.push(i);
        }
        return array1;
    }
    createMatrix(array) {
        var outerArray = this.createArray();
        var innerArray = array.createArray();
        for (var i = 0; i < this.length; i++) {
            outerArray.splice(i, 1, innerArray);
        }
        return outerArray;
    }
}

//matrix for sky:

var array1 = new Array(30);
var array2 = new Array(20);

var matrixBackground = array1.createMatrix(array2);

//matrix for ground:

var array3 = new Array(10);
var array4 = new Array(20);

var matrixSoil = array3.createMatrix(array4);

//array for top of ground:

var array5 = new Array(30);

var arraySoilTop = array5.createArray();

//function to create sky tiles in html according to matrix:

function createTiles(array) {
    for (var i = 0; i < array.length; i++) {
        var tileRow = $("<div />");
        tileRow.addClass("tile");
        tileRow.addClass("tileSky");
        $(".container").append(tileRow);
        for (var j = 0; j < array[i].length; j++) {
            var tileCol = $("<div />");
            tileCol.addClass("tile");
            tileCol.addClass("tileSky");
            $(".container").append(tileCol);
        }
    }
}

createTiles(matrixBackground);

//change selected div classes (from the matrix) to create the cloud:

function createCloud() {
    for (var i = 217; i < 219; i++) {
        var cloud = $("div.tile:nth-child(" + i + ")");
        cloud.addClass("cloud");
        cloud.removeClass("tileSky");
    }
    for (var i = 245; i < 250; i++) {
        var cloud = $("div.tile:nth-child(" + i + ")");
        cloud.addClass("cloud");
        cloud.removeClass("tileSky");

    }
    for (var i = 252; i < 255; i++) {
        var cloud = $("div.tile:nth-child(" + i + ")");
        cloud.addClass("cloud");
        cloud.removeClass("tileSky");

    }
    for (var i = 274; i < 285; i++) {
        var cloud = $("div.tile:nth-child(" + i + ")");
        cloud.addClass("cloud");
        cloud.removeClass("tileSky");

    }
    for (var i = 309; i < 312; i++) {
        var cloud = $("div.tile:nth-child(" + i + ")");
        cloud.addClass("cloud");
        cloud.removeClass("tileSky");

    }
}

createCloud();

//change selected div classes (from the matrix) to create the tree and leaves:

function createTree() {
    for (var i = 410; i < 415; i++) {
        var treeLeaves = $("div.tile:nth-child(" + i + ")");
        treeLeaves.addClass("tileLeaves");
        treeLeaves.removeClass("tileSky");
    }
    for (var i = 440; i < 445; i++) {
        var treeLeaves = $("div.tile:nth-child(" + i + ")");
        treeLeaves.addClass("tileLeaves");
        treeLeaves.removeClass("tileSky");
    }
    for (var i = 470; i < 475; i++) {
        var treeLeaves = $("div.tile:nth-child(" + i + ")");
        treeLeaves.addClass("tileLeaves");
        treeLeaves.removeClass("tileSky");
    }
    for (var i = 500; i < 505; i++) {
        var treeLeaves = $("div.tile:nth-child(" + i + ")");
        treeLeaves.addClass("tileLeaves");
        treeLeaves.removeClass("tileSky");
    }
    var treeLeaves = $("div.tile:nth-child(575)");
    treeLeaves.addClass("tileLeaves");
    treeLeaves.removeClass("tileSky");
    for (var i = 604; i < 607; i++) {
        var treeLeaves = $("div.tile:nth-child(" + i + ")");
        treeLeaves.addClass("tileLeaves");
        treeLeaves.removeClass("tileSky");
    }
    var treeTrunk = $("div.tile:nth-child(532)");
    treeTrunk.addClass("tileWood");
    treeTrunk.removeClass("tileSky");
    var treeTrunk2 = $("div.tile:nth-child(562)");
    treeTrunk2.addClass("tileWood");
    treeTrunk2.removeClass("tileSky");
    var treeTrunk3 = $("div.tile:nth-child(592)");
    treeTrunk3.addClass("tileWood");
    treeTrunk3.removeClass("tileSky");
    var treeTrunk4 = $("div.tile:nth-child(622)");
    treeTrunk4.addClass("tileWood");
    treeTrunk4.removeClass("tileSky");
}

createTree();

//change selected div classes (from the matrix) to create the rocks:

function createRocks() {
    for (var i = 619; i < 621; i++) {
        var rocks = $("div.tile:nth-child(" + i + ")");
        rocks.addClass("tileRock");
        rocks.removeClass("tileSky");
    }
    var stones = $("div.tile:nth-child(630)");
    stones.addClass("tileRock");
    stones.removeClass("tileSky");
}

createRocks();

//function to create top ground tiles in html according to array:

function createTopGroundTiles(array) {
    for (var i = 0; i < array.length; i++) {
        var tileRow = $("<div />");
        tileRow.addClass("tile");
        tileRow.addClass("groundtop");
        $(".container").append(tileRow);
    }
}

createTopGroundTiles(arraySoilTop);

//function to create ground tiles in html according to matrix:

function createGroundTiles(array) {
    for (var i = 0; i < array.length; i++) {
        var tileRow = $("<div />");
        tileRow.addClass("tile");
        tileRow.addClass("ground");
        $(".container").append(tileRow);
        for (var j = 0; j < array[i].length; j++) {
            var tileCol = $("<div />");
            tileCol.addClass("tile");
            tileCol.addClass("ground");
            $(".container").append(tileCol);
        }
    }
}

createGroundTiles(matrixSoil);


//function to change class of ground tile when clicked:

function changeGroundTile() {
    if ($(event.target).hasClass("ground") || $(event.target).hasClass("groundtop")) {
        invetoryItemUpdate();
        $(event.target).removeClass("ground");
        $(event.target).removeClass("groundtop");
        $(event.target).addClass("tileSky");
    }
}

$(".ground").on("click", changeGroundTile);
$(".groundtop").on("click", changeGroundTile);

// Shovel Tool selection
$("#shovel").on("click", removePointerNoneGround)

function removePointerNoneGround() {
    $("#shovel").toggleClass("selectedTool");
    $("#axe").removeClass("selectedTool");
    $("#pickaxe").removeClass("selectedTool");
    $(".ground").css("pointer-events", "all")
    $(".groundtop").css("pointer-events", "all")
    $(".tileRock").css("pointer-events", "none");
    $(".tileLeaves").css("pointer-events", "none");
    $(".tileWood").css("pointer-events", "none");

}

//update inventory item:

function invetoryItemUpdate() {
    var tileClicked = $(event.target).attr("class");
    //console.log(tileClicked);
    $("#inventory-item").removeClass();
    $("#inventory-item").addClass(tileClicked);

}

// function to change class of stone tile:

function changeStoneTile() {
    if ($(event.target).hasClass("tileRock")) {
        invetoryItemUpdate();
        $(event.target).removeClass("tileRock");
        $(event.target).addClass("tileSky");
    }
}

$(".tileRock").on("click", changeStoneTile);

// Pickaxe tool selection

function removePointerNoneStones() {
    $("#pickaxe").toggleClass("selectedTool");
    $("#axe").removeClass("selectedTool");
    $("#shovel").removeClass("selectedTool");
    $(".ground").css("pointer-events", "none");
    $(".groundtop").css("pointer-events", "none");
    $(".tileRock").css("pointer-events", "all");
    $(".tileLeaves").css("pointer-events", "none");
    $(".tileWood").css("pointer-events", "none");

}
$("#pickaxe").on("click", removePointerNoneStones);

// function to change class of tree tile:

function changeTreeTile() {
    if ($(event.target).hasClass("tileWood") || $(event.target).hasClass("tileLeaves")) {
        invetoryItemUpdate();
        $(event.target).removeClass("tileWood");
        $(event.target).removeClass("tileLeaves");
        $(event.target).addClass("tileSky");
    }
}

$(".tileWood").on("click", changeTreeTile);
$(".tileLeaves").on("click", changeTreeTile);

// Axe tool selection

function removePointerNoneTree() {
    $("#axe").toggleClass("selectedTool");
    $("#pickaxe").removeClass("selectedTool");
    $("#shovel").removeClass("selectedTool");
    $(".ground").css("pointer-events", "none");
    $(".groundtop").css("pointer-events", "none");
    $(".tileRock").css("pointer-events", "none");
    $(".tileLeaves").css("pointer-events", "all");
    $(".tileWood").css("pointer-events", "all");

}
$("#axe").on("click", removePointerNoneTree);


// inventory Picker function

$("#inventory-item").mousedown(function (e) {
    if (e.which == 1) {
        $(".container").css("pointer-events", "all");
        $("#inventory-item").addClass("selected")
    }
});

$("div.tile").mousedown(function (e) {
    if (e.which == 1) {
        if ($("#inventory-item").hasClass("selected")) {
            var inventoryItemPickedClass = $("#inventory-item").attr("class");
            $(e.target).addClass(inventoryItemPickedClass);
            $("#inventory-item").removeClass()
        }
    }
})

