(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("map1",
{ "compressionlevel":-1,
 "height":9,
 "infinite":false,
 "layers":[
        {
         "data":[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 5, 5,
            5, 5, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 5, 5,
            5, 5, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 5, 5,
            5, 5, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 5, 5,
            5, 5, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 5, 5,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
         "height":9,
         "id":1,
         "name":"base",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0,
            0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0,
            0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0,
            0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0,
            0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0,
            0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0,
            0, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":9,
         "id":2,
         "name":"stone",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
            0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0,
            0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0,
            0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0,
            0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0,
            0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0,
            0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":9,
         "id":3,
         "name":"collision",
         "opacity":1,
         "type":"tilelayer",
         "visible":false,
         "width":16,
         "x":0,
         "y":0
        }],
 "nextlayerid":5,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.0",
 "tileheight":64,
 "tilesets":[
        {
         "columns":3,
         "firstgid":1,
         "image":"OutsideStone.png",
         "imageheight":192,
         "imagewidth":192,
         "margin":0,
         "name":"OutsideStone",
         "spacing":0,
         "tilecount":9,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":3,
         "firstgid":10,
         "image":"OutsideWood.png",
         "imageheight":192,
         "imagewidth":192,
         "margin":0,
         "name":"wood",
         "spacing":0,
         "tilecount":9,
         "tileheight":64,
         "tilewidth":64
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.10",
 "width":16
});