var playlist = new object ({vulfpeck: backpocket})

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
