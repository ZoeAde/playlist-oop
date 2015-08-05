//Make songs for playlist to use

var Song = function(title, artist, length) {
  this.title = title;
  this.artist = artist;
  this.length = length;
};

song1 = new Song(_____, ______, _____);


//playlist needs a name

var Playlist = function(name) {
  this.name = name;
  this.songs = [];
  this.playing = false;
  this.current_song = null;
};

//add songs to the playlist
Playlist.prototype.addSong = function(song) {
  this.songs.push(song);
};

//remove songs
Playlist.prototype.removeSong = function(song) {
  this.songs.remove(song);
};


//search artists
Playlist.prototype.getArtists = function() {
  var artists = [];
  for (i = 0; i < this.songs.length; i++) {
    artists.push(this.songs[i].artist);
  }
  return artists;
};

//play/next/stop (behavior)
Playlist.prototype.currentlyPlaying = function() {
  return this.songs[this.current_song];
};

Playlist.prototype.stopSongs = function() {
  this.playing = false;
};

Playlist.prototype.playSongs = function() {
  this.current_song = [0];
};

Playlist.prototype.nextSong = function() {
  this.current_song += 1;
};

Playlist.prototype.previousSong = function() {
  this.current_song -= 1;
};

//shuffle (behavior)
