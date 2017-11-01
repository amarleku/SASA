import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'main-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'SASAv2';
	welcome = {
		'name' : 'Astrit Marleku',
		'header': 'Welcome to ',
		'body': 'Rest Api Developed by Solaborate........helped by  ',
		
	};
	myData = {
		'Companies': {},
		'Users': {},
		'Products': {},
		'Posts': {}
	};
	private apiURL = 'http://localhost:25430/api/';
	data: any = {};
	constructor(private http: Http) {
		console.log('testing');
		this.getData('Companies');
		this.getInfo('Companies');
		this.getData('Users');
		this.getInfo('Users');
		this.getData('Products');
		this.getInfo('Products');
		this.getData('Posts');
		this.getInfo('Posts');
	}
	getData(var1) {
		return this.http.get(this.apiURL + var1)
			.map((res: Response) => res.json())
	}

	getInfo(var1) {
		this.getData(var1).subscribe(data => {
			switch (var1) {
				case 'Companies':
					this.myData.Companies = data;
					break;
				case 'Users':
					this.myData.Users = data;
					break;
				case 'Products':
					this.myData.Products = data;
					break;
				case 'Posts':
					this.myData.Posts = data;
					break;
				default:
					this.myData.Companies = data;
			}
			console.log(this.myData);
		})
	}
}