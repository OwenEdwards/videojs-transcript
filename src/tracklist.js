/*
 *  Tracklist Helper
 */

/*global my*/
var trackList = function (plugin) {
  var activeTrack;
  return {
    get: function () {
      var validTracks = [];
      my.tracks = my.player.textTracks();
      for (var i=0; i<my.tracks.length; i++) {
        if (my.tracks[i].kind === 'captions' || my.tracks[i].kind === 'subtitles') {
          validTracks.push(my.tracks[i]);
        }
      }
      return validTracks;
    },
    active: function (tracks) {
      tracks.forEach(function (track) {
        if (track.mode === 'showing') {
          activeTrack = track;
          return track;
        }
      });
      // fallback to first track
      return activeTrack || tracks[0];
    },
  };
}(my);
