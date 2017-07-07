import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Songs from './Songs';

export default class Playlist extends React.Component {

  constructor () {
    super();
    this.state = {
      playlist: {}
    };
  }

 componentDidMount () {
  const playlistId = this.props.match.params.playlistId;
  axios.get(`/api/playlists/${playlistId}`)
    .then(res => res.data)
    .then(playlist => {
      this.setState({ playlist: playlist });
    });
  }

  render () {
    const playlist = this.state.playlist;
    const songs = playlist.songs || [];

    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} />
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    )
  }
}
