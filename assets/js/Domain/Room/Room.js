/**
 * Room Data Model
 */
 class Room
 {   
    /**
     * The Constructor
     * 
     * @param {string}  varName The room identifier
     * @param {string}  name The room name
     * @param {string}  look The outward facing description of the room
     * @param {array}   items The list of Items in the room
     * @param {bool}    isDark Is the room dark
     */
    constructor(varName, name, look, items, isDark = false)
    {
        this.varName    = varName;
        this.name       = name;
        this.look       = look;
        this.items      = items;
        this.visited    = false;
        this.isDark     = isDark;
        this.darkText   = "You have moved into a dark place.<br />It is pitch black. You are likely to be eaten by a grue.<br />";
    }

    /**
     * 
     * Add exit creates an exit solution for the room object.
     * 
     * @param {string} direction 
     * @param {string} exit
     */
    addExit(direction, exit) {
    
        switch(direction){
    
            case "north":
                this.north = exit;
                break;
    
            case "northeast":
                this.northeast = exit;
                break;
    
            case "east":
                this.east = exit;
                break;
    
            case "southeast":
                this.southeast = exit;
                break;
    
            case "south":
                this.south = exit;
                break;
    
            case "southwest":
                this.southwest = exit;
                break;
    
            case "west":
                this.west = exit;
                break;
    
            case "northwest":
                this.northwest = exit;
                break;
    
            case "up":
                this.up = exit;
                break;
            case "down":
                this.down = exit;
                break;
            case "enter":
                this.enter = exit;
                break;
            case "exit":
                this.exit = exit;
                break;
            case "open":
                this.open = exit;
                break;
            case "climb":
                this.climb = exit;
                break;
            case "move":
                this.move = exit;
                break;
            case "rug":
                this.move = exit;
                break;
        }

    }
 }

var roomList = {
    "northOfHouse": new Room("northOfHouse","North of House", "You are facing the north side of a white house. There is no door here,<br /> and all the windows are boarded up. To the north a narrow path winds through the trees.", [], false),
    "forestPath":  new Room("forestPath","Forest Path", "This is a path winding through a dimly lit forest. The path heads north-south here.<br /> One particulary large tree with some low branches stands at the edge of the path.", [], false),
    "forest_one": new Room("forest_one", "Forest", "This is a dimly lit forest, with large trees all around", [], false),
    "forest_two": new Room("forest_two","Forest", "This is a forest, with trees in all directions.<br />To the east, there appears to be light.", [], false),
    "forest_three": new Room("forest_three","Forest", "This is a dimly lit forest, with large trees all around.", [], false),
    "forest_four": new Room("forest_four","Forest", "The forest thins out, revealing impassable mountains.", [], false),
    "stormTossed": new Room("stormTossed","Forest", "Storm-tossed trees block your way.", [], false),
    "southOfHouse": new Room("southOfHouse","South of House", "You are facing the south side of a white house.<br /> There is no door here, and all the windows are boarded", [], false),
    "westOfHouse": new Room("westOfHouse","West of House", "This is an open field west of a white house, with a boarded front door.<br />There is a small mailbox here.", [mat], false),
    "behindHouse": new Room("behindHouse","Behind House", "You are behind the white house. A path leads into the forest to the east. <br />In one corner of the house there is a small window which is slightly ajar.",[], false),
    "windowBehindHouse": new Room("windowBehindHouse","Behind House", "You are behind the white house. A path leads into the forest to the east. <br />In one corner of the house there is a small window which is open.",[], false),
    "kitchen": new Room("kitchen","Kitchen", "You are in the kitchen of a the white house. A table seems to have been used recently for the<br />preparation of food. A passage leads to the west and a dark staircase can be seen leading upward.<br /> A dark chimney leads down and to the east is a small window which is open.<br />",[sack, bottle], false),
    "mailbox": new Room("mailbox", "Mailbox", "Opening the mailbox reveals a leaflet.",[leaflet]),
    "tree": new Room("tree", "Up A Tree", "You are about 10 feet above the ground nestled among some large branches.<br />The nearest branch above you is out of reach. Besides you on the branch is a small birds nest.", [egg], false),
    "northClearing": new Room("northClearing", "Clearing", "You are in a clearing, with a forest surrounding you on all sides. A path leads south.", [leaves], false),
    "eastClearing": new Room("eastClearing", "Clearing", "You are in a small clearing in a well marked forest path that extends to the east and west.", [], false),
    "canyonView": new Room("canyonView", "Canyon View", "You are at the top of the Great Canyon on its west wall.<br />From here there is a marvelous view of the canyon and parts of the Frigid River upstream. Across the canyon, the walls of the White Cliffs join the mighty ramparts of the Flathead Mountains to the east.<br /> Following the Canyon upstream to the north, Aragain Falls may be seen, complete with rainbow.<br /> The mighty Frigid River flows out from a great dark cavern. To the west and south can be seen an immense forest, stretching for miles around. A path leads northwest.<br > It is possible to climb down into the canyon from here.", [], false),
    "rockyLedge": new Room("rockyLedge", "Rocky Ledge", "You are on a ledge about halfway up the wall of the river canyon.<br />You can see from here that the main flow from Aragain Falls twists along a passage which it is impossible for you to enter.<br />Below you is the canyon bottom. Above you is more cliff, which appears climbable.", [], false),
    "canyonBottom": new Room("canyonBottom", "Canyon Bottom", "You are beneath the walls of the river canyon which may be climbable here.<br />The lesser part of the runoff of Aragain Falls flows by below. To the north is a narrow path.", [], false),
    "endOfRainbow": new Room("endOfRainbow", "End of Rainbow", "You are on a small, rocky beach on the continuation of the Frigid River past the Falls.<br /> The beach is narrow due to the presence of the White Cliffs. The river canyon opens here and sunlight shines in from above.<br />A rainbow crosses over the falls to the east and a narrow path continues to the southwest.", [], false),
    "chimney": new Room("chimney", "Chimney", "You are in a small cold chimney, on the wall reads 'Santa was here'.",[], true),
    "livingRoom": new Room("livingRoom", "Living Room", "You are in the living room. There is a doorway to the east, a wooden door with strange gothic lettering to the west, which appears to be nailed shut, a trophy case, and a large oriental rug in the center of the room.",[sword, lantern], false),
    "livingRoomRugMoved": new Room("livingRoomRugMoved", "Living Room", "With a great effort, the rug is moved to one side of the room, revealing the dusty cover of a closed trap door.",[sword, lantern], false),
    "livingRoomTrapDoor": new Room("livingRoomTrapDoor", "Trap Door", "The door reluctantly opens to reveal a rickety staircase descending into darkness.",[], false),
    "cellar": new Room("cellar", "Cellar", "You are in a dark and damp cellar with a narrow passageway leading north, and a crawlway to the south. On the west is the bottom of a steep metal ramp which is unclimbable.",[], true),
    "eastofchasm": new Room("eastofchasm", "East of Chasm", "You are on the east edge of a chasm, the bottom of which cannot be seen. A narrow passage goes north, and the path you are on continues to the east.",[], true),
    "gallery": new Room("gallery", "Gallery", "This is an art gallery. Most of the paintings have been stolen by vandals with exceptional taste. The vandals left through either the north or west exits. Fortunately, there is still one chance for you to be a vandal, for on the far wall is a painting of unparalleled beauty.",[], false),
    "sudio": new Room("studio", "Studio", "This appears to have been an artist's studio. The walls and floors are splattered with paints of 69 different colors. Strangely enough, nothing of value is hanging here. At the south end of the room is an open door (also covered with paint). A dark and narrow chimney leads up from a fireplace; although you might be able to get up it, it seems unlikely you could get back down. Loosely attached to a wall is a small piece of paper." [], false),
    "kitchen": new Room("kitchen", "Kitchen", "On the table is an elongated brown sack, smelling of hot peppers. A bottle is sitting on the table. The glass bottle contains: A quantity of water.", [], false),
    "attic": new Room("attic", "Attic", "This is the attic. The only exit is a stairway leading down. A large coile of rope is lying in the corner. On a table is a nasty-looking knife.", [], false),
    "livingRoomSword": new Room("livingRoomSword", "Living Room", "Above the trophy case hangs an elvish sword of great antiquity", [], false),
    "cellarSword": new Room("cellarSword", "Cellar", "Your sword is glowing with a faint blue glow", [], false),
    "trollroom": new Room("trollroom", "The Troll Room", "This is a small room with passages to the east and south and a forbidding hole leading west. Bloodstains and deep scratches (perhaps made by an axe) mar the walls. A nasty-looking troll, brandishing a bloody axe, blocks all passages out od the room. Your sword has begun to glow very brightly. The troll's mightly blow drops you to your kneew.", [], false),
    "eastwestpassage": new Room("eastwestpassage", "East-West Passage", "This is a narrow east-west passageway. There is a narrow stairway leading down at the north end of the room.", [], false),
    "roundroom": new Room("roundroom", "Round Room", "This is a circular stone room with passages in all directions. Several of them have infortunately been blocked by cave-ins.", [], false),
    "domeroom": new Room("domeroom", "Dome Room", "You are at the periphery of a large dome, which forms the ceiling of another room below. Protecting you from a precipitous drop is a wooden railing which circles the dome.", [], false),
    "torchroom": new Room("torchroom", "Torch Room", "This is a large room with a prominent doorway leading to a down staircase. Above you is a large dome. Up around the edge of the dome (20 feet up) is a wooden railing. In the center of the room sits a white marble pedestal. A piece of rope descends from the railing aboce, ending some five feet above your head. Sitting on the pedestal is a flaming torch, made of ivory.", [], false),
    "temple": new Room("temple", "Temple", "This is the north end of a large temple. On the east wall is a anvient inscription, probably a prayer in a long-forgotten language. Below the prayer is a staircase leading down. The west wall is solid granite. The exit to the north end of the room is through huge marble pillars. There is a bras bell here.", [], false),
    "egyptianroom": new Room("egyptianroom", "Egyptian Room", "This a room wich looks like an Egyptian tomb. There is an ascending staircase to the west. The solid-gold coffin used fo the burial of Ramses II is here.", [], false),
    "templesecond": new Room("templesecond", "Temple", "There is a brass bell here.", [], false),
    "altar": new Room("altar", "Altar", "This is the south end of a large temple. In front of you is what appears to be an altar. In one corner is a small hole in the floor which leads into darkness. Your probably could not get back up it. On the two ends of the altar are bruning candle. On the altar is a large black book, open to page 569.", [], false),
    
}
roomList.westOfHouse.visited = true;
// Forest One
roomList.forest_one.addExit("south", roomList.stormTossed);
roomList.forest_one.addExit("north", roomList.southOfHouse);
// Storm Tossed Forest
roomList.stormTossed.addExit("north", roomList.forest_one);
// North of House
roomList.northOfHouse.addExit("east", roomList.behindHouse);
roomList.northOfHouse.addExit("south", roomList.southOfHouse);
roomList.northOfHouse.addExit("north", roomList.forestPath);
roomList.northOfHouse.addExit("west", roomList.westOfHouse);
//Forest Path
roomList.forestPath.addExit("south", roomList.northOfHouse);
roomList.forestPath.addExit("climb", roomList.tree);
roomList.forestPath.addExit("up", roomList.tree);
roomList.forestPath.addExit("north", roomList.northClearing);
// North Clearing
roomList.northClearing.addExit("west", roomList.forest_two);
roomList.northClearing.addExit("east", roomList.forest_three);
roomList.northClearing.addExit("south", roomList.forestPath);
// Forest ( 2 )
roomList.forest_two.addExit("east", roomList.forestPath);
roomList.forest_two.addExit("north", roomList.northClearing);
roomList.forest_two.addExit("south", roomList.westOfHouse);
// Forest ( 3 )
roomList.forest_three.addExit('west', roomList.forestPath);
roomList.forest_three.addExit('east', roomList.forest_four);
// Forest ( 4 )
roomList.forest_four.addExit('west', roomList.forestPath);
// Tree
roomList.tree.addExit("climb",roomList.forestPath);
roomList.tree.addExit("down",roomList.forestPath);
roomList.tree.addExit("south",roomList.northOfHouse);
// South of House
roomList.southOfHouse.addExit("north", roomList.westOfHouse);
roomList.southOfHouse.addExit("south", roomList.forest_one);
roomList.southOfHouse.addExit("east", roomList.behindHouse);
roomList.southOfHouse.addExit("west", roomList.westOfHouse);
// West of House
roomList.westOfHouse.addExit("north", roomList.northOfHouse);
roomList.westOfHouse.addExit("south", roomList.southOfHouse);
roomList.westOfHouse.addExit("east", roomList.behindHouse);
roomList.westOfHouse.addExit("west", roomList.forest_two);
roomList.westOfHouse.addExit("open", roomList.mailbox)
// Mailbox
roomList.mailbox.addExit("north", roomList.northOfHouse);
roomList.mailbox.addExit("south", roomList.southOfHouse);
roomList.mailbox.addExit("east", roomList.behindHouse);
roomList.mailbox.addExit("west", roomList.forest_two);
//Behind House
roomList.behindHouse.addExit("open", roomList.windowBehindHouse);
roomList.behindHouse.addExit("south", roomList.southOfHouse);
roomList.behindHouse.addExit("west", roomList.westOfHouse);
roomList.behindHouse.addExit("east", roomList.eastClearing);
roomList.behindHouse.addExit("north", roomList.northOfHouse);
// East Clearing
roomList.eastClearing.addExit("west", roomList.behindHouse);
roomList.eastClearing.addExit("east", roomList.canyonView);
// Canyon View
roomList.canyonView.addExit("west", roomList.eastClearing);
roomList.canyonView.addExit("east", roomList.rockyLedge);
roomList.canyonView.addExit("climb", roomList.rockyLedge);
roomList.canyonView.addExit("down", roomList.rockyLedge);
// Rocky Ledge
roomList.rockyLedge.addExit("west", roomList.canyonView);
roomList.rockyLedge.addExit("up", roomList.canyonView);
roomList.rockyLedge.addExit("down", roomList.canyonBottom);
roomList.rockyLedge.addExit("climb", roomList.canyonBottom);
// Canyon Bottom
roomList.canyonBottom.addExit("up", roomList.rockyLedge);
roomList.canyonBottom.addExit("climb", roomList.rockyLedge);
roomList.canyonBottom.addExit("north", roomList.endOfRainbow);
//End of Rainbow
roomList.endOfRainbow.addExit("south", roomList.canyonBottom);
//Window Behind House
roomList.windowBehindHouse.addExit("enter", roomList.kitchen);
roomList.windowBehindHouse.addExit("east", roomList.eastClearing);
roomList.windowBehindHouse.addExit("west", roomList.westOfHouse);
roomList.windowBehindHouse.addExit("north", roomList.northOfHouse);
roomList.windowBehindHouse.addExit("south", roomList.southOfHouse);
// Kitchen
roomList.kitchen.addExit("exit", roomList.behindHouse);
roomList.kitchen.addExit("up", roomList.chimney);
roomList.kitchen.addExit("west", roomList.livingRoom);
// Chimney
roomList.chimney.addExit("down", roomList.kitchen);
// Living Room
roomList.livingRoom.addExit("east", roomList.kitchen);
roomList.livingRoom.addExit("rug", roomList.livingRoomRugMoved);
// Living Room rug moved
roomList.livingRoomRugMoved.addExit("east", roomList.kitchen);
roomList.livingRoomRugMoved.addExit("open", roomList.livingRoomTrapDoor);
// Living Room Trap Door
roomList.livingRoomTrapDoor.addExit("down", roomList.cellar);
roomList.livingRoomTrapDoor.addExit("east", roomList.kitchen);
// Cellar
roomList.cellar.addExit("up", roomList.livingRoom);
roomList.cellar.addExit("south", roomList.eastofchasm);
// East of Chasm
roomList.eastofchasm.addExit("north", roomList.cellar);
roomList.eastofchasm.addExit("east", roomList.gallery);
// Gallery
roomList.gallery.addExit("west", roomList.eastofchasm);
roomList.gallery.addExit("north", roomList.studio);
// Studio
roomList.studio.addExit("south", roomList.gallery);
roomList.studio.addExit("up", roomList.kitchen);
// Kitchen
roomList.kitchen.addExit("down", roomList.studio);
roomList.kitchen.addExit("up", roomList.attic);
roomList.kitchen.addExit("west", roomList.livingRoomSword);
// Attic
roomList.attic.addExit("down", roomList.kitchen);
// Living Room Sword
roomlist.livingRoomSword.addExit("down", roomList.cellarsword);
// Cellar Sword
roomlist.cellarsword.addExit("north", roomList.trollroom);
// The Troll Room
roomlist.trollroom.addExit("east", roomList.easwestpassage);
// East-West Passage
roomlist.eastwestpassage.addExit("east", roomList.roundroom);
// Round Room
