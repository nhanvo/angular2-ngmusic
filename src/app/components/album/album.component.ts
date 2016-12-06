import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

import { Album } from "../../classes/album.class";

@Component({
  selector: 'app-album',
  providers: [SpotifyService],
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
	spotifyService: any;
	route: any;
	album: Album[];

	static get parameters() {
		return [ActivatedRoute, SpotifyService];
	}

  constructor(route, spotifyService) {
  	this.route = route;
  	this.spotifyService = spotifyService;
  }

  ngOnInit() {
  	this.route.params
  		.map(params => params["id"])
  		.subscribe((id) => {
  			this.spotifyService.getAlbum(id).subscribe(album => {
  				this.album = album;
  			});
  		});
  }

}
