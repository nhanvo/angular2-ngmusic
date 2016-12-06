import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../classes/artist.class';
import { Album } from '../../classes/album.class';

@Component({
  selector: 'app-artist',
  providers: [SpotifyService],
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
	artist: Artist[];
	albums: Album[];
	route: any;
	spotifyService: any;

	static get parameters() {
		return [ActivatedRoute, SpotifyService]
	}

  constructor(route, spotifyService) {
  	this.route = route;
  	this.spotifyService = spotifyService;
  }

  ngOnInit() {
  	this.route.params
  		.map(params => params['id'])
  		.subscribe((id) => {
  			this.spotifyService.getArtist(id).subscribe(artist => {
  				this.artist = artist;
  				console.log(artist);
  			});
  			this.spotifyService.getAlbums(id).subscribe(albums => {
  				this.albums = albums.items;
  				console.log(albums);
  			})
  		})
  }

}
