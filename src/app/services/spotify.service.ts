import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SpotifyService {
	http;

	static get parameters() {
		return [Http];
	}

  constructor(http) {
  	this.http = http;
  }

  searchMusic(searchStr: string) {
  	let searchUrl = "https://api.spotify.com/v1/search?query=" + searchStr + "&offset=0&limit=20&type=artist&market=US";
  	return this.http.get(searchUrl).map(res => res.json());
  }

  getArtist(artist_id: string) {
  	let searchUrl = "http://api.spotify.com/v1/artists/" + artist_id;
  	return this.http.get(searchUrl).map(res => res.json());
  }

  getAlbums(artist_id: string) {
  	let searchUrl = "http://api.spotify.com/v1/artists/" + artist_id + "/albums";
  	return this.http.get(searchUrl).map(res => res.json());
  }

  getAlbum(album_id: string) {
  	let searchUrl = "https://api.spotify.com/v1/albums/" + album_id;
  	return this.http.get(searchUrl).map(res => res.json());
  }

  getCategories() {
    let searchUrl = "http://api.spotify.com/v1/browse/categories";
    return this.http.get(searchUrl).map(res => res.json());
  }

}
