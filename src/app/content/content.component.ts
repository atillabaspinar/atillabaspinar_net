import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private router: ActivatedRoute) {

    this.css = [
      { label: 'Flexbox', value: { id: 1, name: 'Flexbox', code: 'NY' } },
      { label: 'Positioning', value: { id: 2, name: 'Positioning', code: 'RM' } },
      { label: 'Units', value: { id: 3, name: 'Units', code: 'LDN' } },
      { label: 'Bootstrap scss', value: { id: 4, name: 'Bootstrap', code: 'LDN' } },
      { label: 'PrimeNg', value: { id: 4, name: 'PrimeNg', code: 'LDN' } },
    ];

    this.js = [

      { label: 'Closure', value: { id: 1, name: 'Closure', code: 'NY' } },
      { label: 'Hoisting', value: { id: 2, name: 'Hoisting', code: 'RM' } },
    ];

    this.angular = [
      { label: 'RxJs', value: { id: 1, name: 'RxJs', code: 'NY' } },
      { label: 'Routing', value: { id: 2, name: 'Routing', code: 'RM' } },
    ];

    this.svg = [
      { label: 'Viewport', value: { id: 1, name: 'Viewport', code: 'NY' } },
      { label: 'Arc', value: { id: 2, name: 'Arc', code: 'RM' } },
      { label: 'Gauge', value: { id: 3, name: 'Gauge', code: 'RM' } },
    ];
   }

  css: SelectItem[];
  js: SelectItem[];
  angular: SelectItem[];
  svg: SelectItem[];

  selectedCities: string[];

  cities2 = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];

 title: string;
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      const param = params.get('id');
      console.log(param);
      this.title = param;
      if (param === 'css') { 
      }
    });
  }

}
