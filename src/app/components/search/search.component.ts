import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../classes/artist.class';

@Component({
  selector: 'app-search',
  providers: [SpotifyService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	searchStr: string;
	searchRes: Artist[];
	spotifyService: any;

	static get parameters() {
		return [SpotifyService];
	}

  constructor(spotifyService) {
  	this.spotifyService = spotifyService;
  }

  ngOnInit() {
  }

  searchMusic() {
  	this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
  		this.searchRes = res.artists.items;
  	});
  }

}
